import{$ as Te,$a as c,$b as mi,A as Wn,Aa as P,B as qi,Ba as A,Bb as to,C as zn,Ca as u,D as Le,Da as s,Db as io,E as ft,Ea as l,Eb as vt,F as X,Fa as ce,Fb as be,G as Hn,Ga as si,Gb as At,H as ti,Ha as li,Hb as no,I as ii,Ia as di,Ib as qe,J as Ge,Ja as at,Jb as oo,K as me,Ka as st,Kb as yt,L as Ve,La as R,Lb as Ki,M as v,Mb as ro,N as It,Na as se,Nb as ao,O as h,Oa as Ce,Ob as He,P as ni,Pa as z,Pb as so,Q as ue,Qa as gt,Qb as lo,R as he,Ra as We,Rb as ve,S as jn,Sa as T,Sb as co,T as Re,Ta as F,Tb as $i,U as Me,Ua as qn,Ub as Ji,Va as Xn,Vb as en,W,Wa as Xi,Wb as Xe,X as U,Xa as q,Xb as le,Y as oi,Ya as Zi,Yb as Ct,Z as f,Za as L,Zb as mo,_ as Tt,_a as Rt,_b as Lt,a as C,aa as Ne,ab as S,ac as ui,b as N,ba as O,bb as Fe,bc as Ze,c as de,cb as g,d as Se,da as Un,db as _,dc as uo,e as ht,ea as pt,eb as b,ec as ho,f as D,fa as d,fb as Z,fc as fo,g as Fn,ga as ot,gb as ee,h as $t,ha as Ft,hb as fe,i as On,ia as Ye,ib as ci,j as Ae,ja as ge,jb as Zn,k as Rn,ka as ae,l as De,la as Ot,lb as ze,m as Pn,ma as Gn,mb as k,n as Jt,na as w,nb as _t,o as An,oa as Be,ob as Pt,p as Ln,pa as I,pb as Qn,q as Ue,qa as $,qb as Ee,r as Ie,ra as _e,rb as M,s as Gi,sa as rt,sb as bt,t as Vn,ta as ri,tb as Kn,u as Nn,ua as Yn,ub as $n,v as ei,va as ai,vb as Qi,wa as J,wb as Jn,xa as G,xb as eo,y as Bn,ya as Y,z as Yi,za as B}from"./chunk-INOMJANO.js";var xo=(()=>{class o{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||o)(ae(ge),ae(O))};static \u0275dir=I({type:o})}return o})(),wo=(()=>{class o extends xo{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ne(o)))(i||o)}})();static \u0275dir=I({type:o,features:[_e]})}return o})(),on=new v("");var ma={provide:on,useExisting:Ge(()=>pe),multi:!0};function ua(){let o=Qi()?Qi().getUserAgent():"";return/android (\d+)/.test(o.toLowerCase())}var ha=new v(""),pe=(()=>{class o extends xo{_compositionMode;_composing=!1;constructor(e,t,i){super(e,t),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!ua())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||o)(ae(ge),ae(O),ae(ha,8))};static \u0275dir=I({type:o,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,i){t&1&&R("input",function(r){return i._handleInput(r.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(r){return i._compositionEnd(r.target.value)})},standalone:!1,features:[Z([ma]),_e]})}return o})();function rn(o){return o==null||an(o)===0}function an(o){return o==null?null:Array.isArray(o)||typeof o=="string"?o.length:o instanceof Set?o.size:null}var Ht=new v(""),sn=new v(""),fa=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,St=class{static min(n){return So(n)}static max(n){return Do(n)}static required(n){return pa(n)}static requiredTrue(n){return ga(n)}static email(n){return _a(n)}static minLength(n){return ba(n)}static maxLength(n){return va(n)}static pattern(n){return ya(n)}static nullValidator(n){return fi()}static compose(n){return Fo(n)}static composeAsync(n){return Oo(n)}};function So(o){return n=>{if(n.value==null||o==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<o?{min:{min:o,actual:n.value}}:null}}function Do(o){return n=>{if(n.value==null||o==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>o?{max:{max:o,actual:n.value}}:null}}function pa(o){return rn(o.value)?{required:!0}:null}function ga(o){return o.value===!0?null:{required:!0}}function _a(o){return rn(o.value)||fa.test(o.value)?null:{email:!0}}function ba(o){return n=>{let e=n.value?.length??an(n.value);return e===null||e===0?null:e<o?{minlength:{requiredLength:o,actualLength:e}}:null}}function va(o){return n=>{let e=n.value?.length??an(n.value);return e!==null&&e>o?{maxlength:{requiredLength:o,actualLength:e}}:null}}function ya(o){if(!o)return fi;let n,e;return typeof o=="string"?(e="",o.charAt(0)!=="^"&&(e+="^"),e+=o,o.charAt(o.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=o.toString(),n=o),t=>{if(rn(t.value))return null;let i=t.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function fi(o){return null}function Mo(o){return o!=null}function Eo(o){return Yn(o)?On(o):o}function ko(o){let n={};return o.forEach(e=>{n=e!=null?C(C({},n),e):n}),Object.keys(n).length===0?null:n}function Io(o,n){return n.map(e=>e(o))}function Ca(o){return!o.validate}function To(o){return o.map(n=>Ca(n)?n:e=>n.validate(e))}function Fo(o){if(!o)return null;let n=o.filter(Mo);return n.length==0?null:function(e){return ko(Io(e,n))}}function ln(o){return o!=null?Fo(To(o)):null}function Oo(o){if(!o)return null;let n=o.filter(Mo);return n.length==0?null:function(e){let t=Io(e,n).map(Eo);return Jt(t).pipe(De(ko))}}function dn(o){return o!=null?Oo(To(o)):null}function po(o,n){return o===null?[n]:Array.isArray(o)?[...o,n]:[o,n]}function Ro(o){return o._rawValidators}function Po(o){return o._rawAsyncValidators}function tn(o){return o?Array.isArray(o)?o:[o]:[]}function pi(o,n){return Array.isArray(o)?o.includes(n):o===n}function go(o,n){let e=tn(n);return tn(o).forEach(i=>{pi(e,i)||e.push(i)}),e}function _o(o,n){return tn(n).filter(e=>!pi(o,e))}var gi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ln(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=dn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},lt=class extends gi{name;get formDirective(){return null}get path(){return null}},Qe=class extends gi{_parent=null;name=null;valueAccessor=null},nn=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var te=(()=>{class o extends nn{constructor(e){super(e)}static \u0275fac=function(t){return new(t||o)(ae(Qe,2))};static \u0275dir=I({type:o,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,i){t&2&&L("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[_e]})}return o})();var Vt="VALID",hi="INVALID",xt="PENDING",Nt="DISABLED",tt=class{},_i=class extends tt{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Wt=class extends tt{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},zt=class extends tt{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},wt=class extends tt{status;source;constructor(n,e){super(),this.status=n,this.source=e}},bi=class extends tt{source;constructor(n){super(),this.source=n}},vi=class extends tt{source;constructor(n){super(),this.source=n}};function Ao(o){return(Di(o)?o.validators:o)||null}function xa(o){return Array.isArray(o)?ln(o):o||null}function Lo(o,n){return(Di(n)?n.asyncValidators:o)||null}function wa(o){return Array.isArray(o)?dn(o):o||null}function Di(o){return o!=null&&!Array.isArray(o)&&typeof o=="object"}function Sa(o,n,e){let t=o.controls;if(!(n?Object.keys(t):t).length)throw new ii(1e3,"");if(!t[e])throw new ii(1001,"")}function Da(o,n,e){o._forEachChild((t,i)=>{if(e[i]===void 0)throw new ii(-1002,"")})}var yi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ze(this.statusReactive)}set status(n){ze(()=>this.statusReactive.set(n))}_status=k(()=>this.statusReactive());statusReactive=f(void 0);get valid(){return this.status===Vt}get invalid(){return this.status===hi}get pending(){return this.status===xt}get disabled(){return this.status===Nt}get enabled(){return this.status!==Nt}errors;get pristine(){return ze(this.pristineReactive)}set pristine(n){ze(()=>this.pristineReactive.set(n))}_pristine=k(()=>this.pristineReactive());pristineReactive=f(!0);get dirty(){return!this.pristine}get touched(){return ze(this.touchedReactive)}set touched(n){ze(()=>this.touchedReactive.set(n))}_touched=k(()=>this.touchedReactive());touchedReactive=f(!1);get untouched(){return!this.touched}_events=new D;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(go(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(go(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(_o(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(_o(n,this._rawAsyncValidators))}hasValidator(n){return pi(this._rawValidators,n)}hasAsyncValidator(n){return pi(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(N(C({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new zt(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new zt(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(N(C({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Wt(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new Wt(!0,t))}markAsPending(n={}){this.status=xt;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new wt(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(N(C({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Nt,this.errors=null,this._forEachChild(i=>{i.disable(N(C({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new _i(this.value,t)),this._events.next(new wt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(N(C({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Vt,this._forEachChild(t=>{t.enable(N(C({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(N(C({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Vt||this.status===xt)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new _i(this.value,e)),this._events.next(new wt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(N(C({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Nt:Vt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=xt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=Eo(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,i)=>t&&t._find(i),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new wt(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?Nt:this.errors?hi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(xt)?xt:this._anyControlsHaveStatus(hi)?hi:Vt}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),i=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),i&&this._events.next(new Wt(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new zt(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Di(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=xa(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=wa(this._rawAsyncValidators)}},Ci=class extends yi{constructor(n,e,t){super(Ao(e),Lo(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Da(this,!0,n),Object.keys(n).forEach(t=>{Sa(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let i=this.controls[t];i&&i.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,i)=>{t.reset(n?n[i]:null,N(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new vi(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,i)=>((t.enabled||this.disabled)&&(e[i]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((i,a)=>{t=e(t,i,a)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var Mi=new v("",{factory:()=>cn}),cn="always";function Ma(o,n){return[...n.path,o]}function xi(o,n,e=cn){mn(o,n),n.valueAccessor.writeValue(o.value),(o.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(o.disabled),ka(o,n),Ta(o,n),Ia(o,n),Ea(o,n)}function bo(o,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),Si(o,n),o&&(n._invokeOnDestroyCallbacks(),o._registerOnCollectionChange(()=>{}))}function wi(o,n){o.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Ea(o,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};o.registerOnDisabledChange(e),n._registerOnDestroy(()=>{o._unregisterOnDisabledChange(e)})}}function mn(o,n){let e=Ro(o);n.validator!==null?o.setValidators(po(e,n.validator)):typeof e=="function"&&o.setValidators([e]);let t=Po(o);n.asyncValidator!==null?o.setAsyncValidators(po(t,n.asyncValidator)):typeof t=="function"&&o.setAsyncValidators([t]);let i=()=>o.updateValueAndValidity();wi(n._rawValidators,i),wi(n._rawAsyncValidators,i)}function Si(o,n){let e=!1;if(o!==null){if(n.validator!==null){let i=Ro(o);if(Array.isArray(i)&&i.length>0){let a=i.filter(r=>r!==n.validator);a.length!==i.length&&(e=!0,o.setValidators(a))}}if(n.asyncValidator!==null){let i=Po(o);if(Array.isArray(i)&&i.length>0){let a=i.filter(r=>r!==n.asyncValidator);a.length!==i.length&&(e=!0,o.setAsyncValidators(a))}}}let t=()=>{};return wi(n._rawValidators,t),wi(n._rawAsyncValidators,t),e}function ka(o,n){n.valueAccessor.registerOnChange(e=>{o._pendingValue=e,o._pendingChange=!0,o._pendingDirty=!0,o.updateOn==="change"&&Vo(o,n)})}function Ia(o,n){n.valueAccessor.registerOnTouched(()=>{o._pendingTouched=!0,o.updateOn==="blur"&&o._pendingChange&&Vo(o,n),o.updateOn!=="submit"&&o.markAsTouched()})}function Vo(o,n){o._pendingDirty&&o.markAsDirty(),o.setValue(o._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(o._pendingValue),o._pendingChange=!1}function Ta(o,n){let e=(t,i)=>{n.valueAccessor.writeValue(t),i&&n.viewToModelUpdate(t)};o.registerOnChange(e),n._registerOnDestroy(()=>{o._unregisterOnChange(e)})}function No(o,n){o==null,mn(o,n)}function Fa(o,n){return Si(o,n)}function Oa(o,n){if(!o.hasOwnProperty("model"))return!1;let e=o.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Ra(o){return Object.getPrototypeOf(o.constructor)===wo}function Bo(o,n){o._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Pa(o,n){if(!n)return null;Array.isArray(n);let e,t,i;return n.forEach(a=>{a.constructor===pe?e=a:Ra(a)?t=a:i=a}),i||t||e||null}function Aa(o,n){let e=o.indexOf(n);e>-1&&o.splice(e,1)}var La={provide:lt,useExisting:Ge(()=>jt)},Bt=Promise.resolve(),jt=(()=>{class o extends lt{callSetDisabledState;get submitted(){return ze(this.submittedReactive)}_submitted=k(()=>this.submittedReactive());submittedReactive=f(!1);_directives=new Set;form;ngSubmit=new W;options;constructor(e,t,i){super(),this.callSetDisabledState=i,this.form=new Ci({},ln(e),dn(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Bt.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),xi(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Bt.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Bt.then(()=>{let t=this._findContainer(e.path),i=new Ci({});No(i,e),t.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Bt.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Bt.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Bo(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new bi(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||o)(ae(Ht,10),ae(sn,10),ae(Mi,8))};static \u0275dir=I({type:o,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,i){t&1&&R("submit",function(r){return i.onSubmit(r)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Z([La]),_e]})}return o})();function vo(o,n){let e=o.indexOf(n);e>-1&&o.splice(e,1)}function yo(o){return typeof o=="object"&&o!==null&&Object.keys(o).length===2&&"value"in o&&"disabled"in o}var Wo=class extends yi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(Ao(e),Lo(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Di(e)&&(e.nonNullable||e.initialValueIsDefault)&&(yo(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new vi(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){vo(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){vo(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){yo(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Va=o=>o instanceof Wo;var Na={provide:Qe,useExisting:Ge(()=>Q)},Co=Promise.resolve(),Q=(()=>{class o extends Qe{_changeDetectorRef;callSetDisabledState;control=new Wo;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new W;constructor(e,t,i,a,r,m){super(),this._changeDetectorRef=r,this.callSetDisabledState=m,this._parent=e,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=Pa(this,a)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Oa(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){xi(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Co.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,i=t!==0&&M(t);Co.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Ma(e,this._parent):[e]}static \u0275fac=function(t){return new(t||o)(ae(lt,9),ae(Ht,10),ae(sn,10),ae(on,10),ae(Ee,8),ae(Mi,8))};static \u0275dir=I({type:o,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Z([Na]),_e,Te]})}return o})();var Ba={provide:on,useExisting:Ge(()=>Pe),multi:!0},Pe=(()=>{class o extends wo{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ne(o)))(i||o)}})();static \u0275dir=I({type:o,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,i){t&1&&R("input",function(r){return i.onChange(r.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[Z([Ba]),_e]})}return o})();var Wa=(()=>{class o extends lt{callSetDisabledState;get submitted(){return ze(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=k(()=>this._submittedReactive());_submittedReactive=f(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Si(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return xi(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){bo(e.control||null,e,!1),Aa(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Bo(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new bi(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,i=this.form.get(e.path);t!==i&&(bo(t||null,e),Va(i)&&(xi(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);No(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Fa(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){mn(this.form,this),this._oldForm&&Si(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||o)(ae(Ht,10),ae(sn,10),ae(Mi,8))};static \u0275dir=I({type:o,features:[_e,Te]})}return o})();var za={provide:lt,useExisting:Ge(()=>Ut)},Ut=(()=>{class o extends Wa{form=null;ngSubmit=new W;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ne(o)))(i||o)}})();static \u0275dir=I({type:o,selectors:[["","formGroup",""]],hostBindings:function(t,i){t&1&&R("submit",function(r){return i.onSubmit(r)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Z([za]),_e]})}return o})();function zo(o){return typeof o=="number"?o:parseFloat(o)}var Ho=(()=>{class o{_validator=fi;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):fi,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,features:[Te]})}return o})(),Ha={provide:Ht,useExisting:Ge(()=>Ke),multi:!0},Ke=(()=>{class o extends Ho{max;inputName="max";normalizeInput=e=>zo(e);createValidator=e=>Do(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ne(o)))(i||o)}})();static \u0275dir=I({type:o,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(t,i){t&2&&J("max",i._enabled?i.max:null)},inputs:{max:"max"},standalone:!1,features:[Z([Ha]),_e]})}return o})(),ja={provide:Ht,useExisting:Ge(()=>$e),multi:!0},$e=(()=>{class o extends Ho{min;inputName="min";normalizeInput=e=>zo(e);createValidator=e=>So(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ne(o)))(i||o)}})();static \u0275dir=I({type:o,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,i){t&2&&J("min",i._enabled?i.min:null)},inputs:{min:"min"},standalone:!1,features:[Z([ja]),_e]})}return o})();var Ua=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=Be({type:o});static \u0275inj=Ve({})}return o})();var ie=(()=>{class o{static withConfig(e){return{ngModule:o,providers:[{provide:Mi,useValue:e.callSetDisabledState??cn}]}}static \u0275fac=function(t){return new(t||o)};static \u0275mod=Be({type:o});static \u0275inj=Ve({imports:[Ua]})}return o})();var un=class{_box;_destroyed=new D;_resizeSubject=new D;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new ht(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ie(e=>e.some(t=>t.target===n)),qi({bufferSize:1,refCount:!0}),X(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Ei=(()=>{class o{_cleanupErrorListener;_observers=new Map;_ngZone=h(U);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new un(i)),this._observers.get(i).observe(e)}static \u0275fac=function(t){return new(t||o)};static \u0275prov=me({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ga=["notch"],Ya=["matFormFieldNotchedOutline",""],qa=["*"],jo=["iconPrefixContainer"],Uo=["textPrefixContainer"],Go=["iconSuffixContainer"],Yo=["textSuffixContainer"],Xa=["textField"],Za=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Qa=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Ka(o,n){o&1&&ce(0,"span",21)}function $a(o,n){if(o&1&&(s(0,"label",20),z(1,1),G(2,Ka,1,0,"span",21),l()),o&2){let e=se(2);u("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),J("for",e._control.disableAutomaticLabeling?null:e._control.id),d(2),Y(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ja(o,n){if(o&1&&G(0,$a,3,5,"label",20),o&2){let e=se();Y(e._hasFloatingLabel()?0:-1)}}function es(o,n){o&1&&ce(0,"div",7)}function ts(o,n){}function is(o,n){if(o&1&&rt(0,ts,0,0,"ng-template",13),o&2){se(2);let e=q(1);u("ngTemplateOutlet",e)}}function ns(o,n){if(o&1&&(s(0,"div",9),G(1,is,1,1,null,13),l()),o&2){let e=se();u("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),d(),Y(e._forceDisplayInfixLabel()?-1:1)}}function os(o,n){o&1&&(s(0,"div",10,2),z(2,2),l())}function rs(o,n){o&1&&(s(0,"div",11,3),z(2,3),l())}function as(o,n){}function ss(o,n){if(o&1&&rt(0,as,0,0,"ng-template",13),o&2){se();let e=q(1);u("ngTemplateOutlet",e)}}function ls(o,n){o&1&&(s(0,"div",14,4),z(2,4),l())}function ds(o,n){o&1&&(s(0,"div",15,5),z(2,5),l())}function cs(o,n){o&1&&ce(0,"div",16)}function ms(o,n){o&1&&(s(0,"div",18),z(1,6),l())}function us(o,n){if(o&1&&(s(0,"mat-hint",22),c(1),l()),o&2){let e=se(2);u("id",e._hintLabelId),d(),S(e.hintLabel)}}function hs(o,n){if(o&1&&(s(0,"div",19),G(1,us,2,2,"mat-hint",22),z(2,7),ce(3,"div",23),z(4,8),l()),o&2){let e=se();d(),Y(e.hintLabel?1:-1)}}var H=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,selectors:[["mat-label"]]})}return o})(),fn=new v("MatError"),Je=(()=>{class o{id=h(ve).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,i){t&2&&st("id",i.id)},inputs:{id:"id"},features:[Z([{provide:fn,useExisting:o}])]})}return o})(),hn=(()=>{class o{align="start";id=h(ve).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,i){t&2&&(st("id",i.id),J("align",null),L("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return o})(),Jo=new v("MatPrefix");var pn=new v("MatSuffix"),Gt=(()=>{class o{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Z([{provide:pn,useExisting:o}])]})}return o})(),er=new v("FloatingLabelParent"),qo=(()=>{class o{_elementRef=h(O);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=h(Ei);_ngZone=h(U);_parent=h(er);_resizeSubscription=new Se;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return fs(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,i){t&2&&L("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return o})();function fs(o){let n=o;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Xo="mdc-line-ripple--active",ki="mdc-line-ripple--deactivating",Zo=(()=>{class o{_elementRef=h(O);_cleanupTransitionEnd;constructor(){let e=h(U),t=h(ge);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ki),e.add(Xo)}deactivate(){this._elementRef.nativeElement.classList.add(ki)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(ki);e.propertyName==="opacity"&&i&&t.remove(Xo,ki)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return o})(),Qo=(()=>{class o{_elementRef=h(O);_ngZone=h(U);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,i){if(t&1&&We(Ga,5),t&2){let a;T(a=F())&&(i._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,i){t&2&&L("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ya,ngContentSelectors:qa,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,i){t&1&&(Ce(),di(0,"div",1),si(1,"div",2,0),z(3),li(),di(4,"div",3))},encapsulation:2,changeDetection:0})}return o})(),Dt=(()=>{class o{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o})}return o})();var Mt=new v("MatFormField"),Ii=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ko="fill",ps="auto",$o="fixed",gs="translateY(-50%)",K=(()=>{class o{_elementRef=h(O);_changeDetectorRef=h(Ee);_platform=h(be);_idGenerator=h(ve);_ngZone=h(U);_defaults=h(Ii,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Pt("iconPrefixContainer");_textPrefixContainerSignal=Pt("textPrefixContainer");_iconSuffixContainerSignal=Pt("iconSuffixContainer");_textSuffixContainerSignal=Pt("textSuffixContainer");_prefixSuffixContainers=k(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Qn(H);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ct(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ps}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Ko;this._appearanceSignal.set(t)}_appearanceSignal=f(Ko);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||$o}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||$o}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new D;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Xe();constructor(){let e=this._defaults,t=h(Ze);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Tt(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=k(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Le([void 0,void 0]),De(()=>[t.errorState,t.userAriaDescribedBy]),Yi(),Ie(([[a,r],[m,p]])=>a!==m||r!==p)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(X(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ue(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Kn({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=k(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(m=>m.align==="start"):null,r=this._hintChildren?this._hintChildren.find(m=>m.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,i;if(t){let a=this._describedByIds||e;i=e.concat(t.filter(r=>r&&!a.includes(r)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,m=t?.getBoundingClientRect().width??0,p=i?.getBoundingClientRect().width??0,y=a?.getBoundingClientRect().width??0,x=this._currentDirection==="rtl"?"-1":"1",V=`${r+m}px`,Oe=`calc(${x} * (${V} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,ke=`var(--mat-mdc-form-field-label-transform, ${gs} translateX(${Oe}))`,ut=r+m+p+y;return[ke,ut]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["mat-form-field"]],contentQueries:function(t,i,a){if(t&1&&(qn(a,i._labelChild,H,5),gt(a,Dt,5)(a,Jo,5)(a,pn,5)(a,fn,5)(a,hn,5)),t&2){Xi();let r;T(r=F())&&(i._formFieldControl=r.first),T(r=F())&&(i._prefixChildren=r),T(r=F())&&(i._suffixChildren=r),T(r=F())&&(i._errorChildren=r),T(r=F())&&(i._hintChildren=r)}},viewQuery:function(t,i){if(t&1&&(Xn(i._iconPrefixContainerSignal,jo,5)(i._textPrefixContainerSignal,Uo,5)(i._iconSuffixContainerSignal,Go,5)(i._textSuffixContainerSignal,Yo,5),We(Xa,5)(jo,5)(Uo,5)(Go,5)(Yo,5)(qo,5)(Qo,5)(Zo,5)),t&2){Xi(4);let a;T(a=F())&&(i._textField=a.first),T(a=F())&&(i._iconPrefixContainer=a.first),T(a=F())&&(i._textPrefixContainer=a.first),T(a=F())&&(i._iconSuffixContainer=a.first),T(a=F())&&(i._textSuffixContainer=a.first),T(a=F())&&(i._floatingLabel=a.first),T(a=F())&&(i._notchedOutline=a.first),T(a=F())&&(i._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,i){t&2&&L("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Z([{provide:Mt,useExisting:o},{provide:er,useExisting:o}])],ngContentSelectors:Qa,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,i){if(t&1&&(Ce(Za),rt(0,Ja,1,1,"ng-template",null,0,Zn),s(2,"div",6,1),R("click",function(r){return i._control.onContainerClick(r)}),G(4,es,1,0,"div",7),s(5,"div",8),G(6,ns,2,2,"div",9),G(7,os,3,0,"div",10),G(8,rs,3,0,"div",11),s(9,"div",12),G(10,ss,1,1,null,13),z(11),l(),G(12,ls,3,0,"div",14),G(13,ds,3,0,"div",15),l(),G(14,cs,1,0,"div",16),l(),s(15,"div",17),G(16,ms,2,0,"div",18)(17,hs,5,1,"div",19),l()),t&2){let a;d(2),L("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),d(2),Y(!i._hasOutline()&&!i._control.disabled?4:-1),d(2),Y(i._hasOutline()?6:-1),d(),Y(i._hasIconPrefix?7:-1),d(),Y(i._hasTextPrefix?8:-1),d(2),Y(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),d(2),Y(i._hasTextSuffix?12:-1),d(),Y(i._hasIconSuffix?13:-1),d(),Y(i._hasOutline()?-1:14),d(),L("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let r=i._getSubscriptMessageType();d(),Y((a=r)==="error"?16:a==="hint"?17:-1)}},dependencies:[qo,Qo,eo,Zo,hn],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return o})();var Yt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new D;constructor(n=!1,e,t=!0,i){this._multiple=n,this._emitChanges=t,this.compareWith=i,e&&e.length&&(n?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(a=>this._getConcreteValue(a)));n.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var bs=20,tr=(()=>{class o{_ngZone=h(U);_platform=h(be);_renderer=h(Ye).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new D;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=bs){return this._platform.isBrowser?new ht(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(Gi(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ae()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ie(a=>!a||i.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,a)=>{this._scrollableContainsElement(a,e)&&t.push(a)}),t}_scrollableContainsElement(e,t){let i=At(t),a=e.getElementRef().nativeElement;do if(i==a)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(t){return new(t||o)};static \u0275prov=me({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var vs=20,dt=(()=>{class o{_platform=h(be);_listeners;_viewportSize=null;_change=new D;_document=h(Me);constructor(){let e=h(U),t=h(Ye).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=a=>this._change.next(a);this._listeners=[t.listen("window","resize",i),t.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,a=i.getBoundingClientRect(),r=-a.top||e.body?.scrollTop||t.scrollY||i.scrollTop||0,m=-a.left||e.body?.scrollLeft||t.scrollX||i.scrollLeft||0;return{top:r,left:m}}change(e=vs){return e>0?this._change.pipe(Gi(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||o)};static \u0275prov=me({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var qt=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},gn=class extends qt{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,i,a){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=i,this.bindings=a||null}},Xt=class extends qt{templateRef;viewContainerRef;context;injector;constructor(n,e,t,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},_n=class extends qt{element;constructor(n){super(),this.element=n instanceof O?n.nativeElement:n}},bn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof gn)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Xt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof _n)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ti=class extends bn{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,i=t.get(Gn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,i=n.injector||this._defaultInjector||Re.NULL,a=i.get(ni,t.injector);e=$n(n.component,{elementInjector:i,environmentInjector:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(i=>this.outletElement.appendChild(i)),t.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(t);i!==-1&&e.remove(i)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Fi=class{enable(){}disable(){}attach(){}};function vn(o,n){return n.some(e=>{let t=o.bottom<e.top,i=o.top>e.bottom,a=o.right<e.left,r=o.left>e.right;return t||i||a||r})}function ir(o,n){return n.some(e=>{let t=o.top<e.top,i=o.bottom>e.bottom,a=o.left<e.left,r=o.right>e.right;return t||i||a||r})}function Li(o,n){return new Oi(o.get(tr),o.get(dt),o.get(U),n)}var Oi=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:i}=this._viewportRuler.getViewportSize();vn(e,[{width:t,height:i,bottom:i,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Zt=class{positionStrategy;scrollStrategy=new Fi;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var Ri=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var lr=(()=>{class o{_attachedOverlays=[];_document=h(Me);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||o)};static \u0275prov=me({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),dr=(()=>{class o extends lr{_ngZone=h(U);_renderer=h(Ye).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let i=t.length-1;i>-1;i--){let a=t[i];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ne(o)))(i||o)}})();static \u0275prov=me({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),cr=(()=>{class o extends lr{_platform=h(be);_ngZone=h(U);_renderer=h(Ye).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,i={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(t,"pointerdown",this._pointerDownListener,i),a.listen(t,"click",this._clickListener,i),a.listen(t,"auxclick",this._clickListener,i),a.listen(t,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=vt(e)};_clickListener=e=>{let t=vt(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let m=a[r],p=m._outsidePointerEvents;if(!(!m.hasAttached()||!this.canReceiveEvent(m,e,p))){if(nr(m.overlayElement,t)||nr(m.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>p.next(e)):p.next(e)}}};static \u0275fac=(()=>{let e;return function(i){return(e||(e=Ne(o)))(i||o)}})();static \u0275prov=me({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function nr(o,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===o)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var mr=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return o})(),ur=(()=>{class o{_platform=h(be);_containerElement;_document=h(Me);_styleLoader=h(qe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ji()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<i.length;a++)i[a].remove()}let t=this._document.createElement("div");t.classList.add(e),Ji()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(mr)}static \u0275fac=function(t){return new(t||o)};static \u0275prov=me({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})(),yn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,i){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Cn(o){return o&&o.nodeType===1}var Pi=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new D;_attachments=new D;_detachments=new D;_positionStrategy;_scrollStrategy;_locationChanges=Se.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new D;_outsidePointerEvents=new D;_afterNextRenderRef;constructor(n,e,t,i,a,r,m,p,y,x=!1,V,ye){this._portalOutlet=n,this._host=e,this._pane=t,this._config=i,this._ngZone=a,this._keyboardDispatcher=r,this._document=m,this._location=p,this._outsideClickDispatcher=y,this._animationsDisabled=x,this._injector=V,this._renderer=ye,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ot(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=C(C({},this._config),n),this._updateElementSize()}setDirection(n){this._config=N(C({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=le(this._config.width),n.height=le(this._config.height),n.minWidth=le(this._config.minWidth),n.minHeight=le(this._config.minHeight),n.maxWidth=le(this._config.maxWidth),n.maxHeight=le(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Cn(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new yn(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let i=Ki(e||[]).filter(a=>!!a);i.length&&(t?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ot(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},or="cdk-overlay-connected-position-bounding-box",ys=/([A-Za-z%]+)$/;function hr(o,n){return new Ai(n,o.get(dt),o.get(Me),o.get(be),o.get(ur))}var Ai=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new D;_resizeSubscription=Se.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,i,a){this._viewportRuler=e,this._document=t,this._platform=i,this._overlayContainer=a,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(or),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,i=this._containerRect,a=[],r;for(let m of this._preferredPositions){let p=this._getOriginPoint(n,i,m),y=this._getOverlayPoint(p,e,m),x=this._getOverlayFit(y,e,t,m);if(x.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(m,p);return}if(this._canFitWithFlexibleDimensions(x,y,t)){a.push({position:m,origin:p,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(p,m)});continue}(!r||r.overlayFit.visibleArea<x.visibleArea)&&(r={overlayFit:x,overlayPoint:y,originPoint:p,position:m,overlayRect:e})}if(a.length){let m=null,p=-1;for(let y of a){let x=y.boundingBoxRect.width*y.boundingBoxRect.height*(y.position.weight||1);x>p&&(p=x,m=y)}this._isPushed=!1,this._applyPosition(m.position,m.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ct(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(or),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof O?this._origin.nativeElement:Cn(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let i;if(t.originX=="center")i=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,m=this._isRtl()?n.left:n.right;i=t.originX=="start"?r:m}e.left<0&&(i-=e.left);let a;return t.originY=="center"?a=n.top+n.height/2:a=t.originY=="top"?n.top:n.bottom,e.top<0&&(a-=e.top),{x:i,y:a}}_getOverlayPoint(n,e,t){let i;t.overlayX=="center"?i=-e.width/2:t.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let a;return t.overlayY=="center"?a=-e.height/2:a=t.overlayY=="top"?0:-e.height,{x:n.x+i,y:n.y+a}}_getOverlayFit(n,e,t,i){let a=ar(e),{x:r,y:m}=n,p=this._getOffset(i,"x"),y=this._getOffset(i,"y");p&&(r+=p),y&&(m+=y);let x=0-r,V=r+a.width-t.width,ye=0-m,Oe=m+a.height-t.height,ke=this._subtractOverflows(a.width,x,V),ut=this._subtractOverflows(a.height,ye,Oe),Tn=ke*ut;return{visibleArea:Tn,isCompletelyWithinViewport:a.width*a.height===Tn,fitsInViewportVertically:ut===a.height,fitsInViewportHorizontally:ke==a.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let i=t.bottom-e.y,a=t.right-e.x,r=rr(this._overlayRef.getConfig().minHeight),m=rr(this._overlayRef.getConfig().minWidth),p=n.fitsInViewportVertically||r!=null&&r<=i,y=n.fitsInViewportHorizontally||m!=null&&m<=a;return p&&y}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=ar(e),a=this._viewportRect,r=Math.max(n.x+i.width-a.width,0),m=Math.max(n.y+i.height-a.height,0),p=Math.max(a.top-t.top-n.y,0),y=Math.max(a.left-t.left-n.x,0),x=0,V=0;return i.width<=a.width?x=y||-r:x=n.x<this._getViewportMarginStart()?a.left-t.left-n.x:0,i.height<=a.height?V=p||-m:V=n.y<this._getViewportMarginTop()?a.top-t.top-n.y:0,this._previousPushAmount={x,y:V},{x:n.x+x,y:n.y+V}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Cs(this._lastScrollVisibility,t)){let i=new Ri(n,t);this._positionChanges.next(i)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,i=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${t} ${i}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,i=this._isRtl(),a,r,m;if(e.overlayY==="top")r=n.y,a=t.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")m=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=t.height-m+this._getViewportMarginTop();else{let Oe=Math.min(t.bottom-n.y+t.top,n.y),ke=this._lastBoundingBoxSize.height;a=Oe*2,r=n.y-Oe,a>ke&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-ke/2)}let p=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,y=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,x,V,ye;if(y)ye=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),x=n.x-this._getViewportMarginStart();else if(p)V=n.x,x=t.right-n.x-this._getViewportMarginEnd();else{let Oe=Math.min(t.right-n.x+t.left,n.x),ke=this._lastBoundingBoxSize.width;x=Oe*2,V=n.x-Oe,x>ke&&!this._isInitialRender&&!this._growAfterOpen&&(V=n.x-ke/2)}return{top:r,left:V,bottom:m,right:ye,width:x,height:a}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.width=le(t.width),i.height=le(t.height),i.top=le(t.top)||"auto",i.bottom=le(t.bottom)||"auto",i.left=le(t.left)||"auto",i.right=le(t.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",a&&(i.maxHeight=le(a)),r&&(i.maxWidth=le(r))}this._lastBoundingBoxSize=t,ct(this._boundingBox.style,i)}_resetBoundingBoxStyles(){ct(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ct(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},i=this._hasExactPosition(),a=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let x=this._viewportRuler.getViewportScrollPosition();ct(t,this._getExactOverlayY(e,n,x)),ct(t,this._getExactOverlayX(e,n,x))}else t.position="static";let m="",p=this._getOffset(e,"x"),y=this._getOffset(e,"y");p&&(m+=`translateX(${p}px) `),y&&(m+=`translateY(${y}px)`),t.transform=m.trim(),r.maxHeight&&(i?t.maxHeight=le(r.maxHeight):a&&(t.maxHeight="")),r.maxWidth&&(i?t.maxWidth=le(r.maxWidth):a&&(t.maxWidth="")),ct(this._pane.style,t)}_getExactOverlayY(n,e,t){let i={top:"",bottom:""},a=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t)),n.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;i.bottom=`${r-(a.y+this._overlayRect.height)}px`}else i.top=le(a.y);return i}_getExactOverlayX(n,e,t){let i={left:"",right:""},a=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t));let r;if(this._isRtl()?r=n.overlayX==="end"?"left":"right":r=n.overlayX==="end"?"right":"left",r==="right"){let m=this._document.documentElement.clientWidth;i.right=`${m-(a.x+this._overlayRect.width)}px`}else i.left=le(a.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ir(n,t),isOriginOutsideView:vn(n,t),isOverlayClipped:ir(e,t),isOverlayOutsideView:vn(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,i)=>t-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Ki(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof O)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function ct(o,n){for(let e in n)n.hasOwnProperty(e)&&(o[e]=n[e]);return o}function rr(o){if(typeof o!="number"&&o!=null){let[n,e]=o.split(ys);return!e||e==="px"?parseFloat(n):null}return o||null}function ar(o){return{top:Math.floor(o.top),right:Math.floor(o.right),bottom:Math.floor(o.bottom),left:Math.floor(o.left),width:Math.floor(o.width),height:Math.floor(o.height)}}function Cs(o,n){return o===n?!0:o.isOriginClipped===n.isOriginClipped&&o.isOriginOutsideView===n.isOriginOutsideView&&o.isOverlayClipped===n.isOverlayClipped&&o.isOverlayOutsideView===n.isOverlayOutsideView}var Qt=new v("OVERLAY_DEFAULT_CONFIG");function fr(o,n){o.get(qe).load(mr);let e=o.get(ur),t=o.get(Me),i=o.get(ve),a=o.get(ai),r=o.get(Ze),m=o.get(ge,null,{optional:!0})||o.get(Ye).createRenderer(null,null),p=new Zt(n),y=o.get(Qt,null,{optional:!0})?.usePopover??!0;p.direction=p.direction||r.value,"showPopover"in t.body?p.usePopover=n?.usePopover??y:p.usePopover=!1;let x=t.createElement("div"),V=t.createElement("div");x.id=i.getId("cdk-overlay-"),x.classList.add("cdk-overlay-pane"),V.appendChild(x),p.usePopover&&(V.setAttribute("popover","manual"),V.classList.add("cdk-overlay-popover"));let ye=p.usePopover?p.positionStrategy?.getPopoverInsertionPoint?.():null;return Cn(ye)?ye.after(V):ye?.type==="parent"?ye.element.appendChild(V):e.getContainerElement().appendChild(V),new Pi(new Ti(x,a,o),V,x,p,o.get(U),o.get(dr),t,o.get(Jn),o.get(cr),n?.disableAnimations??o.get(Un,null,{optional:!0})==="NoopAnimations",o.get(ni),m)}var xs=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],ws=new v("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let o=h(Re);return()=>Li(o)}}),Et=(()=>{class o{elementRef=h(O);constructor(){}static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return o})(),pr=new v("cdk-connected-overlay-default-config"),Vi=(()=>{class o{_dir=h(Ze,{optional:!0});_injector=h(Re);_overlayRef;_templatePortal;_backdropSubscription=Se.EMPTY;_attachSubscription=Se.EMPTY;_detachSubscription=Se.EMPTY;_positionSubscription=Se.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=h(ws);_ngZone=h(U);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new W;positionChange=new W;attach=new W;detach=new W;overlayKeydown=new W;overlayOutsideClick=new W;constructor(){let e=h(Ft),t=h(Ot),i=h(pr,{optional:!0}),a=h(Qt,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new Xt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=xs);let e=this._overlayRef=fr(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!He(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let i=this._getOriginElement(),a=vt(t);(!i||i!==a&&!i.contains(a))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Zt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=hr(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Et?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Et?this.origin.elementRef.nativeElement:this.origin instanceof O?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Hn(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",M],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",M],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",M],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",M],push:[2,"cdkConnectedOverlayPush","push",M],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",M],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",M],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Te]})}return o})();var gr=(()=>{class o{_animationsDisabled=Xe();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&L("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return o})();var Ds=["text"],Ms=[[["mat-icon"]],"*"],Es=["mat-icon","*"];function ks(o,n){if(o&1&&ce(0,"mat-pseudo-checkbox",1),o&2){let e=se();u("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Is(o,n){if(o&1&&ce(0,"mat-pseudo-checkbox",3),o&2){let e=se();u("disabled",e.disabled)}}function Ts(o,n){if(o&1&&(s(0,"span",4),c(1),l()),o&2){let e=se();d(),Fe("(",e.group.label,")")}}var Bi=new v("MAT_OPTION_PARENT_COMPONENT"),Wi=new v("MatOptgroup");var Ni=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},j=(()=>{class o{_element=h(O);_changeDetectorRef=h(Ee);_parent=h(Bi,{optional:!0});group=h(Wi,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=h(ve).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=f(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new W;_text;_stateChanges=new D;constructor(){let e=h(qe);e.load(mi),e.load(oo),this._signalDisableRipple=!!this._parent&&ri(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!He(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ni(this,e))}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&We(Ds,7),t&2){let a;T(a=F())&&(i._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&R("click",function(){return i._selectViaInteraction()})("keydown",function(r){return i._handleKeydown(r)}),t&2&&(st("id",i.id),J("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),L("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",M]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Es,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(Ce(Ms),G(0,ks,1,2,"mat-pseudo-checkbox",1),z(1),s(2,"span",2,0),z(4,1),l(),G(5,Is,1,1,"mat-pseudo-checkbox",3),G(6,Ts,2,1,"span",4),ce(7,"div",5)),t&2&&(Y(i.multiple?0:-1),d(5),Y(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),d(),Y(i.group&&i.group._inert?6:-1),d(),u("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[gr,Lt],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return o})();function xn(o,n,e){if(e.length){let t=n.toArray(),i=e.toArray(),a=0;for(let r=0;r<o+1;r++)t[r].group&&t[r].group===i[a]&&a++;return a}return 0}function wn(o,n,e,t){return o<e?o:o+n>e+t?Math.max(0,o-t+n):e}var zi=(()=>{class o{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||o)};static \u0275prov=me({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var kt=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,i,a){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=a}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,a=t?.isErrorState(i,e)??!1;a!==n&&(this.errorState=a,this._stateChanges.next())}};var As=["trigger"],Ls=["panel"],Vs=[[["mat-select-trigger"]],"*"],Ns=["mat-select-trigger","*"];function Bs(o,n){if(o&1&&(s(0,"span",4),c(1),l()),o&2){let e=se();d(),S(e.placeholder)}}function Ws(o,n){o&1&&z(0)}function zs(o,n){if(o&1&&(s(0,"span",11),c(1),l()),o&2){let e=se(2);d(),S(e.triggerValue)}}function Hs(o,n){if(o&1&&(s(0,"span",5),G(1,Ws,1,0)(2,zs,2,1,"span",11),l()),o&2){let e=se();d(),Y(e.customTrigger?1:2)}}function js(o,n){if(o&1){let e=at();s(0,"div",12,1),R("keydown",function(i){ue(e);let a=se();return he(a._handleKeydown(i))}),z(2,1),l()}if(o&2){let e=se();Rt(e.panelClass),L("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),J("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Us=new v("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let o=h(Re);return()=>Li(o)}}),Gs=new v("MAT_SELECT_CONFIG"),Ys=new v("MatSelectTrigger"),Sn=class{source;value;constructor(n,e){this.source=n,this.value=e}},ne=(()=>{class o{_viewportRuler=h(dt);_changeDetectorRef=h(Ee);_elementRef=h(O);_dir=h(Ze,{optional:!0});_idGenerator=h(ve);_renderer=h(ge);_parentFormField=h(Mt,{optional:!0});ngControl=h(Qe,{self:!0,optional:!0});_liveAnnouncer=h(ao);_defaultOptions=h(Gs,{optional:!0});_animationsDisabled=Xe();_popoverLocation;_initialized=new D;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=xn(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=wn(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Sn(this,e)}_scrollStrategyFactory=h(Us);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new D;_errorStateTracker;stateChanges=new D;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=f(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(St.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Pn(()=>{let e=this.options;return e?e.changes.pipe(Le(e),ft(()=>Ue(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(ft(()=>this.optionSelectionChanges))});openedChange=new W;_openedStream=this.openedChange.pipe(Ie(e=>e),De(()=>{}));_closedStream=this.openedChange.pipe(Ie(e=>!e),De(()=>{}));selectionChange=new W;valueChange=new W;constructor(){let e=h(zi),t=h(jt,{optional:!0}),i=h(Ut,{optional:!0}),a=h(new _t("tabindex"),{optional:!0}),r=h(Qt,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new kt(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Yt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(X(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(X(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Le(null),X(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ei(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&$i(this._trackedModal,"aria-owns",t),co(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;$i(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&a&&!He(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let m=this.selected;r.onKeydown(e);let p=this.selected;p&&m!==p&&this._liveAnnouncer.announce(p.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,r=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!He(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let m=this.options.some(p=>!p.disabled&&!p.selected);this.options.forEach(p=>{p.disabled||(m?p.select():p.deselect())})}else{let m=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==m&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!He(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Et?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new so(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ue(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(X(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ue(...this.options.map(t=>t._stateChanges)).pipe(X(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=vt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&gt(a,Ys,5)(a,j,5)(a,Wi,5),t&2){let r;T(r=F())&&(i.customTrigger=r.first),T(r=F())&&(i.options=r),T(r=F())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&We(As,5)(Ls,5)(Vi,5),t&2){let a;T(a=F())&&(i.trigger=a.first),T(a=F())&&(i.panel=a.first),T(a=F())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&R("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(J("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),L("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",M],disableRipple:[2,"disableRipple","disableRipple",M],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:bt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",M],placeholder:"placeholder",required:[2,"required","required",M],multiple:[2,"multiple","multiple",M],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",M],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",bt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",M]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Z([{provide:Dt,useExisting:o},{provide:Bi,useExisting:o}]),Te],ngContentSelectors:Ns,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(Ce(Vs),s(0,"div",2,0),R("click",function(){return i.open()}),s(3,"div",3),G(4,Bs,2,1,"span",4)(5,Hs,3,1,"span",5),l(),s(6,"div",6)(7,"div",7),jn(),s(8,"svg",8),ce(9,"path",9),l()()()(),rt(10,js,3,16,"ng-template",10),R("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(r){return i._handleOverlayKeydown(r)})),t&2){let a=q(1);d(3),J("id",i._valueId),d(),Y(i.empty?4:5),d(6),u("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Et,Vi],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return o})();var vr=new v("IntlCountryPipeDefaultOptions");var oe=new v("IntlLocales");var yr=(()=>{class o{constructor(){this.locale=h(oe,{optional:!0}),this.defaultOptions=h(vr,{optional:!0})}transform(e,t){if(!e)return null;let r=t??{},{locale:i}=r,a=de(r,["locale"]);try{return new Intl.DisplayNames(i??this.locale??void 0,N(C(C({},this.defaultOptions),a),{type:"region"})).of(e)??null}catch(m){return console.error("Error while transforming the country",m),null}}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=$({name:"intlCountry",type:o,pure:!0})}}return o})();var Cr=new v("IntlCurrencyPipeDefaultOptions");var nt=o=>{if(typeof o=="number")return o;if(isNaN(Number(o)-parseFloat(o)))throw new Error(`${o} is not a number!`);return Number(o)};var xr=(()=>{class o{constructor(){this.locale=h(oe,{optional:!0}),this.defaultOptions=h(Cr,{optional:!0})}transform(e,t,i){if(typeof e!="number"&&!e)return null;let a=nt(e),p=i??{},{locale:r}=p,m=de(p,["locale"]);try{return new Intl.NumberFormat(r??this.locale??void 0,N(C(C({},this.defaultOptions),m),{currency:t,style:"currency"})).format(a)}catch(y){return console.error("Error while transforming the currency",y),null}}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=$({name:"intlCurrency",type:o,pure:!0})}}return o})();var wr=new v("IntlDatePipeDefaultOptions");var Sr=(()=>{class o{constructor(){this.locale=h(oe,{optional:!0}),this.defaultOptions=h(wr,{optional:!0})}transform(e,t){if(typeof e!="number"&&!e)return null;let i=new Date(e);if(isNaN(i.getTime()))return null;let m=t??{},{locale:a}=m,r=de(m,["locale"]);try{return new Intl.DateTimeFormat(a??this.locale??void 0,C(C({},this.defaultOptions),r)).format(i)}catch(p){return console.error("Error while transforming the date",p),null}}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=$({name:"intlDate",type:o,pure:!0})}}return o})();var Dr=new v("IntlDecimalPipeDefaultOptions");var Mr=(()=>{class o{constructor(){this.locale=h(oe,{optional:!0}),this.defaultOptions=h(Dr,{optional:!0})}transform(e,t){if(typeof e!="number"&&!e)return null;let i=nt(e),m=t??{},{locale:a}=m,r=de(m,["locale"]);try{return new Intl.NumberFormat(a??this.locale??void 0,N(C(C({},this.defaultOptions),r),{style:"decimal"})).format(i)}catch(p){return console.error("Error while transforming the decimal number",p),null}}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=$({name:"intlDecimal",type:o,pure:!0})}}return o})();var Er=new v("IntlDurationPipeDefaultOptions");var kr=(()=>{class o{constructor(){this.locale=h(oe,{optional:!0}),this.defaultOptions=h(Er,{optional:!0})}transform(e,t){if(!e)return null;let r=t??{},{locale:i}=r,a=de(r,["locale"]);try{return new Intl.DurationFormat(i??this.locale??void 0,C(C({},this.defaultOptions),a)).format(e)}catch(m){return console.error("Error while transforming the duration value",m),null}}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=$({name:"intlDuration",type:o,pure:!0})}}return o})();var Ir=new v("IntlLanguagePipeDefaultOptions");var Tr=(()=>{class o{constructor(){this.locale=h(oe,{optional:!0}),this.defaultOptions=h(Ir,{optional:!0})}transform(e,t){if(!e)return null;let r=t??{},{locale:i}=r,a=de(r,["locale"]);try{return new Intl.DisplayNames(i??this.locale??void 0,N(C(C({},this.defaultOptions),a),{type:"language"})).of(e)??null}catch(m){return console.error("Error while transforming the language",m),null}}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=$({name:"intlLanguage",type:o,pure:!0})}}return o})();var Fr=new v("IntlListPipeDefaultOptions");var Or=(()=>{class o{constructor(){this.locale=h(oe,{optional:!0}),this.defaultOptions=h(Fr,{optional:!0})}transform(e,t){if(!e)return null;let r=t??{},{locale:i}=r,a=de(r,["locale"]);try{return new Intl.ListFormat(i??this.locale??void 0,C(C({},this.defaultOptions),a)).format(e)}catch(m){return console.error("Error while transforming the list",m),null}}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=$({name:"intlList",type:o,pure:!0})}}return o})();var Rr=new v("IntlPercentPipeDefaultOptions");var Pr=(()=>{class o{constructor(){this.locale=h(oe,{optional:!0}),this.defaultOptions=h(Rr,{optional:!0})}transform(e,t){if(typeof e!="number"&&!e)return null;let i=nt(e),m=t??{},{locale:a}=m,r=de(m,["locale"]);try{return new Intl.NumberFormat(a??this.locale??void 0,N(C(C({},this.defaultOptions),r),{style:"percent"})).format(i)}catch(p){return console.error("Error while transforming the percent value",p),null}}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=$({name:"intlPercent",type:o,pure:!0})}}return o})();var Ar=new v("IntlRelativeTimePipeDefaultOptions");var xe=(function(o){return o[o.oneSecond=1e3]="oneSecond",o[o.oneMinute=6e4]="oneMinute",o[o.oneHour=36e5]="oneHour",o[o.oneDay=864e5]="oneDay",o[o.oneWeek=6048e5]="oneWeek",o[o.oneMonth=2592e6]="oneMonth",o[o.oneYear=31536e6]="oneYear",o})(xe||{}),Lr=(()=>{class o{constructor(){this.cdr=h(Ee,{optional:!0}),this.locales=h(oe,{optional:!0}),this.defaultOptions=h(Ar,{optional:!0})}#e;transform(e,t){if(typeof e!="number"&&!e)return null;let i=new Date(e).getTime();if(isNaN(i))throw new Error(`${e.toString()} is not a valid date`);this.#t(),this.#e=new D,Ln(xe.oneMinute).pipe(X(this.#e)).subscribe(()=>this.cdr?.markForCheck());let a=new Intl.RelativeTimeFormat(t?.locale??this.locales??void 0,C(C({},this.defaultOptions),t)),r=new Date().getTime(),m=i<r?-1:1,p=Math.abs(i-r);return p>xe.oneYear?a.format(m*Math.floor(p/xe.oneYear),"year"):p>xe.oneMonth?a.format(m*Math.floor(p/xe.oneMonth),"month"):p>xe.oneWeek?a.format(m*Math.floor(p/xe.oneWeek),"week"):p>xe.oneDay?a.format(m*Math.floor(p/xe.oneDay),"day"):p>xe.oneHour?a.format(m*Math.floor(p/xe.oneHour),"hour"):p>xe.oneMinute?a.format(m*Math.floor(p/xe.oneMinute),"minute"):a.format(0,"minute")}ngOnDestroy(){this.#t()}#t(){this.#e?.next(),this.#e?.complete()}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=$({name:"intlRelativeTime",type:o,pure:!1})}}return o})();var Vr=new v("IntlUnitPipeDefaultOptions");var Nr=(()=>{class o{constructor(){this.locale=h(oe,{optional:!0}),this.defaultOptions=h(Vr,{optional:!0})}transform(e,t,i){if(typeof e!="number"&&!e)return null;let a=nt(e),p=i??{},{locale:r}=p,m=de(p,["locale"]);try{return new Intl.NumberFormat(r??this.locale??void 0,N(C(C({},this.defaultOptions),m),{unit:t,style:"unit"})).format(a)}catch(y){return console.error("Error while transforming the unit value",y),null}}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275pipe=$({name:"intlUnit",type:o,pure:!0})}}return o})();var re=["af","ak","am","ar","as","asa","ast","az","bas","be","bem","bez","bg","bm","bn","bo","br","brx","bs","ca","ccp","ce","ceb","cgg","chr","ckb","cs","cu","cy","da","dav","de","de-AT","de-CH","de-DE","dje","dsb","dua","dyo","dz","ebu","ee","el","en","en-CA","en-GB","en-US","eo","es","et","eu","ewo","fa","ff","fi","fil","fo","fr","fur","fy","ga","gd","gl","gsw","gu","guz","gv","ha","haw","he","hi","hr","hsb","hu","hy","ia","id","ig","ii","is","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","khq","ki","kk","kkj","kl","kln","km","kn","ko","kok","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln","lo","lrc","lt","lu","luo","luy","lv","mai","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni","mr","ms","mt","mua","my","mzn","naq","nb","nd","nds","ne","nl","nmg","nn","nnh","nus","nyn","om","or","os","pa","pcm","pl","prg","ps","pt","pt-BR","pt-PT","qu","rm","rn","ro","rof","root","ru","rw","rwk","sah","saq","sat","sbp","sd","se","ses","sg","shi","si","sk","sl","smn","sn","so","sq","sr","su","sv","sw","ta","te","teo","tg","th","ti","tk","to","tr","tt","twq","tzm","ug","uk","ur","uz","vai","vi","vo","vun","wae","wo","xh","xog","yav","yi","yo","yue","zgh","zh","zu"];var Br=["AT","CA","CH","DE","GB","KR","SE","UA","US"];function qs(o,n){if(o&1&&(s(0,"mat-option",2),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}function Xs(o,n){if(o&1&&(s(0,"mat-option",2),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}var Wr=(()=>{class o{constructor(){this.languages=re,this.countries=Br,this.selectedCountry=f("DE"),this.locale=f(void 0),this.options=k(()=>({locale:this.locale()}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-country"]],decls:18,vars:7,consts:[[1,"fields-container"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Country to transform"),l(),s(4,"mat-select",1),b("ngModelChange",function(r){return _(i.selectedCountry,r)||(i.selectedCountry=r),r}),P(5,qs,2,2,"mat-option",2,B),l()(),s(7,"mat-form-field")(8,"mat-label"),c(9,"Locale"),l(),s(10,"mat-select",1),b("ngModelChange",function(r){return _(i.locale,r)||(i.locale=r),r}),s(11,"mat-option",2),c(12,"Browser default"),l(),P(13,Xs,2,2,"mat-option",2,B),l()()(),s(15,"p"),c(16),ee(17,"intlCountry"),l()),t&2&&(d(4),g("ngModel",i.selectedCountry),d(),A(i.countries),d(5),g("ngModel",i.locale),d(),u("value",void 0),d(2),A(i.languages),d(3),S(fe(17,4,i.selectedCountry(),i.options())))},dependencies:[ie,te,Q,K,ne,j,H,yr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return o})();var Zs=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return o})(),Qs={passive:!0},zr=(()=>{class o{_platform=h(be);_ngZone=h(U);_renderer=h(Ye).createRenderer(null,null);_styleLoader=h(qe);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return $t;this._styleLoader.load(Zs);let t=At(e),i=this._monitoredElements.get(t);if(i)return i.subject;let a=new D,r="cdk-text-field-autofilled",m=y=>{y.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>a.next({target:y.target,isAutofilled:!0}))):y.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:y.target,isAutofilled:!1})))},p=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",m,Qs)));return this._monitoredElements.set(t,{subject:a,unlisten:p}),a}stopMonitoring(e){let t=At(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||o)};static \u0275prov=me({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Hr=new v("MAT_INPUT_VALUE_ACCESSOR");var Ks=["button","checkbox","file","hidden","image","radio","range","reset","submit"],$s=new v("MAT_INPUT_CONFIG"),we=(()=>{class o{_elementRef=h(O);_platform=h(be);ngControl=h(Qe,{optional:!0,self:!0});_autofillMonitor=h(zr);_ngZone=h(U);_formField=h(Mt,{optional:!0});_renderer=h(ge);_uid=h(ve).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=h($s,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new D;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Ct(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(St.required)??!1}set required(e){this._required=Ct(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&en().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Ct(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>en().has(e));constructor(){let e=h(jt,{optional:!0}),t=h(Ut,{optional:!0}),i=h(zi),a=h(Hr,{optional:!0,self:!0}),r=this._elementRef.nativeElement,m=r.nodeName.toLowerCase();a?ri(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=r,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(r,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new kt(i,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=m==="select",this._isTextarea=m==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=r.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Tt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ks.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&R("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(st("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),J("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),L("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",M]},exportAs:["matInput"],features:[Z([{provide:Dt,useExisting:o}]),Te]})}return o})();var jr=["USD","EUR","GBP","CAD","JPY","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USN","UYI","UYU","UYW","UZS","VED","VES","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMW","ZWL"];function Js(o,n){if(o&1&&(s(0,"mat-option",3),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}function el(o,n){if(o&1&&(s(0,"mat-option",3),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}var Ur=(()=>{class o{constructor(){this.enteredNumber=f("0.24"),this.currency=f("USD"),this.languages=re,this.currencies=jr,this.locale=f(void 0),this.notation=f(void 0),this.signDisplay=f(void 0),this.currencyDisplay=f(void 0),this.currencySign=f(void 0),this.minimumIntegerDigits=f(void 0),this.minimumFractionDigits=f(void 0),this.maximumFractionDigits=f(void 0),this.minimumSignificantDigits=f(void 0),this.maximumSignificantDigits=f(void 0),this.options=k(()=>({locale:this.locale(),currencyDisplay:this.currencyDisplay(),currencySign:this.currencySign(),notation:this.notation(),signDisplay:this.signDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-currency"]],decls:106,vars:37,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),l(),s(4,"input",1),b("ngModelChange",function(r){return _(i.enteredNumber,r)||(i.enteredNumber=r),r}),l()(),s(5,"mat-form-field")(6,"mat-label"),c(7,"Currency"),l(),s(8,"mat-select",2),b("ngModelChange",function(r){return _(i.currency,r)||(i.currency=r),r}),P(9,Js,2,2,"mat-option",3,B),l()(),s(11,"mat-form-field")(12,"mat-label"),c(13,"Locale"),l(),s(14,"mat-select",2),b("ngModelChange",function(r){return _(i.locale,r)||(i.locale=r),r}),s(15,"mat-option",3),c(16,"Browser default"),l(),P(17,el,2,2,"mat-option",3,B),l()(),s(19,"mat-form-field")(20,"mat-label"),c(21,"Currency display"),l(),s(22,"mat-select",2),b("ngModelChange",function(r){return _(i.currencyDisplay,r)||(i.currencyDisplay=r),r}),s(23,"mat-option",3),c(24,"Browser default"),l(),s(25,"mat-option",3),c(26,"symbol"),l(),s(27,"mat-option",3),c(28,"narrowSymbol"),l(),s(29,"mat-option",3),c(30,"code"),l(),s(31,"mat-option",3),c(32,"name"),l()()(),s(33,"mat-form-field")(34,"mat-label"),c(35,"Currency sign"),l(),s(36,"mat-select",2),b("ngModelChange",function(r){return _(i.currencySign,r)||(i.currencySign=r),r}),s(37,"mat-option",3),c(38,"Browser default"),l(),s(39,"mat-option",3),c(40,"accounting"),l(),s(41,"mat-option",3),c(42,"standard"),l()()(),s(43,"mat-form-field")(44,"mat-label"),c(45,"Notation"),l(),s(46,"mat-select",2),b("ngModelChange",function(r){return _(i.notation,r)||(i.notation=r),r}),s(47,"mat-option",3),c(48,"Browser default"),l(),s(49,"mat-option",3),c(50,"standard"),l(),s(51,"mat-option",3),c(52,"scientific"),l(),s(53,"mat-option",3),c(54,"engineering"),l(),s(55,"mat-option",3),c(56,"compact"),l()()(),s(57,"mat-form-field")(58,"mat-label"),c(59,"Sign display"),l(),s(60,"mat-select",2),b("ngModelChange",function(r){return _(i.signDisplay,r)||(i.signDisplay=r),r}),s(61,"mat-option",3),c(62,"Browser default"),l(),s(63,"mat-option",3),c(64,"auto"),l(),s(65,"mat-option",3),c(66,"always"),l(),s(67,"mat-option",3),c(68,"exceptZero"),l(),s(69,"mat-option",3),c(70,"negative"),l(),s(71,"mat-option",3),c(72,"never"),l()()(),s(73,"mat-form-field")(74,"mat-label"),c(75,"Minimum integer digits"),l(),s(76,"input",4),b("ngModelChange",function(r){return _(i.minimumIntegerDigits,r)||(i.minimumIntegerDigits=r),r}),l(),s(77,"mat-error"),c(78,"Please enter a number from 1 to 21"),l()(),s(79,"mat-form-field")(80,"mat-label"),c(81,"Minimum fraction digits"),l(),s(82,"input",5),b("ngModelChange",function(r){return _(i.minimumFractionDigits,r)||(i.minimumFractionDigits=r),r}),l(),s(83,"mat-error"),c(84,"Please enter a number from 0 to 20"),l()(),s(85,"mat-form-field")(86,"mat-label"),c(87,"Maximum fraction digits"),l(),s(88,"input",5),b("ngModelChange",function(r){return _(i.maximumFractionDigits,r)||(i.maximumFractionDigits=r),r}),l(),s(89,"mat-error"),c(90,"Please enter a number from 0 to 20"),l()(),s(91,"mat-form-field")(92,"mat-label"),c(93,"Minimum significant digits"),l(),s(94,"input",4),b("ngModelChange",function(r){return _(i.minimumSignificantDigits,r)||(i.minimumSignificantDigits=r),r}),l(),s(95,"mat-error"),c(96,"Please enter a number from 1 to 21"),l()(),s(97,"mat-form-field")(98,"mat-label"),c(99,"Maximum significant digits"),l(),s(100,"input",4),b("ngModelChange",function(r){return _(i.maximumSignificantDigits,r)||(i.maximumSignificantDigits=r),r}),l(),s(101,"mat-error"),c(102,"Please enter a number from 1 to 21"),l()()(),s(103,"p"),c(104),ee(105,"intlCurrency"),l()),t&2&&(d(4),g("ngModel",i.enteredNumber),d(4),g("ngModel",i.currency),d(),A(i.currencies),d(5),g("ngModel",i.locale),d(),u("value",void 0),d(2),A(i.languages),d(5),g("ngModel",i.currencyDisplay),d(),u("value",void 0),d(2),u("value","symbol"),d(2),u("value","narrowSymbol"),d(2),u("value","code"),d(2),u("value","name"),d(5),g("ngModel",i.currencySign),d(),u("value",void 0),d(2),u("value","accounting"),d(2),u("value","standard"),d(5),g("ngModel",i.notation),d(),u("value",void 0),d(2),u("value","standard"),d(2),u("value","scientific"),d(2),u("value","engineering"),d(2),u("value","compact"),d(5),g("ngModel",i.signDisplay),d(),u("value",void 0),d(2),u("value","auto"),d(2),u("value","always"),d(2),u("value","exceptZero"),d(2),u("value","negative"),d(2),u("value","never"),d(5),g("ngModel",i.minimumIntegerDigits),d(6),g("ngModel",i.minimumFractionDigits),d(6),g("ngModel",i.maximumFractionDigits),d(6),g("ngModel",i.minimumSignificantDigits),d(6),g("ngModel",i.maximumSignificantDigits),d(4),Fe(" ",ci(105,33,i.enteredNumber(),i.currency(),i.options()),`
`))},dependencies:[ie,pe,Pe,te,$e,Ke,Q,K,we,ne,j,H,Je,xr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return o})();function Gr(o){return Error(`Unable to find icon with the name "${o}"`)}function tl(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Yr(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function qr(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}var et=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},Zr=(()=>{class o{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,a){return this._addSvgIconConfig(e,t,new et(i,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,a){let r=this._sanitizer.sanitize(pt.HTML,i);if(!r)throw qr(i);let m=yt(r);return this._addSvgIconConfig(e,t,new et("",m,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new et(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let a=this._sanitizer.sanitize(pt.HTML,t);if(!a)throw qr(t);let r=yt(a);return this._addSvgIconSetConfig(e,new et("",r,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(pt.RESOURCE_URL,e);if(!t)throw Yr(e);let i=this._cachedIconsByUrl.get(t);return i?Ae(Hi(i)):this._loadSvgIconFromConfig(new et(e,null)).pipe(ti(a=>this._cachedIconsByUrl.set(t,a)),De(a=>Hi(a)))}getNamedSvgIcon(e,t=""){let i=Xr(t,e),a=this._svgIconConfigs.get(i);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(i,a),this._getSvgFromConfig(a);let r=this._iconSetConfigs.get(t);return r?this._getSvgFromIconSetConfigs(e,r):Rn(Gr(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Ae(Hi(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(De(t=>Hi(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return Ae(i);let a=t.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Vn(m=>{let y=`Loading icon set URL: ${this._sanitizer.sanitize(pt.RESOURCE_URL,r.url)} failed: ${m.message}`;return this._errorHandler.handleError(new Error(y)),Ae(null)})));return Jt(a).pipe(De(()=>{let r=this._extractIconWithNameFromAnySet(e,t);if(!r)throw Gr(e);return r}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let a=t[i];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(a),m=this._extractSvgIconFromSet(r,e,a.options);if(m)return m}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ti(t=>e.svgText=t),De(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Ae(null):this._fetchIcon(e).pipe(ti(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let r=a.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,i);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),i);let m=this._svgElementFromString(yt("<svg></svg>"));return m.appendChild(r),this._setSvgAttributes(m,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(yt("<svg></svg>")),i=e.attributes;for(let a=0;a<i.length;a++){let{name:r,value:m}=i[a];r!=="id"&&t.setAttribute(r,m)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,a=i?.withCredentials??!1;if(!this._httpClient)throw tl();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let r=this._sanitizer.sanitize(pt.RESOURCE_URL,t);if(!r)throw Yr(t);let m=this._inProgressUrlFetches.get(r);if(m)return m;let p=this._httpClient.get(r,{responseType:"text",withCredentials:a}).pipe(De(y=>yt(y)),Bn(()=>this._inProgressUrlFetches.delete(r)),Wn());return this._inProgressUrlFetches.set(r,p),p}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(Xr(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let a=this._resolvers[i](t,e);if(a)return il(a)?new et(a.url,null,a.options):new et(a,null)}}static \u0275fac=function(t){return new(t||o)(It(to,8),It(io),It(Me,8),It(oi))};static \u0275prov=me({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function Hi(o){return o.cloneNode(!0)}function Xr(o,n){return o+":"+n}function il(o){return!!(o.url&&o.options)}var nl=["*"],ol=new v("MAT_ICON_DEFAULT_OPTIONS"),rl=new v("mat-icon-location",{providedIn:"root",factory:()=>{let o=h(Me),n=o?o.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),Qr=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],al=Qr.map(o=>`[${o}]`).join(", "),sl=/^url\(['"]?#(.*?)['"]?\)$/,ji=(()=>{class o{_elementRef=h(O);_iconRegistry=h(Zr);_location=h(rl);_errorHandler=h(oi);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Se.EMPTY;constructor(){let e=h(new _t("aria-hidden"),{optional:!0}),t=h(ol,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,a)=>{i.forEach(r=>{a.setAttribute(r.name,`url('${e}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(al),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)Qr.forEach(r=>{let m=t[a],p=m.getAttribute(r),y=p?p.match(sl):null;if(y){let x=i.get(m);x||(x=[],i.set(m,x)),x.push({name:r,value:y[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(ei(1)).subscribe(a=>this._setSvgElement(a),a=>{let r=`Error retrieving icon ${t}:${i}! ${a.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(J("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Rt(i.color?"mat-"+i.color:""),L("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",M],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:nl,decls:1,vars:0,template:function(t,i){t&1&&(Ce(),z(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return o})();var Ui=o=>{let n=o?new Date(o):new Date;return new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,-1).split(".")[0]};function ll(o,n){if(o&1&&(s(0,"mat-option",5),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}var Kr=(()=>{class o{constructor(){this.languages=re,this.selectedDate=f(Ui()),this.dateStyle=f(void 0),this.timeStyle=f(void 0),this.hour12=f(void 0),this.locale=f(void 0),this.options=k(()=>({locale:this.locale(),dateStyle:this.dateStyle(),timeStyle:this.timeStyle(),hour12:this.hour12()}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-date"]],decls:58,vars:23,consts:[["picker",""],[1,"fields-container"],["matInput","","placeholder","Choose a date","type","datetime-local",3,"ngModelChange","ngModel"],["mat-icon-button","","matIconSuffix","",3,"click"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){if(t&1){let a=at();s(0,"div",1)(1,"mat-form-field")(2,"mat-label"),c(3,"Date"),l(),s(4,"input",2,0),b("ngModelChange",function(m){return ue(a),_(i.selectedDate,m)||(i.selectedDate=m),he(m)}),l(),s(6,"button",3),R("click",function(){ue(a);let m=q(5);return he(m.showPicker())}),s(7,"mat-icon"),c(8,"today"),l()()(),s(9,"mat-form-field")(10,"mat-label"),c(11,"Locale"),l(),s(12,"mat-select",4),b("ngModelChange",function(m){return ue(a),_(i.locale,m)||(i.locale=m),he(m)}),s(13,"mat-option",5),c(14,"Browser default"),l(),P(15,ll,2,2,"mat-option",5,B),l()(),s(17,"mat-form-field")(18,"mat-label"),c(19,"Date style"),l(),s(20,"mat-select",4),b("ngModelChange",function(m){return ue(a),_(i.dateStyle,m)||(i.dateStyle=m),he(m)}),s(21,"mat-option",5),c(22,"Browser default"),l(),s(23,"mat-option",5),c(24,"short"),l(),s(25,"mat-option",5),c(26,"medium"),l(),s(27,"mat-option",5),c(28,"long"),l(),s(29,"mat-option",5),c(30,"full"),l()()(),s(31,"mat-form-field")(32,"mat-label"),c(33,"Time style"),l(),s(34,"mat-select",4),b("ngModelChange",function(m){return ue(a),_(i.timeStyle,m)||(i.timeStyle=m),he(m)}),s(35,"mat-option",5),c(36,"Browser default"),l(),s(37,"mat-option",5),c(38,"short"),l(),s(39,"mat-option",5),c(40,"medium"),l(),s(41,"mat-option",5),c(42,"long"),l(),s(43,"mat-option",5),c(44,"full"),l()()(),s(45,"mat-form-field")(46,"mat-label"),c(47,"12 Hours"),l(),s(48,"mat-select",4),b("ngModelChange",function(m){return ue(a),_(i.hour12,m)||(i.hour12=m),he(m)}),s(49,"mat-option",5),c(50,"Browser default"),l(),s(51,"mat-option",5),c(52,"true"),l(),s(53,"mat-option",5),c(54,"false"),l()()()(),s(55,"p"),c(56),ee(57,"intlDate"),l()}t&2&&(d(4),g("ngModel",i.selectedDate),d(8),g("ngModel",i.locale),d(),u("value",void 0),d(2),A(i.languages),d(5),g("ngModel",i.dateStyle),d(),u("value",void 0),d(2),u("value","short"),d(2),u("value","medium"),d(2),u("value","long"),d(2),u("value","full"),d(5),g("ngModel",i.timeStyle),d(),u("value",void 0),d(2),u("value","short"),d(2),u("value","medium"),d(2),u("value","long"),d(2),u("value","full"),d(5),g("ngModel",i.hour12),d(),u("value",void 0),d(2),u("value",!0),d(2),u("value",!1),d(3),S(fe(57,20,i.selectedDate(),i.options())))},dependencies:[ie,pe,te,Q,K,we,ui,ji,ne,j,H,Gt,Sr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return o})();function dl(o,n){if(o&1&&(s(0,"mat-option",3),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}var $r=(()=>{class o{constructor(){this.enteredNumber=f("1024.4539"),this.languages=re,this.locale=f(void 0),this.notation=f(void 0),this.signDisplay=f(void 0),this.minimumIntegerDigits=f(void 0),this.minimumFractionDigits=f(void 0),this.maximumFractionDigits=f(void 0),this.minimumSignificantDigits=f(void 0),this.maximumSignificantDigits=f(void 0),this.options=k(()=>({locale:this.locale(),notation:this.notation(),signDisplay:this.signDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-decimal"]],decls:76,vars:25,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),l(),s(4,"input",1),b("ngModelChange",function(r){return _(i.enteredNumber,r)||(i.enteredNumber=r),r}),l()(),s(5,"mat-form-field")(6,"mat-label"),c(7,"Locale"),l(),s(8,"mat-select",2),b("ngModelChange",function(r){return _(i.locale,r)||(i.locale=r),r}),s(9,"mat-option",3),c(10,"Browser default"),l(),P(11,dl,2,2,"mat-option",3,B),l()(),s(13,"mat-form-field")(14,"mat-label"),c(15,"Notation"),l(),s(16,"mat-select",2),b("ngModelChange",function(r){return _(i.notation,r)||(i.notation=r),r}),s(17,"mat-option",3),c(18,"Browser default"),l(),s(19,"mat-option",3),c(20,"standard"),l(),s(21,"mat-option",3),c(22,"scientific"),l(),s(23,"mat-option",3),c(24,"engineering"),l(),s(25,"mat-option",3),c(26,"compact"),l()()(),s(27,"mat-form-field")(28,"mat-label"),c(29,"Sign display"),l(),s(30,"mat-select",2),b("ngModelChange",function(r){return _(i.signDisplay,r)||(i.signDisplay=r),r}),s(31,"mat-option",3),c(32,"Browser default"),l(),s(33,"mat-option",3),c(34,"auto"),l(),s(35,"mat-option",3),c(36,"always"),l(),s(37,"mat-option",3),c(38,"exceptZero"),l(),s(39,"mat-option",3),c(40,"negative"),l(),s(41,"mat-option",3),c(42,"never"),l()()(),s(43,"mat-form-field")(44,"mat-label"),c(45,"Minimum integer digits"),l(),s(46,"input",4),b("ngModelChange",function(r){return _(i.minimumIntegerDigits,r)||(i.minimumIntegerDigits=r),r}),l(),s(47,"mat-error"),c(48,"Please enter a number from 1 to 21"),l()(),s(49,"mat-form-field")(50,"mat-label"),c(51,"Minimum fraction digits"),l(),s(52,"input",5),b("ngModelChange",function(r){return _(i.minimumFractionDigits,r)||(i.minimumFractionDigits=r),r}),l(),s(53,"mat-error"),c(54,"Please enter a number from 0 to 20"),l()(),s(55,"mat-form-field")(56,"mat-label"),c(57,"Maximum fraction digits"),l(),s(58,"input",5),b("ngModelChange",function(r){return _(i.maximumFractionDigits,r)||(i.maximumFractionDigits=r),r}),l(),s(59,"mat-error"),c(60,"Please enter a number from 0 to 20"),l()(),s(61,"mat-form-field")(62,"mat-label"),c(63,"Minimum significant digits"),l(),s(64,"input",4),b("ngModelChange",function(r){return _(i.minimumSignificantDigits,r)||(i.minimumSignificantDigits=r),r}),l(),s(65,"mat-error"),c(66,"Please enter a number from 1 to 21"),l()(),s(67,"mat-form-field")(68,"mat-label"),c(69,"Maximum significant digits"),l(),s(70,"input",4),b("ngModelChange",function(r){return _(i.maximumSignificantDigits,r)||(i.maximumSignificantDigits=r),r}),l(),s(71,"mat-error"),c(72,"Please enter a number from 1 to 21"),l()()(),s(73,"p"),c(74),ee(75,"intlDecimal"),l()),t&2&&(d(4),g("ngModel",i.enteredNumber),d(4),g("ngModel",i.locale),d(),u("value",void 0),d(2),A(i.languages),d(5),g("ngModel",i.notation),d(),u("value",void 0),d(2),u("value","standard"),d(2),u("value","scientific"),d(2),u("value","engineering"),d(2),u("value","compact"),d(5),g("ngModel",i.signDisplay),d(),u("value",void 0),d(2),u("value","auto"),d(2),u("value","always"),d(2),u("value","exceptZero"),d(2),u("value","negative"),d(2),u("value","never"),d(5),g("ngModel",i.minimumIntegerDigits),d(6),g("ngModel",i.minimumFractionDigits),d(6),g("ngModel",i.maximumFractionDigits),d(6),g("ngModel",i.minimumSignificantDigits),d(6),g("ngModel",i.maximumSignificantDigits),d(4),Fe(" ",fe(75,22,i.enteredNumber(),i.options()),`
`))},dependencies:[ie,pe,Pe,te,$e,Ke,Q,K,we,ne,j,H,Je,Mr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return o})();function cl(o,n){if(o&1&&(s(0,"mat-option",3),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}var Jr=(()=>{class o{constructor(){this.languages=re,this.years=f(5),this.months=f(2),this.weeks=f(void 0),this.days=f(23),this.hours=f(void 0),this.minutes=f(void 0),this.seconds=f(void 0),this.milliseconds=f(void 0),this.microseconds=f(void 0),this.nanoseconds=f(void 0),this.locale=f(void 0),this.style=f(void 0),this.value=k(()=>({years:this.years(),months:this.months(),weeks:this.weeks(),days:this.days(),hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds(),microseconds:this.microseconds()})),this.options=k(()=>({locale:this.locale(),style:this.style()}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-duration"]],decls:66,vars:22,consts:[[1,"fields-container"],["matInput","","type","number",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Years"),l(),s(4,"input",1),b("ngModelChange",function(r){return _(i.years,r)||(i.years=r),r}),l()(),s(5,"mat-form-field")(6,"mat-label"),c(7,"Months"),l(),s(8,"input",1),b("ngModelChange",function(r){return _(i.months,r)||(i.months=r),r}),l()(),s(9,"mat-form-field")(10,"mat-label"),c(11,"Weeks"),l(),s(12,"input",1),b("ngModelChange",function(r){return _(i.weeks,r)||(i.weeks=r),r}),l()(),s(13,"mat-form-field")(14,"mat-label"),c(15,"Days"),l(),s(16,"input",1),b("ngModelChange",function(r){return _(i.days,r)||(i.days=r),r}),l()(),s(17,"mat-form-field")(18,"mat-label"),c(19,"Hours"),l(),s(20,"input",1),b("ngModelChange",function(r){return _(i.hours,r)||(i.hours=r),r}),l()(),s(21,"mat-form-field")(22,"mat-label"),c(23,"Minutes"),l(),s(24,"input",1),b("ngModelChange",function(r){return _(i.minutes,r)||(i.minutes=r),r}),l()(),s(25,"mat-form-field")(26,"mat-label"),c(27,"Seconds"),l(),s(28,"input",1),b("ngModelChange",function(r){return _(i.seconds,r)||(i.seconds=r),r}),l()(),s(29,"mat-form-field")(30,"mat-label"),c(31,"Milliseconds"),l(),s(32,"input",1),b("ngModelChange",function(r){return _(i.milliseconds,r)||(i.milliseconds=r),r}),l()(),s(33,"mat-form-field")(34,"mat-label"),c(35,"Microseconds"),l(),s(36,"input",1),b("ngModelChange",function(r){return _(i.microseconds,r)||(i.microseconds=r),r}),l()(),s(37,"mat-form-field")(38,"mat-label"),c(39,"Nanoseconds"),l(),s(40,"input",1),b("ngModelChange",function(r){return _(i.nanoseconds,r)||(i.nanoseconds=r),r}),l()(),s(41,"mat-form-field")(42,"mat-label"),c(43,"Locale"),l(),s(44,"mat-select",2),b("ngModelChange",function(r){return _(i.locale,r)||(i.locale=r),r}),s(45,"mat-option",3),c(46,"Browser default"),l(),P(47,cl,2,2,"mat-option",3,B),l()(),s(49,"mat-form-field")(50,"mat-label"),c(51,"Style"),l(),s(52,"mat-select",2),b("ngModelChange",function(r){return _(i.style,r)||(i.style=r),r}),s(53,"mat-option",3),c(54,"Browser default"),l(),s(55,"mat-option",3),c(56,"long"),l(),s(57,"mat-option",3),c(58,"short"),l(),s(59,"mat-option",3),c(60,"narrow"),l(),s(61,"mat-option",3),c(62,"digital"),l()()()(),s(63,"p"),c(64),ee(65,"intlDuration"),l()),t&2&&(d(4),g("ngModel",i.years),d(4),g("ngModel",i.months),d(4),g("ngModel",i.weeks),d(4),g("ngModel",i.days),d(4),g("ngModel",i.hours),d(4),g("ngModel",i.minutes),d(4),g("ngModel",i.seconds),d(4),g("ngModel",i.milliseconds),d(4),g("ngModel",i.microseconds),d(4),g("ngModel",i.nanoseconds),d(4),g("ngModel",i.locale),d(),u("value",void 0),d(2),A(i.languages),d(5),g("ngModel",i.style),d(),u("value",void 0),d(2),u("value","long"),d(2),u("value","short"),d(2),u("value","narrow"),d(2),u("value","digital"),d(3),Fe(" ",fe(65,19,i.value(),i.options()),`
`))},dependencies:[ie,pe,Pe,te,Q,K,we,ne,j,H,kr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return o})();function ml(o,n){if(o&1&&(s(0,"mat-option",2),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}function ul(o,n){if(o&1&&(s(0,"mat-option",2),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}var ea=(()=>{class o{constructor(){this.languages=re,this.selectedLanguage=f("de-DE"),this.languageDisplay=f(void 0),this.locale=f(void 0),this.options=k(()=>({locale:this.locale(),languageDisplay:this.languageDisplay()}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-language"]],decls:28,vars:11,consts:[[1,"fields-container"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Language to transform"),l(),s(4,"mat-select",1),b("ngModelChange",function(r){return _(i.selectedLanguage,r)||(i.selectedLanguage=r),r}),P(5,ml,2,2,"mat-option",2,B),l()(),s(7,"mat-form-field")(8,"mat-label"),c(9,"Locale"),l(),s(10,"mat-select",1),b("ngModelChange",function(r){return _(i.locale,r)||(i.locale=r),r}),s(11,"mat-option",2),c(12,"Browser default"),l(),P(13,ul,2,2,"mat-option",2,B),l()(),s(15,"mat-form-field")(16,"mat-label"),c(17,"Language display"),l(),s(18,"mat-select",1),b("ngModelChange",function(r){return _(i.languageDisplay,r)||(i.languageDisplay=r),r}),s(19,"mat-option",2),c(20,"Browser default"),l(),s(21,"mat-option",2),c(22,"dialect"),l(),s(23,"mat-option",2),c(24,"standard"),l()()()(),s(25,"p"),c(26),ee(27,"intlLanguage"),l()),t&2&&(d(4),g("ngModel",i.selectedLanguage),d(),A(i.languages),d(5),g("ngModel",i.locale),d(),u("value",void 0),d(2),A(i.languages),d(5),g("ngModel",i.languageDisplay),d(),u("value",void 0),d(2),u("value","dialect"),d(2),u("value","standard"),d(3),S(fe(27,8,i.selectedLanguage(),i.options())))},dependencies:[ie,te,Q,K,ne,j,H,Tr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return o})();var Kt=["Pizza","Lasagne","Gnocchi","Spaghetti","Pesto"];function hl(o,n){if(o&1&&(s(0,"mat-option",2),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}function fl(o,n){if(o&1&&(s(0,"mat-option",2),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}var ta=(()=>{class o{constructor(){this.languages=re,this.list=Kt,this.selectedItems=f([Kt[0],Kt[2],Kt[3]]),this.locale=f(void 0),this.type=f(void 0),this.style=f(void 0),this.options=k(()=>({locale:this.locale(),type:this.type(),style:this.style()}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-list"]],decls:42,vars:17,consts:[[1,"fields-container"],["multiple","",3,"ngModelChange","ngModel"],[3,"value"],[3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"List items"),l(),s(4,"mat-select",1),b("ngModelChange",function(r){return _(i.selectedItems,r)||(i.selectedItems=r),r}),P(5,hl,2,2,"mat-option",2,B),l()(),s(7,"mat-form-field")(8,"mat-label"),c(9,"Locale"),l(),s(10,"mat-select",3),b("ngModelChange",function(r){return _(i.locale,r)||(i.locale=r),r}),s(11,"mat-option",2),c(12,"Browser default"),l(),P(13,fl,2,2,"mat-option",2,B),l()(),s(15,"mat-form-field")(16,"mat-label"),c(17,"Type"),l(),s(18,"mat-select",3),b("ngModelChange",function(r){return _(i.type,r)||(i.type=r),r}),s(19,"mat-option",2),c(20,"Browser default"),l(),s(21,"mat-option",2),c(22,"conjunction"),l(),s(23,"mat-option",2),c(24,"disjunction"),l(),s(25,"mat-option",2),c(26,"unit"),l()()(),s(27,"mat-form-field")(28,"mat-label"),c(29,"Style"),l(),s(30,"mat-select",3),b("ngModelChange",function(r){return _(i.style,r)||(i.style=r),r}),s(31,"mat-option",2),c(32,"Browser default"),l(),s(33,"mat-option",2),c(34,"long"),l(),s(35,"mat-option",2),c(36,"short"),l(),s(37,"mat-option",2),c(38,"narrow"),l()()()(),s(39,"p"),c(40),ee(41,"intlList"),l()),t&2&&(d(4),g("ngModel",i.selectedItems),d(),A(i.list),d(5),g("ngModel",i.locale),d(),u("value",void 0),d(2),A(i.languages),d(5),g("ngModel",i.type),d(),u("value",void 0),d(2),u("value","conjunction"),d(2),u("value","disjunction"),d(2),u("value","unit"),d(5),g("ngModel",i.style),d(),u("value",void 0),d(2),u("value","long"),d(2),u("value","short"),d(2),u("value","narrow"),d(3),S(fe(41,14,i.selectedItems(),i.options())))},dependencies:[ie,te,Q,K,ne,j,H,Or],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return o})();function pl(o,n){if(o&1&&(s(0,"mat-option",3),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}var ia=(()=>{class o{constructor(){this.enteredNumber=f("0.24"),this.languages=re,this.locale=f(void 0),this.notation=f(void 0),this.signDisplay=f(void 0),this.minimumIntegerDigits=f(void 0),this.minimumFractionDigits=f(void 0),this.maximumFractionDigits=f(void 0),this.minimumSignificantDigits=f(void 0),this.maximumSignificantDigits=f(void 0),this.options=k(()=>({locale:this.locale(),notation:this.notation(),signDisplay:this.signDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-percent"]],decls:76,vars:25,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),l(),s(4,"input",1),b("ngModelChange",function(r){return _(i.enteredNumber,r)||(i.enteredNumber=r),r}),l()(),s(5,"mat-form-field")(6,"mat-label"),c(7,"Locale"),l(),s(8,"mat-select",2),b("ngModelChange",function(r){return _(i.locale,r)||(i.locale=r),r}),s(9,"mat-option",3),c(10,"Browser default"),l(),P(11,pl,2,2,"mat-option",3,B),l()(),s(13,"mat-form-field")(14,"mat-label"),c(15,"Notation"),l(),s(16,"mat-select",2),b("ngModelChange",function(r){return _(i.notation,r)||(i.notation=r),r}),s(17,"mat-option",3),c(18,"Browser default"),l(),s(19,"mat-option",3),c(20,"standard"),l(),s(21,"mat-option",3),c(22,"scientific"),l(),s(23,"mat-option",3),c(24,"engineering"),l(),s(25,"mat-option",3),c(26,"compact"),l()()(),s(27,"mat-form-field")(28,"mat-label"),c(29,"Sign display"),l(),s(30,"mat-select",2),b("ngModelChange",function(r){return _(i.signDisplay,r)||(i.signDisplay=r),r}),s(31,"mat-option",3),c(32,"Browser default"),l(),s(33,"mat-option",3),c(34,"auto"),l(),s(35,"mat-option",3),c(36,"always"),l(),s(37,"mat-option",3),c(38,"exceptZero"),l(),s(39,"mat-option",3),c(40,"negative"),l(),s(41,"mat-option",3),c(42,"never"),l()()(),s(43,"mat-form-field")(44,"mat-label"),c(45,"Minimum integer digits"),l(),s(46,"input",4),b("ngModelChange",function(r){return _(i.minimumIntegerDigits,r)||(i.minimumIntegerDigits=r),r}),l(),s(47,"mat-error"),c(48,"Please enter a number from 1 to 21"),l()(),s(49,"mat-form-field")(50,"mat-label"),c(51,"Minimum fraction digits"),l(),s(52,"input",5),b("ngModelChange",function(r){return _(i.minimumFractionDigits,r)||(i.minimumFractionDigits=r),r}),l(),s(53,"mat-error"),c(54,"Please enter a number from 0 to 20"),l()(),s(55,"mat-form-field")(56,"mat-label"),c(57,"Maximum fraction digits"),l(),s(58,"input",5),b("ngModelChange",function(r){return _(i.maximumFractionDigits,r)||(i.maximumFractionDigits=r),r}),l(),s(59,"mat-error"),c(60,"Please enter a number from 0 to 20"),l()(),s(61,"mat-form-field")(62,"mat-label"),c(63,"Minimum significant digits"),l(),s(64,"input",4),b("ngModelChange",function(r){return _(i.minimumSignificantDigits,r)||(i.minimumSignificantDigits=r),r}),l(),s(65,"mat-error"),c(66,"Please enter a number from 1 to 21"),l()(),s(67,"mat-form-field")(68,"mat-label"),c(69,"Maximum significant digits"),l(),s(70,"input",4),b("ngModelChange",function(r){return _(i.maximumSignificantDigits,r)||(i.maximumSignificantDigits=r),r}),l(),s(71,"mat-error"),c(72,"Please enter a number from 1 to 21"),l()()(),s(73,"p"),c(74),ee(75,"intlPercent"),l()),t&2&&(d(4),g("ngModel",i.enteredNumber),d(4),g("ngModel",i.locale),d(),u("value",void 0),d(2),A(i.languages),d(5),g("ngModel",i.notation),d(),u("value",void 0),d(2),u("value","standard"),d(2),u("value","scientific"),d(2),u("value","engineering"),d(2),u("value","compact"),d(5),g("ngModel",i.signDisplay),d(),u("value",void 0),d(2),u("value","auto"),d(2),u("value","always"),d(2),u("value","exceptZero"),d(2),u("value","negative"),d(2),u("value","never"),d(5),g("ngModel",i.minimumIntegerDigits),d(6),g("ngModel",i.minimumFractionDigits),d(6),g("ngModel",i.maximumFractionDigits),d(6),g("ngModel",i.minimumSignificantDigits),d(6),g("ngModel",i.maximumSignificantDigits),d(4),Fe(" ",fe(75,22,i.enteredNumber(),i.options()),`
`))},dependencies:[ie,pe,Pe,te,$e,Ke,Q,K,we,ne,j,H,Je,Pr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return o})();var En=["*"];var gl=["tabListContainer"],_l=["tabList"],bl=["tabListInner"],vl=["nextPaginator"],yl=["previousPaginator"];var Cl=["mat-tab-nav-bar",""],xl=["mat-tab-link",""];var Dn="mdc-tab-indicator--active",na="mdc-tab-indicator--no-transition",Mn=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(i=>i.elementRef.nativeElement===n),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let i=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},wl=(()=>{class o{_elementRef=h(O);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Dn);return}let i=t.getBoundingClientRect(),a=e.width/i.width,r=e.left-i.left;t.classList.add(na),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${a})`),t.getBoundingClientRect(),t.classList.remove(na),t.classList.add(Dn),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Dn)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",M]}})}return o})();var oa={passive:!0},Sl=650,Dl=100,Ml=(()=>{class o{_elementRef=h(O);_changeDetectorRef=h(Ee);_viewportRuler=h(dt);_dir=h(Ze,{optional:!0});_ngZone=h(U);_platform=h(be);_sharedResizeObserver=h(Ei);_injector=h(Re);_renderer=h(ge);_animationsDisabled=Xe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new D;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new D;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new W;indexFocused=new W;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),oa),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),oa))}ngAfterContentInit(){let e=this._dir?this._dir.change:Ae("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Nn(32),X(this._destroyed)),i=this._viewportRuler.change(150).pipe(X(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new lo(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ot(a,{injector:this._injector}),Ue(e,i,t,this._items.changes,this._itemsResized()).pipe(X(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?$t:this._items.changes.pipe(Le(this._items),ft(e=>new ht(t=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(a=>t.next(a));return e.forEach(a=>i.observe(a.elementRef.nativeElement)),()=>{i.disconnect()}}))),zn(1),Ie(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!He(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:r}=t.elementRef.nativeElement,m,p;this._getLayoutDirection()=="ltr"?(m=a,p=m+r):(p=this._tabListInner.nativeElement.offsetWidth-a,m=p-r);let y=this.scrollDistance,x=this.scrollDistance+i;m<y?this.scrollDistance-=y-m:p>x&&(this.scrollDistance+=Math.min(p-x,m-y))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,i=e-t>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),An(Sl,Dl).pipe(X(Ue(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:a}=this._scrollHeader(e);(a===0||a>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||o)};static \u0275dir=I({type:o,inputs:{disablePagination:[2,"disablePagination","disablePagination",M],selectedIndex:[2,"selectedIndex","selectedIndex",bt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return o})();var El=new v("MAT_TABS_CONFIG");var kn=(()=>{class o extends Ml{_focusedItem=f(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new Fn(!1);stretchTabs=!0;get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=f(!1);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=h(El,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new Mn(this._items),this._items.changes.pipe(Le(null),X(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Le(null),X(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let t=0;t<e.length;t++)if(e[t].active){this.selectedIndex=t,this.tabPanel&&(this.tabPanel._activeTabId=e[t].id),this._focusedItem.set(e[t]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(e){return this._keyManager?.activeItem===e}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(t,i,a){if(t&1&&gt(a,In,5),t&2){let r;T(r=F())&&(i._items=r)}},viewQuery:function(t,i){if(t&1&&We(gl,7)(_l,7)(bl,7)(vl,5)(yl,5),t&2){let a;T(a=F())&&(i._tabListContainer=a.first),T(a=F())&&(i._tabList=a.first),T(a=F())&&(i._tabListInner=a.first),T(a=F())&&(i._nextPaginator=a.first),T(a=F())&&(i._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(t,i){t&2&&(J("role",i._getRole()),Zi("--mat-tab-animation-duration",i.animationDuration),L("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",i.stretchTabs)("mat-primary",i.color!=="warn"&&i.color!=="accent")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("_mat-animation-noopable",i._animationsDisabled))},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",M],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",M],animationDuration:"animationDuration",backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",M],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[_e],attrs:Cl,ngContentSelectors:En,decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,i){t&1&&(Ce(),s(0,"div",5,0),R("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(r){return i._handlePaginatorPress("before",r)})("touchend",function(){return i._stopInterval()}),ce(2,"div",6),l(),s(3,"div",7,1),R("keydown",function(r){return i._handleKeydown(r)}),s(5,"div",8,2),R("cdkObserveContent",function(){return i._onContentChanges()}),s(7,"div",9,3),z(9),l()()(),s(10,"div",10,4),R("mousedown",function(r){return i._handlePaginatorPress("after",r)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),ce(12,"div",6),l()),t&2&&(L("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),u("matRippleDisabled",i._disableScrollBefore||i.disableRipple),d(10),L("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),u("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[Lt,ro],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
`],encapsulation:2})}return o})(),In=(()=>{class o extends wl{_tabNavBar=h(kn);elementRef=h(O);_focusMonitor=h(no);_destroyed=new D;_isActive=!1;_tabIndex=k(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=f(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=h(ve).getId("mat-tab-link-");constructor(){super(),h(qe).load(mi);let e=h(mo,{optional:!0}),t=h(new _t("tabindex"),{optional:!0});this.rippleConfig=e||{},this.tabIndex=t==null?0:parseInt(t)||0,Xe()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(X(this._destroyed)).subscribe(i=>{this.fitInkBarToContent=i})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===32&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(t,i){t&1&&R("focus",function(){return i._handleFocus()})("keydown",function(r){return i._handleKeydown(r)}),t&2&&(J("aria-controls",i._getAriaControls())("aria-current",i._getAriaCurrent())("aria-disabled",i.disabled)("aria-selected",i._getAriaSelected())("id",i.id)("tabIndex",i._tabIndex())("role",i._getRole()),L("mat-mdc-tab-disabled",i.disabled)("mdc-tab--active",i.active))},inputs:{active:[2,"active","active",M],disabled:[2,"disabled","disabled",M],disableRipple:[2,"disableRipple","disableRipple",M],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:bt(e)],id:"id"},exportAs:["matTabLink"],features:[_e],attrs:xl,ngContentSelectors:En,decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(t,i){t&1&&(Ce(),ce(0,"span",0)(1,"div",1),s(2,"span",2)(3,"span",3),z(4),l()()),t&2&&(d(),u("matRippleTrigger",i.elementRef.nativeElement)("matRippleDisabled",i.rippleDisabled))},dependencies:[Lt],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2,changeDetection:0})}return o})(),ra=(()=>{class o{id=h(ve).getId("mat-tab-nav-panel-");_activeTabId;static \u0275fac=function(t){return new(t||o)};static \u0275cmp=w({type:o,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-mdc-tab-nav-panel"],hostVars:2,hostBindings:function(t,i){t&2&&J("aria-labelledby",i._activeTabId)("id",i.id)},inputs:{id:"id"},exportAs:["matTabNavPanel"],ngContentSelectors:En,decls:1,vars:0,template:function(t,i){t&1&&(Ce(),z(0))},encapsulation:2,changeDetection:0})}return o})();var aa=(()=>{class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-pipes"]],features:[Z([{provide:Ii,useValue:{subscriptSizing:"dynamic"}}])],decls:35,vars:11,consts:[["dateActive","routerLinkActive"],["decimalActive","routerLinkActive"],["percentActive","routerLinkActive"],["currencyActive","routerLinkActive"],["unitActive","routerLinkActive"],["languageActive","routerLinkActive"],["countryActive","routerLinkActive"],["listActive","routerLinkActive"],["relativeTimeActive","routerLinkActive"],["durationActive","routerLinkActive"],["tabPanel",""],["mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","","routerLink","date","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","decimal","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","percent","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","currency","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","unit","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","language","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","country","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","list","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","relative-time","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","duration","routerLinkActive","",3,"active"],[1,"panel-container"]],template:function(t,i){if(t&1&&(s(0,"nav",11)(1,"a",12,0),c(3," Date "),l(),s(4,"a",13,1),c(6," Decimal "),l(),s(7,"a",14,2),c(9," Percent "),l(),s(10,"a",15,3),c(12,"Currency"),l(),s(13,"a",16,4),c(15," Unit "),l(),s(16,"a",17,5),c(18,"Language"),l(),s(19,"a",18,6),c(21," Country "),l(),s(22,"a",19,7),c(24," List "),l(),s(25,"a",20,8),c(27,"Relative Time"),l(),s(28,"a",21,9),c(30," Duration "),l()(),ce(31,"mat-tab-nav-panel",null,10),s(33,"div",22),ce(34,"router-outlet"),l()),t&2){let a=q(2),r=q(5),m=q(8),p=q(11),y=q(14),x=q(17),V=q(20),ye=q(23),Oe=q(26),ke=q(29),ut=q(32);u("tabPanel",ut),d(),u("active",a.isActive),d(3),u("active",r.isActive),d(3),u("active",m.isActive),d(3),u("active",p.isActive),d(3),u("active",y.isActive),d(3),u("active",x.isActive),d(3),u("active",V.isActive),d(3),u("active",ye.isActive),d(3),u("active",Oe.isActive),d(3),u("active",ke.isActive)}},dependencies:[ho,fo,uo,kn,In,ra],styles:[".panel-container[_ngcontent-%COMP%]{padding:16px}"]})}}return o})();function kl(o,n){if(o&1&&(s(0,"mat-option",5),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}var sa=(()=>{class o{constructor(){this.selectedDate=f(Ui(new Date(new Date().getTime()-6e4))),this.languages=re,this.numeric=f(void 0),this.style=f(void 0),this.locale=f(void 0),this.options=k(()=>({locale:this.locale(),numeric:this.numeric(),style:this.style()}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-relative-time"]],decls:42,vars:16,consts:[["picker",""],[1,"fields-container"],["matInput","","placeholder","Choose a date","type","datetime-local",3,"ngModelChange","ngModel"],["mat-icon-button","","matIconSuffix","",3,"click"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){if(t&1){let a=at();s(0,"div",1)(1,"mat-form-field")(2,"mat-label"),c(3,"Date"),l(),s(4,"input",2,0),b("ngModelChange",function(m){return ue(a),_(i.selectedDate,m)||(i.selectedDate=m),he(m)}),l(),s(6,"button",3),R("click",function(){ue(a);let m=q(5);return he(m.showPicker())}),s(7,"mat-icon"),c(8,"today"),l()()(),s(9,"mat-form-field")(10,"mat-label"),c(11,"Locale"),l(),s(12,"mat-select",4),b("ngModelChange",function(m){return ue(a),_(i.locale,m)||(i.locale=m),he(m)}),s(13,"mat-option",5),c(14,"Browser default"),l(),P(15,kl,2,2,"mat-option",5,B),l()(),s(17,"mat-form-field")(18,"mat-label"),c(19,"Numeric"),l(),s(20,"mat-select",4),b("ngModelChange",function(m){return ue(a),_(i.numeric,m)||(i.numeric=m),he(m)}),s(21,"mat-option",5),c(22,"Browser default"),l(),s(23,"mat-option",5),c(24,"auto"),l(),s(25,"mat-option",5),c(26,"always"),l()()(),s(27,"mat-form-field")(28,"mat-label"),c(29,"Style"),l(),s(30,"mat-select",4),b("ngModelChange",function(m){return ue(a),_(i.style,m)||(i.style=m),he(m)}),s(31,"mat-option",5),c(32,"Browser default"),l(),s(33,"mat-option",5),c(34,"long"),l(),s(35,"mat-option",5),c(36,"short"),l(),s(37,"mat-option",5),c(38,"narrow"),l()()()(),s(39,"p"),c(40),ee(41,"intlRelativeTime"),l()}t&2&&(d(4),g("ngModel",i.selectedDate),d(8),g("ngModel",i.locale),d(),u("value",void 0),d(2),A(i.languages),d(5),g("ngModel",i.numeric),d(),u("value",void 0),d(2),u("value","auto"),d(2),u("value","always"),d(5),g("ngModel",i.style),d(),u("value",void 0),d(2),u("value","long"),d(2),u("value","short"),d(2),u("value","narrow"),d(3),S(fe(41,13,i.selectedDate(),i.options())))},dependencies:[ie,pe,te,Q,K,we,ui,ji,ne,j,H,Gt,Lr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return o})();var la=["acre","bit","byte","celsius","centimeter","day","degree","fahrenheit","fluid-ounce","foot","gallon","gigabit","gigabyte","gram","hectare","hour","inch","kilobit","kilobyte","kilogram","kilometer","liter","megabit","megabyte","meter","mile","mile-scandinavian","milliliter","millimeter","millisecond","minute","month","ounce","percent","petabyte","pound","second","stone","terabit","terabyte","week","yardv","year"];function Il(o,n){if(o&1&&(s(0,"mat-option",3),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}function Tl(o,n){if(o&1&&(s(0,"mat-option",3),c(1),l()),o&2){let e=n.$implicit;u("value",e),d(),S(e)}}var da=(()=>{class o{constructor(){this.enteredNumber=f("1"),this.selectedUnit=f("hour"),this.languages=re,this.units=la,this.locale=f(void 0),this.notation=f(void 0),this.signDisplay=f(void 0),this.unitDisplay=f(void 0),this.minimumIntegerDigits=f(void 0),this.minimumFractionDigits=f(void 0),this.maximumFractionDigits=f(void 0),this.minimumSignificantDigits=f(void 0),this.maximumSignificantDigits=f(void 0),this.options=k(()=>({locale:this.locale(),notation:this.notation(),signDisplay:this.signDisplay(),unitDisplay:this.unitDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=w({type:o,selectors:[["app-unit"]],decls:94,vars:32,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),l(),s(4,"input",1),b("ngModelChange",function(r){return _(i.enteredNumber,r)||(i.enteredNumber=r),r}),l()(),s(5,"mat-form-field")(6,"mat-label"),c(7,"Unit"),l(),s(8,"mat-select",2),b("ngModelChange",function(r){return _(i.selectedUnit,r)||(i.selectedUnit=r),r}),P(9,Il,2,2,"mat-option",3,B),l()(),s(11,"mat-form-field")(12,"mat-label"),c(13,"Locale"),l(),s(14,"mat-select",2),b("ngModelChange",function(r){return _(i.locale,r)||(i.locale=r),r}),s(15,"mat-option",3),c(16,"Browser default"),l(),P(17,Tl,2,2,"mat-option",3,B),l()(),s(19,"mat-form-field")(20,"mat-label"),c(21,"Unit display"),l(),s(22,"mat-select",2),b("ngModelChange",function(r){return _(i.unitDisplay,r)||(i.unitDisplay=r),r}),s(23,"mat-option",3),c(24,"Browser default"),l(),s(25,"mat-option",3),c(26,"narrow"),l(),s(27,"mat-option",3),c(28,"short"),l(),s(29,"mat-option",3),c(30,"long"),l()()(),s(31,"mat-form-field")(32,"mat-label"),c(33,"Notation"),l(),s(34,"mat-select",2),b("ngModelChange",function(r){return _(i.notation,r)||(i.notation=r),r}),s(35,"mat-option",3),c(36,"Browser default"),l(),s(37,"mat-option",3),c(38,"standard"),l(),s(39,"mat-option",3),c(40,"scientific"),l(),s(41,"mat-option",3),c(42,"engineering"),l(),s(43,"mat-option",3),c(44,"compact"),l()()(),s(45,"mat-form-field")(46,"mat-label"),c(47,"Sign display"),l(),s(48,"mat-select",2),b("ngModelChange",function(r){return _(i.signDisplay,r)||(i.signDisplay=r),r}),s(49,"mat-option",3),c(50,"Browser default"),l(),s(51,"mat-option",3),c(52,"auto"),l(),s(53,"mat-option",3),c(54,"always"),l(),s(55,"mat-option",3),c(56,"exceptZero"),l(),s(57,"mat-option",3),c(58,"negative"),l(),s(59,"mat-option",3),c(60,"never"),l()()(),s(61,"mat-form-field")(62,"mat-label"),c(63,"Minimum integer digits"),l(),s(64,"input",4),b("ngModelChange",function(r){return _(i.minimumIntegerDigits,r)||(i.minimumIntegerDigits=r),r}),l(),s(65,"mat-error"),c(66,"Please enter a number from 1 to 21"),l()(),s(67,"mat-form-field")(68,"mat-label"),c(69,"Minimum fraction digits"),l(),s(70,"input",5),b("ngModelChange",function(r){return _(i.minimumFractionDigits,r)||(i.minimumFractionDigits=r),r}),l(),s(71,"mat-error"),c(72,"Please enter a number from 0 to 20"),l()(),s(73,"mat-form-field")(74,"mat-label"),c(75,"Maximum fraction digits"),l(),s(76,"input",5),b("ngModelChange",function(r){return _(i.maximumFractionDigits,r)||(i.maximumFractionDigits=r),r}),l(),s(77,"mat-error"),c(78,"Please enter a number from 0 to 20"),l()(),s(79,"mat-form-field")(80,"mat-label"),c(81,"Minimum significant digits"),l(),s(82,"input",4),b("ngModelChange",function(r){return _(i.minimumSignificantDigits,r)||(i.minimumSignificantDigits=r),r}),l(),s(83,"mat-error"),c(84,"Please enter a number from 1 to 21"),l()(),s(85,"mat-form-field")(86,"mat-label"),c(87,"Maximum significant digits"),l(),s(88,"input",4),b("ngModelChange",function(r){return _(i.maximumSignificantDigits,r)||(i.maximumSignificantDigits=r),r}),l(),s(89,"mat-error"),c(90,"Please enter a number from 1 to 21"),l()()(),s(91,"p"),c(92),ee(93,"intlUnit"),l()),t&2&&(d(4),g("ngModel",i.enteredNumber),d(4),g("ngModel",i.selectedUnit),d(),A(i.units),d(5),g("ngModel",i.locale),d(),u("value",void 0),d(2),A(i.languages),d(5),g("ngModel",i.unitDisplay),d(),u("value",void 0),d(2),u("value","narrow"),d(2),u("value","short"),d(2),u("value","long"),d(5),g("ngModel",i.notation),d(),u("value",void 0),d(2),u("value","standard"),d(2),u("value","scientific"),d(2),u("value","engineering"),d(2),u("value","compact"),d(5),g("ngModel",i.signDisplay),d(),u("value",void 0),d(2),u("value","auto"),d(2),u("value","always"),d(2),u("value","exceptZero"),d(2),u("value","negative"),d(2),u("value","never"),d(5),g("ngModel",i.minimumIntegerDigits),d(6),g("ngModel",i.minimumFractionDigits),d(6),g("ngModel",i.maximumFractionDigits),d(6),g("ngModel",i.minimumSignificantDigits),d(6),g("ngModel",i.maximumSignificantDigits),d(4),Fe(" ",ci(93,28,i.enteredNumber(),i.selectedUnit(),i.options()),`
`))},dependencies:[ie,pe,Pe,te,$e,Ke,Q,K,we,ne,j,H,Je,Nr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return o})();var Fl=[{path:"",component:aa,children:[{path:"date",component:Kr},{path:"decimal",component:$r},{path:"percent",component:ia},{path:"currency",component:Ur},{path:"unit",component:da},{path:"language",component:ea},{path:"country",component:Wr},{path:"list",component:ta},{path:"relative-time",component:sa},{path:"duration",component:Jr},{path:"",redirectTo:"date",pathMatch:"full"}]}],x_=Fl;export{x_ as default};
