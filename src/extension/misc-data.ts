import { Configschema } from 'configschema';
import SpeedcontrolUtil from 'speedcontrol-util';
import { RunData } from '../../../nodecg-speedcontrol/types';
import { getOtherStreamEventShort } from './util/helpers';
import { get as nodecg } from './util/nodecg';
import { mq } from './util/rabbitmq';
import { commentators, obsData, otherStreamData } from './util/replicants';

const config = (nodecg().bundleConfig as Configschema);
const sc = new SpeedcontrolUtil(nodecg());

// Screened data from our moderation tool.
mq.on('newScreenedSub', (data) => {
  nodecg().log.debug('[Misc Data] Received new subscriber');
  nodecg().sendMessage('newSub', data);
});
mq.on('newScreenedTweet', (data) => {
  nodecg().log.debug('[Misc Data] Received new tweet');
  nodecg().sendMessage('newTweet', data);
});
mq.on('newScreenedCheer', (data) => {
  nodecg().log.debug('[Misc Data] Received new cheer');
  nodecg().sendMessage('newCheer', data);
});
mq.on('newScreenedCrowdControl', (data) => {
  nodecg().log.debug('[Misc Data] Received new crowd control message');
  nodecg().sendMessage('newCrowdControl', data);
});

// Information that should come from our 2nd stream.
mq.on('runChanged', (data) => {
  if (getOtherStreamEventShort() && getOtherStreamEventShort() === data.event) {
    otherStreamData.value.runData = data.run as RunData | null;
    nodecg().log.debug('[Misc Data] Received modified run data from other stream');
  }
});
mq.on('gameSceneChanged', (data) => {
  if (getOtherStreamEventShort() && getOtherStreamEventShort() === data.event) {
    nodecg().log.debug('[Misc Data] Received game scene change from other stream:', data.action);
    if (data.action === 'start') {
      otherStreamData.value.show = true;
    } else if (data.action === 'end') {
      otherStreamData.value.show = false;
    }
  }
});

// When someone scans in on one of the big timer buttons.
// Currently only used for commentators.
mq.on('bigbuttonTagScanned', (data) => {
  const name = data.user.displayName;
  if (!commentators.value.includes(name)) {
    commentators.value.push(name);
    nodecg().log.debug('[Misc Data] Added new commentator:', name);
  }
});

// Reset the commentators when the run changes and not on the game layout scene.
sc.runDataActiveRun.on('change', (newVal, oldVal) => {
  if ((!newVal || (newVal && oldVal && oldVal.id !== newVal.id))
  && obsData.value.scene && !obsData.value.scene.includes(config.obs.names.scenes.gameLayout)) {
    commentators.value.length = 0;
    nodecg().log.debug('[Misc Data] Cleared commentators');
  }
});
