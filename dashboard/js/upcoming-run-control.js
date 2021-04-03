/*! For license information please see upcoming-run-control.js.LICENSE.txt */
(()=>{"use strict";var t,e={2699:t=>{var e,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};e=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var i=Number.isNaN||function(t){return t!=t};function o(){o.init.call(this)}t.exports=o,t.exports.once=function(t,e){return new Promise((function(n,r){function i(n){t.removeListener(e,o),r(n)}function o(){"function"==typeof t.removeListener&&t.removeListener("error",i),n([].slice.call(arguments))}v(t,e,o,{once:!0}),"error"!==e&&function(t,e,n){"function"==typeof t.on&&v(t,"error",e,{once:!0})}(t,i)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function a(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function u(t){return void 0===t._maxListeners?o.defaultMaxListeners:t._maxListeners}function l(t,e,n,r){var i,o,s,l;if(a(n),void 0===(o=t._events)?(o=t._events=Object.create(null),t._eventsCount=0):(void 0!==o.newListener&&(t.emit("newListener",e,n.listener?n.listener:n),o=t._events),s=o[e]),void 0===s)s=o[e]=n,++t._eventsCount;else if("function"==typeof s?s=o[e]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=u(t))>0&&s.length>i&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=t,c.type=e,c.count=s.length,l=c,console&&console.warn&&console.warn(l)}return t}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(t,e,n){var r={fired:!1,wrapFn:void 0,target:t,type:e,listener:n},i=c.bind(r);return i.listener=n,r.wrapFn=i,i}function f(t,e,n){var r=t._events;if(void 0===r)return[];var i=r[e];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(t){for(var e=new Array(t.length),n=0;n<e.length;++n)e[n]=t[n].listener||t[n];return e}(i):p(i,i.length)}function d(t){var e=this._events;if(void 0!==e){var n=e[t];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}function v(t,e,n,r){if("function"==typeof t.on)r.once?t.once(e,n):t.on(e,n);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function i(o){r.once&&t.removeEventListener(e,i),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(t){if("number"!=typeof t||t<0||i(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");s=t}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||i(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},o.prototype.getMaxListeners=function(){return u(this)},o.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var i="error"===t,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(e.length>0&&(s=e[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var u=o[t];if(void 0===u)return!1;if("function"==typeof u)r(u,this,e);else{var l=u.length,c=p(u,l);for(n=0;n<l;++n)r(c[n],this,e)}return!0},o.prototype.addListener=function(t,e){return l(this,t,e,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(t,e){return l(this,t,e,!0)},o.prototype.once=function(t,e){return a(e),this.on(t,h(this,t,e)),this},o.prototype.prependOnceListener=function(t,e){return a(e),this.prependListener(t,h(this,t,e)),this},o.prototype.removeListener=function(t,e){var n,r,i,o,s;if(a(e),void 0===(r=this._events))return this;if(void 0===(n=r[t]))return this;if(n===e||n.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,n.listener||e));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===e||n[o].listener===e){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(n,i),1===n.length&&(r[t]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",t,s||e)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(t){var e,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[t]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=n[t]))this.removeListener(t,e);else if(void 0!==e)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this},o.prototype.listeners=function(t){return f(this,t,!0)},o.prototype.rawListeners=function(t){return f(this,t,!1)},o.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):d.call(t,e)},o.prototype.listenerCount=d,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]}},543:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return s(e,t),e},u=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},l=this&&this.__generator||function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},c=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(n(8138)),h=a(n(8013)),f="nodecg-speedcontrol",d=function(t){function e(e){var n=t.call(this)||this;return n.runDataArray=e.Replicant("runDataArray",f),n.runDataActiveRun=e.Replicant("runDataActiveRun",f),n.runDataActiveRunSurrounding=e.Replicant("runDataActiveRunSurrounding",f),n.timer=e.Replicant("timer",f),n.runFinishTimes=e.Replicant("runFinishTimes",f),n.twitchCommercialTimer=e.Replicant("twitchCommercialTimer",f),n.timerChangesDisabled=e.Replicant("timerChangesDisabled",f),n.nodecg=e,n.timer.on("change",(function(t,e,r){h.onTimerChange(n,t,e,r)})),n}return i(e,t),e.prototype.getCurrentRun=function(){return c.default(this.runDataActiveRun.value)},e.prototype.getRunDataArray=function(){return c.default(this.runDataArray.value||[])},e.prototype.getNextRuns=function(t,e){void 0===t&&(t=4);var n=this.runDataActiveRunSurrounding.value?this.runDataActiveRunSurrounding.value.next:void 0,r=this.findRunIndex(e||n);return r=e?r+=1:r,this.getRunDataArray().slice(r,r+t)},e.prototype.findRunIndex=function(t){var e=t;return t&&"string"!=typeof t&&(e=t.id),this.getRunDataArray().findIndex((function(t){return t.id===e}))},e.prototype.startTimer=function(){return u(this,void 0,void 0,(function(){return l(this,(function(t){return[2,this.nodecg.sendMessageToBundle("timerStart",f)]}))}))},e.prototype.stopTimer=function(t){return void 0===t&&(t=0),u(this,void 0,void 0,(function(){var e,n;return l(this,(function(r){if((e=this.getCurrentRun())&&e.teams[t]&&(n=e.teams[t].id),e&&!n)throw new Error("Run is active but team with index "+t+" unavailable");return[2,this.nodecg.sendMessageToBundle("timerStop",f,{id:n})]}))}))},e.prototype.resetTimer=function(){return u(this,void 0,void 0,(function(){return l(this,(function(t){return[2,this.nodecg.sendMessageToBundle("timerReset",f)]}))}))},e.prototype.disableTimerChanges=function(){this.timerChangesDisabled.value=!0},e.prototype.enableTimerChanges=function(){this.timerChangesDisabled.value=!1},e.prototype.startTwitchCommercial=function(t){return u(this,void 0,void 0,(function(){return l(this,(function(e){return[2,this.nodecg.sendMessageToBundle("twitchStartCommercial",f,{duration:t})]}))}))},e}(h.default);t.exports=d},829:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.SpeedcontrolUtilBrowser=e.SpeedcontrolUtilServer=e.SpeedcontrolUtil=void 0;var i=r(n(543)),o=r(n(1878));e.default=o.default,e.SpeedcontrolUtil=o.default,e.SpeedcontrolUtilServer=o.default,e.SpeedcontrolUtilBrowser=i.default},1878:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&o(e,t,n);return s(e,t),e},u=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))},l=this&&this.__generator||function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},c=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(n(8138)),h=a(n(8013)),f="nodecg-speedcontrol",d=function(t){function e(e){var n=t.call(this)||this;return n.runDataArray=e.Replicant("runDataArray",f),n.runDataActiveRun=e.Replicant("runDataActiveRun",f),n.runDataActiveRunSurrounding=e.Replicant("runDataActiveRunSurrounding",f),n.timer=e.Replicant("timer",f),n.runFinishTimes=e.Replicant("runFinishTimes",f),n.twitchCommercialTimer=e.Replicant("twitchCommercialTimer",f),n.timerChangesDisabled=e.Replicant("timerChangesDisabled",f),n.sendMessage=e.extensions[f].sendMessage,n.listenFor=e.extensions[f].listenFor,n.timer.on("change",(function(t,e,r){h.onTimerChange(n,t,e,r)})),n}return i(e,t),e.prototype.getCurrentRun=function(){return c.default(this.runDataActiveRun.value)},e.prototype.getRunDataArray=function(){return c.default(this.runDataArray.value)},e.prototype.getNextRuns=function(t,e){void 0===t&&(t=4);var n=this.findRunIndex(e||this.runDataActiveRunSurrounding.value.next);return n=e?n+=1:n,this.getRunDataArray().slice(n,n+t)},e.prototype.findRunIndex=function(t){var e=t;return t&&"string"!=typeof t&&(e=t.id),this.getRunDataArray().findIndex((function(t){return t.id===e}))},e.prototype.startTimer=function(){return u(this,void 0,void 0,(function(){return l(this,(function(t){return[2,this.sendMessage("timerStart")]}))}))},e.prototype.stopTimer=function(t){return void 0===t&&(t=0),u(this,void 0,void 0,(function(){var e,n;return l(this,(function(r){if((e=this.getCurrentRun())&&e.teams[t]&&(n=e.teams[t].id),e&&!n)throw new Error("Run is active but team with index "+t+" unavailable");return[2,this.sendMessage("timerStop",{id:n})]}))}))},e.prototype.resetTimer=function(){return u(this,void 0,void 0,(function(){return l(this,(function(t){return[2,this.sendMessage("timerReset")]}))}))},e.prototype.disableTimerChanges=function(){this.timerChangesDisabled.value=!0},e.prototype.enableTimerChanges=function(){this.timerChangesDisabled.value=!1},e.prototype.startTwitchCommercial=function(t){return u(this,void 0,void 0,(function(){return l(this,(function(e){return[2,this.sendMessage("twitchStartCommercial",{duration:t})]}))}))},e}(h.default);t.exports=d},8013:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.onTimerChange=void 0;var o=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.formPlayerNamesStr=function(t){return t.teams.map((function(t){return t.players.map((function(t){return t.name})).join(", ")})).join(" vs. ")||"N/A"},e.getRunTotalPlayers=function(t){return t.teams.reduce((function(t,e){return t+e.players.reduce((function(t){return t+1}),0)}),0)},e}(n(2699).EventEmitter);e.onTimerChange=function(t,e,n,r){if(n){var i=n.state,o=e.state;i!==o&&("running"===o?"paused"===i?t.emit("timerResumed"):"stopped"===i&&t.emit("timerStarted"):"finished"===o?t.emit("timerStopped"):"paused"===o?t.emit("timerPaused"):"stopped"===o&&t.emit("timerReset")),r&&r.forEach((function(n){if(["paused","stopped"].includes(o)&&i===o&&"/"===n.path&&"update"===n.method&&"milliseconds"===n.args.prop&&t.emit("timerEdited"),"/teamFinishTimes"===n.path){var r=n.args.prop,s=e.teamFinishTimes[r];"add"===n.method?t.emit("timerTeamStopped",r,"forfeit"===s.state):"delete"===n.method&&t.emit("timerTeamUndone",r)}}))}},e.default=o},4523:(t,e,n)=>{var r=n(5803),i=n(9459);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function u(t,e){l(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){l(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){l(t,e,n)}))}function l(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var i=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,i,t,n):Reflect.defineMetadata(r,i,t)}))}var c={__proto__:[]}instanceof Array;function h(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var r=new e;e.prototype._init=n;var i={};return Object.keys(r).forEach((function(t){void 0!==r[t]&&(i[t]=r[t])})),i}var f=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(f.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return s({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return h(this,t)}});var i=t.__decorators__;i&&(i.forEach((function(t){return t(e)})),delete t.__decorators__);var o=Object.getPrototypeOf(t.prototype),l=o instanceof r.default?o.constructor:r.default,c=l.extend(e);return v(c,t,l),a()&&u(c,t),c}var p={prototype:!0,arguments:!0,callee:!0,caller:!0};function v(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!p[r]){var i=Object.getOwnPropertyDescriptor(t,r);if(!i||i.configurable){var s,a,u=Object.getOwnPropertyDescriptor(e,r);if(!c){if("cid"===r)return;var l=Object.getOwnPropertyDescriptor(n,r);if(a=o(s=u.value),null!=s&&("object"===a||"function"===a)&&l&&l.value===u.value)return}Object.defineProperty(t,r,u)}}}))}function m(t){return"function"==typeof t?d(t):function(e){return d(e,t)}}m.registerHooks=function(t){var e;f.push.apply(f,function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(e=t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}())};const y=m;n(4807),n(7023),n(5654),n(6070),n(8793);var g=n(8586),b=_("computed",g.rn);function _(t,e){function n(n,r){return function(i,o,s){var a="function"==typeof i?i:i.constructor;a.__decorators__||(a.__decorators__=[]),"number"!=typeof s&&(s=void 0),a.__decorators__.push((function(i){return function(i,o){i[t]||(i[t]={});var s,a=((s={})[o]=n,s);i[t][o]=void 0!==r?e(r,a)[o]:e(a)[o]}(i,o)}))}}return function(t,e){if("string"==typeof e){var r=e,i=t;return n(r,void 0)(i,r)}return n(t,function(t){var e=t&&t.namespace;if("string"==typeof e)return"/"!==e[e.length-1]?e+"/":e}(e))}}_("computed",g.Se),_("methods",g.nv),_("methods",g.OI);var w=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let x=class extends r.default{forceUpcomingRun(t){nodecg.sendMessage("forceUpcomingRun",t)}getRunStr(t){const e=this.runDataArray.find((e=>e.id===t));return e?[e.game||"?",e.category].filter(Boolean).join(" - "):"?"}};w([b],x.prototype,"runDataArray",void 0),w([b],x.prototype,"runDataActiveRunSurrounding",void 0),w([b],x.prototype,"upcomingRunID",void 0),x=w([y],x);const O=x;var S=n(5440),R=n(7618),C=n.n(R),k=n(2311),j=n(7653),D=n(1954);const $=r.default.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}});var A=n(2377);const B=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,A.kb)(this.height),n=(0,A.kb)(this.minHeight),r=(0,A.kb)(this.minWidth),i=(0,A.kb)(this.maxHeight),o=(0,A.kb)(this.maxWidth),s=(0,A.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),i&&(t.maxHeight=i),o&&(t.maxWidth=o),s&&(t.width=s),t}}}),T=r.default.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"==typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"==typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}});var P=n(9405),E=n(6248);const L=(0,E.Z)(j.Z,D.Z,$,B,T,P.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),M=D.Z.extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,A.kb)(this.calculatedSize),width:(0,A.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}});var N=n(3844);function I(t="value",e="input"){return r.default.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}I();const F={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean},z=function(t=[]){return r.default.extend({name:"positionable",props:t.length?(0,A.ji)(F,t):F})}();var U=n(7202);const Z=r.default.extend({name:"routable",directives:{Ripple:U.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},methods:{click(t){this.$emit("click",t)},generateRouteLink(){let t,e=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,click:this.click},ref:"link"};if(void 0===this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let r=this.activeClass,i=this.exactActiveClass||r;this.proxyClass&&(r=`${r} ${this.proxyClass}`.trim(),i=`${i} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:e,activeClass:r,exactActiveClass:i,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:t,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`_vnode.data.class.${`${this.activeClass} ${this.proxyClass||""}`.trim()}`;this.$nextTick((()=>{(0,A.vO)(this.$refs.link,t)&&this.toggle()}))},toggle:()=>{}}});var W=n(5010),V=n(8298);const K=(0,E.Z)(L,Z,z,W.Z,(0,N.d)("btnToggle"),I("inputValue")).extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return $.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!(this.text||this.plain||this.outlined||this.icon)},isElevated(){return Boolean(!(this.icon||this.text||this.outlined||this.depressed||this.disabled||this.plain||!(null==this.elevation||Number(this.elevation)>0)))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){[["flat","text"],["outline","outlined"],["round","rounded"]].forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,V.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(M,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:r}=this.generateRouteLink(),i=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(r.attrs.type=this.type,r.attrs.disabled=this.disabled),r.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?r:i(this.color,r),e)}});var H=(0,S.Z)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{style:{"font-style":"italic","margin-bottom":"5px"}},[t._v("\n    This should only need to be used if the automatically set one is incorrect.\n  ")]),t._v(" "),n("div",{style:{overflow:"hidden","white-space":"nowrap"}},[n("span",{style:{"font-weight":"bold"}},[t._v("\n      Currently Set:\n    ")]),t._v(" "),t.upcomingRunID?n("span",{attrs:{title:t.getRunStr(t.upcomingRunID)}},[t._v("\n      "+t._s(t.getRunStr(t.upcomingRunID))+"\n    ")]):n("span",[t._v("\n      none\n    ")])]),t._v(" "),t._l(["previous","current","next"],(function(e,r){return n("div",{key:r,style:{"margin-top":"5px"}},[t.runDataActiveRunSurrounding[e]?n("v-btn",{staticClass:"ForceUpcomingRunBtn",attrs:{width:"100%",block:"",title:t.getRunStr(t.runDataActiveRunSurrounding[e])},on:{click:function(n){return t.forceUpcomingRun(t.runDataActiveRunSurrounding[e])}}},[n("div",{staticClass:"d-flex justify-center",style:{width:"100%"}},[n("div",{style:{overflow:"hidden"}},[t._v("\n          Force to "+t._s(e)+" ("+t._s(t.getRunStr(t.runDataActiveRunSurrounding[e]))+")\n        ")])])]):n("v-btn",{attrs:{width:"100%",block:"",disabled:""}},[t._v("\n      "+t._s(e)+" not available\n    ")])],1)})),t._v(" "),n("v-btn",{style:{"margin-top":"5px"},on:{click:function(e){return t.forceUpcomingRun()}}},[t._v("\n    Force to nothing\n  ")])],2)}),[],!1,null,null,null);const G=H.exports;C()(H,{VApp:k.Z,VBtn:K});var q=n(8138),J=n.n(q);const X=new(n(829).SpeedcontrolUtilBrowser)(nodecg);r.default.use(g.ZP);const Q={runDataArray:X.runDataArray,runDataActiveRunSurrounding:X.runDataActiveRunSurrounding,upcomingRunID:nodecg.Replicant("upcomingRunID")},Y=new g.ZP.Store({state:{},mutations:{setState(t,{name:e,val:n}){r.default.set(t,e,n)}}});var tt,et,nt,rt;Object.keys(Q).forEach((t=>{Q[t].on("change",(e=>{Y.commit("setState",{name:t,val:J()(e)})}))})),(tt=void 0,et=void 0,nt=void 0,rt=function*(){return yield NodeCG.waitForReplicants(...Object.keys(Q).map((t=>Q[t]))),Y},new(nt||(nt=Promise))((function(t,e){function n(t){try{i(rt.next(t))}catch(t){e(t)}}function r(t){try{i(rt.throw(t))}catch(t){e(t)}}function i(e){var i;e.done?t(e.value):(i=e.value,i instanceof nt?i:new nt((function(t){t(i)}))).then(n,r)}i((rt=rt.apply(tt,et||[])).next())}))).then((t=>{new r.default({vuetify:i.Z,store:t,el:"#App",render:t=>t(G)})}))},9405:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n(5803).default.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:()=>({themeableProvide:{isDark:!1}}),computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}})},8298:(t,e,n)=>{n.d(e,{Kd:()=>o,N6:()=>s,fK:()=>a});var r=n(1823);function i(t,e,n){if(!r.Z.config.silent){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?function(t){if(t._isVue&&t.$parent){const e=[];let n=0;for(;t;){if(e.length>0){const r=e[e.length-1];if(r.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[r,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${l(t[0])}... (${t[1]} recursive calls)`:l(t)}`)).join("\n")}return`\n\n(found in ${l(t)})`}(e):"")}}function o(t,e,n){const r=i(t,e,n);null!=r&&console.warn(r)}function s(t,e,n){const r=i(t,e,n);null!=r&&console.error(r)}function a(t,e,n,r){s(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,r)}const u=/(?:^|[-_])(\w)/g;function l(t,e){if(t.$root===t)return"<Root>";const n="function"==typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const t=i.match(/([^/\\]+)\.vue$/);r=t&&t[1]}return(r?`<${o=r,o.replace(u,(t=>t.toUpperCase())).replace(/[-_]/g,"")}>`:"<Anonymous>")+(i&&!1!==e?` at ${i}`:"");var o}},2377:(t,e,n)=>{n.d(e,{qw:()=>i,vO:()=>o,ji:()=>s,kb:()=>a,Do:()=>l,XP:()=>c,uZ:()=>h,Ee:()=>f});let r=!1;try{if("undefined"!=typeof window){const t=Object.defineProperty({},"passive",{get:()=>{r=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(t){console.warn(t)}function i(t,e,n){const r=e.length-1;if(r<0)return void 0===t?n:t;for(let i=0;i<r;i++){if(null==t)return n;t=t[e[i]]}return null==t||void 0===t[e[r]]?n:t[e[r]]}function o(t,e,n){return null!=t&&e&&"string"==typeof e?void 0!==t[e]?t[e]:i(t,(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n):n}function s(t,e){const n={};for(let r=0;r<e.length;r++){const i=e[r];void 0!==t[i]&&(n[i]=t[i])}return n}function a(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function u(t){return null!==t&&"object"==typeof t}const l=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34});function c(t){return Object.keys(t)}function h(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function f(t={},e={}){for(const n in e){const r=t[n],i=e[n];u(r)&&u(i)?t[n]=f(r,i):t[n]=i}return t}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,r),o.exports}r.m=e,t=[],r.O=(e,n,i,o)=>{if(!n){var s=1/0;for(l=0;l<t.length;l++){for(var[n,i,o]=t[l],a=!0,u=0;u<n.length;u++)(!1&o||s>=o)&&Object.keys(r.O).every((t=>r.O[t](n[u])))?n.splice(u--,1):(a=!1,o<s&&(s=o));a&&(t.splice(l--,1),e=i())}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,i,o]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={356:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var i,o,[s,a,u]=n,l=0;for(i in a)r.o(a,i)&&(r.m[i]=a[i]);for(u&&u(r),e&&e(n);l<s.length;l++)o=s[l],r.o(t,o)&&t[o]&&t[o][0](),t[s[l]]=0;r.O()},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var i=r.O(void 0,[459,741,277],(()=>r(4523)));i=r.O(i)})();