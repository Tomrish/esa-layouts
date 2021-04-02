"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const extension_1 = __importDefault(require("@esamarathon/esa-layouts-shared/mediabox/extension"));
const logging_1 = require("./util/logging");
const nodecg_1 = require("./util/nodecg");
const obs_1 = __importDefault(require("./util/obs"));
const rabbitmq_1 = require("./util/rabbitmq");
const mb = new extension_1.default(nodecg_1.get(), rabbitmq_1.mq.evt);
const obsConfig = nodecg_1.get().bundleConfig.obs;
/**
 * Check to know if a specified scene has sponsor logos in it or not.
 * @param name Name of scene to check; will be fully confirmed with OBS.
 */
function doesSceneHaveSponsorLogos(name) {
    if (!name) {
        return false;
    }
    // Hardcoded scenes that have sponsor logos on them as of "now".
    const scenes = [
        obs_1.default.findScene(obsConfig.names.scenes.gameLayout),
        obs_1.default.findScene(obsConfig.names.scenes.intermission),
        obs_1.default.findScene(obsConfig.names.scenes.commercials),
    ];
    const namedScene = obs_1.default.findScene(name);
    return scenes.includes(namedScene);
}
// Will log sponsors changing when going live/going offline if needed.
obs_1.default.on('streamingStatusChanged', (streaming, old) => {
    if (doesSceneHaveSponsorLogos(obs_1.default.currentScene)
        && mb.mediaBox.value.current && typeof old === 'boolean') {
        if (streaming) {
            logging_1.logSponsorLogoChange(mb.mediaBox.value.current);
        }
        else {
            logging_1.logSponsorLogoChange();
        }
    }
});
// Will log sponsors changing when the scene changes if needed.
obs_1.default.on('currentSceneChanged', (current, last) => {
    if (obs_1.default.streaming && mb.mediaBox.value.current && last) {
        const currentHas = doesSceneHaveSponsorLogos(current);
        const lastHas = doesSceneHaveSponsorLogos(last);
        if (currentHas && !lastHas) {
            logging_1.logSponsorLogoChange(mb.mediaBox.value.current);
        }
        else if (!currentHas && lastHas) {
            logging_1.logSponsorLogoChange();
        }
    }
});
mb.mediaBox.on('change', (newVal, oldVal) => {
    var _a, _b;
    if (((_a = newVal.current) === null || _a === void 0 ? void 0 : _a.id) !== ((_b = oldVal === null || oldVal === void 0 ? void 0 : oldVal.current) === null || _b === void 0 ? void 0 : _b.id)
        && obs_1.default.streaming && doesSceneHaveSponsorLogos(obs_1.default.currentScene)) {
        logging_1.logSponsorLogoChange(newVal.current);
    }
});