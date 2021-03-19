"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const extension_1 = __importDefault(require("@esamarathon/esa-layouts-shared/music/extension"));
const nodecg_1 = require("./util/nodecg");
const obs_1 = __importDefault(require("./util/obs"));
const config = nodecg_1.get().bundleConfig.music;
const music = new extension_1.default(nodecg_1.get(), config);
// Listen to OBS transitions to play/pause correctly.
obs_1.default.conn.on('TransitionBegin', (data) => {
    if (data['to-scene']) {
        if (data['to-scene'].endsWith('[M]')) {
            music.play();
        }
        else {
            music.pause();
        }
    }
});
