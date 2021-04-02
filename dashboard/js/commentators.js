(()=>{"use strict";var t,e={6563:(t,e,i)=>{var s=i(5803),n=i(9459),a=i(5925),r=(i(4807),i(7023),i(5654),i(6070),i(8793),i(8586)),l=u("computed",r.rn),o=(u("computed",r.Se),u("methods",r.nv),u("methods",r.OI));function u(t,e){function i(i,s){return(0,a.createDecorator)((function(n,a){n[t]||(n[t]={});var r,l=((r={})[a]=i,r);n[t][a]=void 0!==s?e(s,l)[a]:e(l)[a]}))}return function(t,e){if("string"==typeof e){var s=e,n=t;return i(s,void 0)(n,s)}return i(t,function(t){var e=t&&t.namespace;if("string"==typeof e)return"/"!==e[e.length-1]?e+"/":e}(e))}}var d=function(t,e,i,s){var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};let c=class extends s.default{constructor(){super(...arguments),this.nameEntry="",this.disable=!1}add(){return t=this,e=void 0,s=function*(){this.disable=!0;try{yield nodecg.sendMessage("commentatorAdd",this.nameEntry)}catch(t){}this.disable=!1,this.nameEntry=""},new((i=void 0)||(i=Promise))((function(n,a){function r(t){try{o(s.next(t))}catch(t){a(t)}}function l(t){try{o(s.throw(t))}catch(t){a(t)}}function o(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,l)}o((s=s.apply(t,e||[])).next())}));var t,e,i,s}};d([l],c.prototype,"commentators",void 0),d([o("clearCommentators")],c.prototype,"clear",void 0),c=d([a.default],c);const h=c;var p=i(5440),m=i(7618),v=i.n(m),f=i(2311),g=i(6255),y=i(690),b=i(221),x=i(9657),k=i(6248);const V=(0,k.Z)(b.Z,x.Z,y.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...x.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...y.Z.options.computed.classes.call(this)}},styles(){const t={...y.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=b.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}});var I=i(2244),$=i(6122);const _=$.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...$.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}});var C=i(1954),w=i(3844),O=i(9405),Z=i(9085),B=i(7202),S=i(2377),A=i(8298);const M=(0,k.Z)(C.Z,x.Z,O.Z,(0,w.d)("listItemGroup"),(0,Z.d)("inputValue")).extend().extend({name:"v-list-item",directives:{Ripple:B.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...x.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(x.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,A.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t}},render(t){let{tag:e,data:i}=this.generateRouteLink();i.attrs={...i.attrs,...this.genAttrs()},i[this.to?"nativeOn":"on"]={...i[this.to?"nativeOn":"on"],keydown:t=>{t.keyCode===S.Do.enter&&this.click(t),this.$emit("keydown",t)}},this.inactive&&(e="div"),this.inactive&&this.to&&(i.on=i.nativeOn,delete i.nativeOn);const s=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.setTextColor(this.color,i),s)}});var j=i(312);const L=(0,k.Z)(j.Z,O.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.internalValue===t;const t=this.internalValue;return Array.isArray(t)?e=>t.includes(e):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,A.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue:(t,e)=>null==t.value||""===t.value?e:t.value,onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),i=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(i)<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==i)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const i=e.find((t=>!t.disabled));if(!i)return;const s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))},updateMultiple(t){const e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),i=e.findIndex((e=>e===t));this.mandatory&&i>-1&&e.length-1<1||null!=this.max&&i<0&&e.length+1>this.max||(i>-1?e.splice(i,1):e.push(t),this.internalValue=e)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}}),E=(L.extend({name:"v-item-group",provide(){return{itemGroup:this}}}),(0,k.Z)(L,C.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...L.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...L.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}));var P=i(373),G=(0,p.Z)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-card",{style:{"margin-bottom":"10px"},attrs:{tile:""}},[i("v-list",{attrs:{dense:"",disabled:""}},[i("v-list-item-group",[t.commentators.length?t._l(t.commentators,(function(e,s){return i("v-list-item",{key:s},[t._v("\n            "+t._s(e)+"\n          ")])})):i("v-list-item",{style:{"font-style":"italic"}},[t._v("\n          No commentators specified\n        ")])],2)],1)],1),t._v(" "),i("div",{staticClass:"d-flex"},[i("v-text-field",{attrs:{label:"Enter Name Here","hide-details":"",filled:"",spellcheck:!1,disabled:t.disable},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add(e)}},model:{value:t.nameEntry,callback:function(e){t.nameEntry=e},expression:"nameEntry"}}),t._v(" "),i("v-btn",{style:{"min-width":"0","margin-left":"5px"},attrs:{height:"56px",disabled:t.disable},on:{click:t.add}},[i("v-icon",[t._v("mdi-check")])],1)],1),t._v(" "),i("v-btn",{style:{"margin-top":"10px"},attrs:{disabled:t.disable},on:{click:t.clear}},[t._v("\n    Manual Clear\n  ")])],1)}),[],!1,null,null,null);const N=G.exports;v()(G,{VApp:f.Z,VBtn:g.Z,VCard:V,VIcon:I.Z,VList:_,VListItem:M,VListItemGroup:E,VTextField:P.Z});var R=i(8138),D=i.n(R);s.default.use(r.ZP);const T={commentators:nodecg.Replicant("commentators")},F=new r.ZP.Store({state:{},mutations:{setState(t,{name:e,val:i}){s.default.set(t,e,i)},clearCommentators(){void 0!==T.commentators.value&&(T.commentators.value.length=0)}}});var K,W,H,J;Object.keys(T).forEach((t=>{T[t].on("change",(e=>{F.commit("setState",{name:t,val:D()(e)})}))})),(K=void 0,W=void 0,H=void 0,J=function*(){return yield NodeCG.waitForReplicants(...Object.keys(T).map((t=>T[t]))),F},new(H||(H=Promise))((function(t,e){function i(t){try{n(J.next(t))}catch(t){e(t)}}function s(t){try{n(J.throw(t))}catch(t){e(t)}}function n(e){var n;e.done?t(e.value):(n=e.value,n instanceof H?n:new H((function(t){t(n)}))).then(i,s)}n((J=J.apply(K,W||[])).next())}))).then((t=>{new s.default({vuetify:n.Z,store:t,el:"#App",render:t=>t(N)})}))},8298:(t,e,i)=>{i.d(e,{Kd:()=>a,N6:()=>r,fK:()=>l,Jk:()=>o});var s=i(1823);function n(t,e,i){if(!s.Z.config.silent){if(i&&(e={_isVue:!0,$parent:i,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?function(t){if(t._isVue&&t.$parent){const e=[];let i=0;for(;t;){if(e.length>0){const s=e[e.length-1];if(s.constructor===t.constructor){i++,t=t.$parent;continue}i>0&&(e[e.length-1]=[s,i],i=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${d(t[0])}... (${t[1]} recursive calls)`:d(t)}`)).join("\n")}return`\n\n(found in ${d(t)})`}(e):"")}}function a(t,e,i){const s=n(t,e,i);null!=s&&console.warn(s)}function r(t,e,i){const s=n(t,e,i);null!=s&&console.error(s)}function l(t,e,i,s){r(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,i,s)}function o(t,e,i){a(`[REMOVED] '${t}' has been removed. You can safely omit it.`,e,i)}const u=/(?:^|[-_])(\w)/g;function d(t,e){if(t.$root===t)return"<Root>";const i="function"==typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let s=i.name||i._componentTag;const n=i.__file;if(!s&&n){const t=n.match(/([^/\\]+)\.vue$/);s=t&&t[1]}return(s?`<${a=s,a.replace(u,(t=>t.toUpperCase())).replace(/[-_]/g,"")}>`:"<Anonymous>")+(n&&!1!==e?` at ${n}`:"");var a}}},i={};function s(t){var n=i[t];if(void 0!==n)return n.exports;var a=i[t]={exports:{}};return e[t](a,a.exports,s),a.exports}s.m=e,t=[],s.O=(e,i,n,a)=>{if(!i){var r=1/0;for(u=0;u<t.length;u++){for(var[i,n,a]=t[u],l=!0,o=0;o<i.length;o++)(!1&a||r>=a)&&Object.keys(s.O).every((t=>s.O[t](i[o])))?i.splice(o--,1):(l=!1,a<r&&(r=a));l&&(t.splice(u--,1),e=n())}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[i,n,a]},s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={52:0};s.O.j=e=>0===t[e];var e=(e,i)=>{var n,a,[r,l,o]=i,u=0;for(n in l)s.o(l,n)&&(s.m[n]=l[n]);for(o&&o(s),e&&e(i);u<r.length;u++)a=r[u],s.o(t,a)&&t[a]&&t[a][0](),t[r[u]]=0;s.O()},i=self.webpackChunk=self.webpackChunk||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var n=s.O(void 0,[459,741,277,50,33,89,656],(()=>s(6563)));n=s.O(n)})();