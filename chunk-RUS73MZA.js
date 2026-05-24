import{$ as Xn,$a as Z,$b as Dt,A as jn,Aa as J,Ab as rr,B as Xi,Ba as q,Bb as or,C as Un,Ca as X,D as Be,Da as z,E as bt,Ea as V,F as K,Fa as N,Fb as ar,G as Gn,Ga as h,H as ri,Ha as l,I as oi,Ia as s,Ib as sr,J as We,Ja as ue,Jb as wt,K as Yn,Ka as ci,Kb as Ce,L as ze,La as mi,Lb as Bt,M as C,Ma as ui,Mb as lr,N as Pt,Na as dt,Nb as Qe,O as u,Oa as ct,Ob as dr,P as ai,Pa as A,Pb as St,Q as he,Qb as Ji,R as fe,Ra as de,Rb as cr,S as qn,Sa as Se,Sb as mr,T as Re,Ta as j,Tb as Ue,U as Ie,Ua as yt,Ub as ur,V as Zi,Va as je,Vb as hr,W as H,Wa as O,Wb as xe,X as Y,Xa as R,Xb as en,Y as si,Ya as $n,Yb as tn,Z as f,Za as Jn,Zb as Ke,_a as Qi,_b as ce,a as w,aa as at,ab as Ki,ac as fr,b as W,ba as li,bb as L,bc as Wt,c as me,ca as Pe,cb as Nt,cc as fi,d as ve,da as Xe,db as c,dc as pi,e as _t,ea as ye,eb as M,ec as $e,f as k,fa as P,fb as Ae,g as Pn,ga as vt,gb as b,gc as pr,h as ti,ha as d,hb as v,hc as gr,i as An,ia as st,ib as y,ic as _r,j as Le,ja as At,jb as Q,k as Vn,ka as Ze,kb as ne,l as ke,la as pe,lb as _e,m as Nn,ma as g,mb as hi,n as ii,na as _,nb as er,o as Ln,oa as $,p as Bn,pa as Vt,pb as I,q as qe,qa as Zn,qb as Te,r as Oe,ra as Qn,rb as Ct,s as Yi,sa as D,sb as Lt,t as Wn,ta as He,tb as tr,u as zn,ua as F,ub as De,v as ni,va as ie,vb as E,wa as Kn,wb as xt,xa as ge,xb as ir,y as Hn,ya as lt,yb as nr,z as qi,za as di,zb as $i}from"./chunk-7ISOCWND.js";var Mr=(()=>{class r{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||r)($(pe),$(P))};static \u0275dir=F({type:r})}return r})(),Er=(()=>{class r extends Mr{static \u0275fac=(()=>{let e;return function(i){return(e||(e=Xe(r)))(i||r)}})();static \u0275dir=F({type:r,features:[ge]})}return r})(),an=new C("");var ga={provide:an,useExisting:We(()=>be),multi:!0};function _a(){let r=$i()?$i().getUserAgent():"";return/android (\d+)/.test(r.toLowerCase())}var ba=new C(""),be=(()=>{class r extends Mr{_compositionMode;_composing=!1;constructor(e,t,i){super(e,t),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!_a())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||r)($(pe),$(P),$(ba,8))};static \u0275dir=F({type:r,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,i){t&1&&A("input",function(o){return i._handleInput(o.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(o){return i._compositionEnd(o.target.value)})},standalone:!1,features:[Q([ga]),ge]})}return r})();function sn(r){return r==null||ln(r)===0}function ln(r){return r==null?null:Array.isArray(r)||typeof r=="string"?r.length:r instanceof Set?r.size:null}var It=new C(""),dn=new C(""),va=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,mt=class{static min(n){return kr(n)}static max(n){return Ir(n)}static required(n){return Tr(n)}static requiredTrue(n){return ya(n)}static email(n){return Ca(n)}static minLength(n){return xa(n)}static maxLength(n){return wa(n)}static pattern(n){return Sa(n)}static nullValidator(n){return _i()}static compose(n){return Vr(n)}static composeAsync(n){return Nr(n)}};function kr(r){return n=>{if(n.value==null||r==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<r?{min:{min:r,actual:n.value}}:null}}function Ir(r){return n=>{if(n.value==null||r==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>r?{max:{max:r,actual:n.value}}:null}}function Tr(r){return sn(r.value)?{required:!0}:null}function ya(r){return r.value===!0?null:{required:!0}}function Ca(r){return sn(r.value)||va.test(r.value)?null:{email:!0}}function xa(r){return n=>{let e=n.value?.length??ln(n.value);return e===null||e===0?null:e<r?{minlength:{requiredLength:r,actualLength:e}}:null}}function wa(r){return n=>{let e=n.value?.length??ln(n.value);return e!==null&&e>r?{maxlength:{requiredLength:r,actualLength:e}}:null}}function Sa(r){if(!r)return _i;let n,e;return typeof r=="string"?(e="",r.charAt(0)!=="^"&&(e+="^"),e+=r,r.charAt(r.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=r.toString(),n=r),t=>{if(sn(t.value))return null;let i=t.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function _i(r){return null}function Fr(r){return r!=null}function Or(r){return Zn(r)?An(r):r}function Rr(r){let n={};return r.forEach(e=>{n=e!=null?w(w({},n),e):n}),Object.keys(n).length===0?null:n}function Pr(r,n){return n.map(e=>e(r))}function Da(r){return!r.validate}function Ar(r){return r.map(n=>Da(n)?n:e=>n.validate(e))}function Vr(r){if(!r)return null;let n=r.filter(Fr);return n.length==0?null:function(e){return Rr(Pr(e,n))}}function cn(r){return r!=null?Vr(Ar(r)):null}function Nr(r){if(!r)return null;let n=r.filter(Fr);return n.length==0?null:function(e){let t=Pr(e,n).map(Or);return ii(t).pipe(ke(Rr))}}function mn(r){return r!=null?Nr(Ar(r)):null}function br(r,n){return r===null?[n]:Array.isArray(r)?[...r,n]:[r,n]}function Lr(r){return r._rawValidators}function Br(r){return r._rawAsyncValidators}function nn(r){return r?Array.isArray(r)?r:[r]:[]}function bi(r,n){return Array.isArray(r)?r.includes(n):r===n}function vr(r,n){let e=nn(n);return nn(r).forEach(i=>{bi(e,i)||e.push(i)}),e}function yr(r,n){return nn(n).filter(e=>!bi(r,e))}var vi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=cn(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=mn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},ut=class extends vi{name;get formDirective(){return null}get path(){return null}};var zt="VALID",gi="INVALID",Mt="PENDING",Ht="DISABLED",nt=class{},yi=class extends nt{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Ut=class extends nt{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Gt=class extends nt{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Et=class extends nt{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Ci=class extends nt{source;constructor(n){super(),this.source=n}},kt=class extends nt{source;constructor(n){super(),this.source=n}};function Wr(r){return(Mi(r)?r.validators:r)||null}function Ma(r){return Array.isArray(r)?cn(r):r||null}function zr(r,n){return(Mi(n)?n.asyncValidators:r)||null}function Ea(r){return Array.isArray(r)?mn(r):r||null}function Mi(r){return r!=null&&!Array.isArray(r)&&typeof r=="object"}function ka(r,n,e){let t=r.controls;if(!(n?Object.keys(t):t).length)throw new oi(1e3,"");if(!t[e])throw new oi(1001,"")}function Ia(r,n,e){r._forEachChild((t,i)=>{if(e[i]===void 0)throw new oi(-1002,"")})}var xi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=f(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Te(this.statusReactive)}set status(n){Te(()=>this.statusReactive.set(n))}_status=I(()=>this.statusReactive());statusReactive=f(void 0);get valid(){return this.status===zt}get invalid(){return this.status===gi}get pending(){return this.status===Mt}get disabled(){return this.status===Ht}get enabled(){return this.status!==Ht}errors;get pristine(){return Te(this.pristineReactive)}set pristine(n){Te(()=>this.pristineReactive.set(n))}_pristine=I(()=>this.pristineReactive());pristineReactive=f(!0);get dirty(){return!this.pristine}get touched(){return Te(this.touchedReactive)}set touched(n){Te(()=>this.touchedReactive.set(n))}_touched=I(()=>this.touchedReactive());touchedReactive=f(!1);get untouched(){return!this.touched}_events=new k;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(vr(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(vr(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(yr(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(yr(n,this._rawAsyncValidators))}hasValidator(n){return bi(this._rawValidators,n)}hasAsyncValidator(n){return bi(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(W(w({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Gt(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new Gt(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(W(w({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Ut(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new Ut(!0,t))}markAsPending(n={}){this.status=Mt;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Et(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(W(w({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Ht,this.errors=null,this._forEachChild(i=>{i.disable(W(w({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new yi(this.value,t)),this._events.next(new Et(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(W(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=zt,this._forEachChild(t=>{t.enable(W(w({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(W(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===zt||this.status===Mt)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new yi(this.value,e)),this._events.next(new Et(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(W(w({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ht:zt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Mt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=Or(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,i)=>t&&t._find(i),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new Et(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new H,this.statusChanges=new H}_calculateStatus(){return this._allControlsDisabled()?Ht:this.errors?gi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Mt)?Mt:this._anyControlsHaveStatus(gi)?gi:zt}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),i=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),i&&this._events.next(new Ut(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Gt(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Mi(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Ma(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Ea(this._rawAsyncValidators)}_updateHasRequiredValidator(){Te(()=>this._hasRequired.set(this.hasValidator(mt.required)))}};function Ta(r){return r.tagName==="INPUT"||r.tagName==="SELECT"||r.tagName==="TEXTAREA"}function Fa(r,n,e,t){switch(e){case"name":r.setAttribute(n,e,t);break;case"disabled":case"readonly":case"required":t?r.setAttribute(n,e,""):r.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?r.setAttribute(n,e,t.toString()):r.removeAttribute(n,e);break}}var rn=class{kind;context;control;message;constructor({kind:n,context:e,control:t}){this.kind=n,this.context=e,this.control=t}};function Hr(r){return typeof r=="number"?r:parseFloat(r)}var un=(()=>{class r{_validator=_i;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):_i,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,features:[Pe]})}return r})(),Oa={provide:It,useExisting:We(()=>Je),multi:!0},Je=(()=>{class r extends un{max;inputName="max";normalizeInput=e=>Hr(e);createValidator=e=>Ir(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=Xe(r)))(i||r)}})();static \u0275dir=F({type:r,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(t,i){t&2&&J("max",i._enabled?i.max:null)},inputs:{max:"max"},standalone:!1,features:[Q([Oa]),ge]})}return r})(),Ra={provide:It,useExisting:We(()=>et),multi:!0},et=(()=>{class r extends un{min;inputName="min";normalizeInput=e=>Hr(e);createValidator=e=>kr(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=Xe(r)))(i||r)}})();static \u0275dir=F({type:r,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,i){t&2&&J("min",i._enabled?i.min:null)},inputs:{min:"min"},standalone:!1,features:[Q([Ra]),ge]})}return r})(),Pa={provide:It,useExisting:We(()=>jr),multi:!0};var jr=(()=>{class r extends un{required;inputName="required";normalizeInput=E;createValidator=e=>Tr;enabled(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Xe(r)))(i||r)}})();static \u0275dir=F({type:r,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,i){t&2&&J("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Q([Pa]),ge]})}return r})();var Aa=new C(""),Ei=new C("",{factory:()=>hn}),hn="always";function Va(r,n){return[...n.path,r]}function Cr(r,n,e=hn){fn(r,n),n.valueAccessor.writeValue(r.value),(r.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(r.disabled),La(r,n),Wa(r,n),Ba(r,n),Na(r,n)}function xr(r,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),Si(r,n),r&&(n._invokeOnDestroyCallbacks(),r._registerOnCollectionChange(()=>{}))}function wi(r,n){r.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Na(r,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};r.registerOnDisabledChange(e),n._registerOnDestroy(()=>{r._unregisterOnDisabledChange(e)})}}function fn(r,n){let e=Lr(r);n.validator!==null?r.setValidators(br(e,n.validator)):typeof e=="function"&&r.setValidators([e]);let t=Br(r);n.asyncValidator!==null?r.setAsyncValidators(br(t,n.asyncValidator)):typeof t=="function"&&r.setAsyncValidators([t]);let i=()=>r.updateValueAndValidity();wi(n._rawValidators,i),wi(n._rawAsyncValidators,i)}function Si(r,n){let e=!1;if(r!==null){if(n.validator!==null){let i=Lr(r);if(Array.isArray(i)&&i.length>0){let a=i.filter(o=>o!==n.validator);a.length!==i.length&&(e=!0,r.setValidators(a))}}if(n.asyncValidator!==null){let i=Br(r);if(Array.isArray(i)&&i.length>0){let a=i.filter(o=>o!==n.asyncValidator);a.length!==i.length&&(e=!0,r.setAsyncValidators(a))}}}let t=()=>{};return wi(n._rawValidators,t),wi(n._rawAsyncValidators,t),e}function La(r,n){n.valueAccessor.registerOnChange(e=>{r._pendingValue=e,r._pendingChange=!0,r._pendingDirty=!0,r.updateOn==="change"&&Ur(r,n)})}function Ba(r,n){n.valueAccessor.registerOnTouched(()=>{r._pendingTouched=!0,r.updateOn==="blur"&&r._pendingChange&&Ur(r,n),r.updateOn!=="submit"&&r.markAsTouched()})}function Ur(r,n){r._pendingDirty&&r.markAsDirty(),r.setValue(r._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(r._pendingValue),r._pendingChange=!1}function Wa(r,n){let e=(t,i)=>{n.valueAccessor.writeValue(t),i&&n.viewToModelUpdate(t)};r.registerOnChange(e),n._registerOnDestroy(()=>{r._unregisterOnChange(e)})}function Gr(r,n){r==null,fn(r,n)}function za(r,n){return Si(r,n)}function Ha(r,n){if(!r.hasOwnProperty("model"))return!1;let e=r.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function ja(r){return Object.getPrototypeOf(r.constructor)===Er}function Yr(r,n){r._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Ua(r,n){if(!n)return null;Array.isArray(n);let e,t,i;return n.forEach(a=>{a.constructor===be?e=a:ja(a)?t=a:i=a}),i||t||e||null}function Ga(r,n){let e=r.indexOf(n);e>-1&&r.splice(e,1)}var Ya={provide:Aa,useFactory:()=>{let r=u(Ge,{self:!0});return{setParseErrors:n=>{r.setParseErrorSource(n)},set onReset(n){r.onReset=n}}}},Ge=class extends vi{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof kt&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Ua(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,t){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(Zi)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(De);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new ve,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof kt&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(i=>{this.control?.setValue(i,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(i)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Ta(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof jr))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let t=this.control,i=this.customControlBindings;Object.is(i.value,t.value)||(i.value=t.value,n.setCustomControlModelInput(t.value)),this.bindControlProperty(n,i,"touched",t.touched),this.bindControlProperty(n,i,"dirty",t.dirty),this.bindControlProperty(n,i,"valid",t.valid),this.bindControlProperty(n,i,"invalid",t.invalid),this.bindControlProperty(n,i,"pending",t.pending),this.bindControlProperty(n,i,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(n,i,"required",this.isRequired);let a=t.errors;if(i.errors!==a){i.errors=a;let o=this._convertErrors(a);n.setInputOnDirectives("errors",o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,t,i){if(e[t]===i)return;e[t]=i;let a=n.setInputOnDirectives(t,i);this.isNativeFormElement&&!a&&(t==="disabled"||t==="required")&&this.renderer&&Fa(this.renderer,n.nativeElement,t,i)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([t,i])=>new rn({context:i,kind:t,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,t=I(()=>{let i=n();return i.length===0?null:i.reduce((a,o)=>(a[o.kind]=o,a),{})});this.parseErrorsValidator=(()=>e).bind(this),at(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},on=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var re=(()=>{class r extends on{constructor(e){super(e)}static \u0275fac=function(t){return new(t||r)($(Ge,2))};static \u0275dir=F({type:r,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,i){t&2&&L("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[ge]})}return r})();var Di=class extends xi{constructor(n,e,t){super(Wr(e),zr(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){Te(()=>{Ia(this,!0,n),Object.keys(n).forEach(t=>{ka(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let i=this.controls[t];i&&i.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,i)=>{t.reset(n?n[i]:null,W(w({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new kt(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,i)=>((t.enabled||this.disabled)&&(e[i]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((i,a)=>{t=e(t,i,a)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var qa={provide:ut,useExisting:We(()=>Yt)},jt=Promise.resolve(),Yt=(()=>{class r extends ut{callSetDisabledState;get submitted(){return Te(this.submittedReactive)}_submitted=I(()=>this.submittedReactive());submittedReactive=f(!1);_directives=new Set;form;ngSubmit=new H;options;constructor(e,t,i){super(),this.callSetDisabledState=i,this.form=new Di({},cn(e),mn(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){jt.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){jt.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){jt.then(()=>{let t=this._findContainer(e.path),i=new Di({});Gr(i,e),t.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){jt.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){jt.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Yr(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ci(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||r)($(It,10),$(dn,10),$(Ei,8))};static \u0275dir=F({type:r,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,i){t&1&&A("submit",function(o){return i.onSubmit(o)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Q([qa]),ge]})}return r})();function wr(r,n){let e=r.indexOf(n);e>-1&&r.splice(e,1)}function Sr(r){return typeof r=="object"&&r!==null&&Object.keys(r).length===2&&"value"in r&&"disabled"in r}var qr=class extends xi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(Wr(e),zr(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Mi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Sr(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){Te(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new kt(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){wr(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){wr(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Sr(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Xa=r=>r instanceof qr;var Za={provide:Ge,useExisting:We(()=>ee)},Dr=Promise.resolve(),ee=(()=>{class r extends Ge{_changeDetectorRef;callSetDisabledState;control=new qr;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new H;constructor(e,t,i,a,o,m,p,x){super(p,x,a),this._changeDetectorRef=o,this.callSetDisabledState=m,this._parent=e,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Ha(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Cr(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Cr(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Dr.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,i=t!==0&&E(t);Dr.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Va(e,this._parent):[e]}static \u0275fac=function(t){return new(t||r)($(ut,9),$(It,10),$(dn,10),$(an,10),$(De,8),$(Ei,8),$(Re,8),$(pe,8))};static \u0275dir=F({type:r,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Q([Za,Ya]),ge,Pe,Kn(null)]})}return r})();var Qa={provide:an,useExisting:We(()=>Ne),multi:!0},Ne=(()=>{class r extends Er{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Xe(r)))(i||r)}})();static \u0275dir=F({type:r,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(t,i){t&1&&A("input",function(o){return i.onChange(o.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[Q([Qa]),ge]})}return r})();var Ka=(()=>{class r extends ut{callSetDisabledState;get submitted(){return Te(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=I(()=>this._submittedReactive());_submittedReactive=f(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Si(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){xr(e.control||null,e,!1),Ga(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Yr(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ci(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,i=this.form.get(e.path);t!==i&&(xr(t||null,e),Xa(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Gr(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&za(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){fn(this.form,this),this._oldForm&&Si(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||r)($(It,10),$(dn,10),$(Ei,8))};static \u0275dir=F({type:r,features:[ge,Pe]})}return r})();var $a={provide:ut,useExisting:We(()=>qt)},qt=(()=>{class r extends Ka{form=null;ngSubmit=new H;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=Xe(r)))(i||r)}})();static \u0275dir=F({type:r,selectors:[["","formGroup",""]],hostBindings:function(t,i){t&1&&A("submit",function(o){return i.onSubmit(o)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Q([$a]),ge]})}return r})();var Ja=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=He({type:r});static \u0275inj=ze({})}return r})();var oe=(()=>{class r{static withConfig(e){return{ngModule:r,providers:[{provide:Ei,useValue:e.callSetDisabledState??hn}]}}static \u0275fac=function(t){return new(t||r)};static \u0275mod=He({type:r});static \u0275inj=ze({imports:[Ja]})}return r})();var pn=class{_box;_destroyed=new k;_resizeSubject=new k;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new _t(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Oe(e=>e.some(t=>t.target===n)),Xi({bufferSize:1,refCount:!0}),K(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ki=(()=>{class r{_cleanupErrorListener;_observers=new Map;_ngZone=u(Y);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new pn(i)),this._observers.get(i).observe(e)}static \u0275fac=function(t){return new(t||r)};static \u0275prov=ye({token:r,factory:r.\u0275fac})}return r})();var es=["notch"],ts=["*"],Xr=["iconPrefixContainer"],Zr=["textPrefixContainer"],Qr=["iconSuffixContainer"],Kr=["textSuffixContainer"],is=["textField"],ns=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],rs=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function os(r,n){r&1&&ue(0,"span",21)}function as(r,n){if(r&1&&(l(0,"label",20),j(1,1),q(2,os,1,0,"span",21),s()),r&2){let e=de(2);h("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),J("for",e._control.disableAutomaticLabeling?null:e._control.id),d(2),X(!e.hideRequiredMarker&&e._control.required?2:-1)}}function ss(r,n){if(r&1&&q(0,as,3,5,"label",20),r&2){let e=de();X(e._hasFloatingLabel()?0:-1)}}function ls(r,n){r&1&&ue(0,"div",7)}function ds(r,n){}function cs(r,n){if(r&1&&lt(0,ds,0,0,"ng-template",13),r&2){de(2);let e=Z(1);h("ngTemplateOutlet",e)}}function ms(r,n){if(r&1&&(l(0,"div",9),q(1,cs,1,1,null,13),s()),r&2){let e=de();h("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),d(),X(e._forceDisplayInfixLabel()?-1:1)}}function us(r,n){r&1&&(l(0,"div",10,2),j(2,2),s())}function hs(r,n){r&1&&(l(0,"div",11,3),j(2,3),s())}function fs(r,n){}function ps(r,n){if(r&1&&lt(0,fs,0,0,"ng-template",13),r&2){de();let e=Z(1);h("ngTemplateOutlet",e)}}function gs(r,n){r&1&&(l(0,"div",14,4),j(2,4),s())}function _s(r,n){r&1&&(l(0,"div",15,5),j(2,5),s())}function bs(r,n){r&1&&ue(0,"div",16)}function vs(r,n){r&1&&(l(0,"div",18),j(1,6),s())}function ys(r,n){if(r&1&&(l(0,"mat-hint",22),c(1),s()),r&2){let e=de(2);h("id",e._hintLabelId),d(),M(e.hintLabel)}}function Cs(r,n){if(r&1&&(l(0,"div",19),q(1,ys,2,2,"mat-hint",22),j(2,7),ue(3,"div",23),j(4,8),s()),r&2){let e=de();d(),X(e.hintLabel?1:-1)}}var U=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,selectors:[["mat-label"]]})}return r})(),_n=new C("MatError"),tt=(()=>{class r{id=u(xe).getId("mat-mdc-error-");static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,i){t&2&&ct("id",i.id)},inputs:{id:"id"},features:[Q([{provide:_n,useExisting:r}])]})}return r})(),gn=(()=>{class r{align="start";id=u(xe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,i){t&2&&(ct("id",i.id),J("align",null),L("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return r})(),ro=new C("MatPrefix");var bn=new C("MatSuffix"),Xt=(()=>{class r{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[Q([{provide:bn,useExisting:r}])]})}return r})(),oo=new C("FloatingLabelParent"),$r=(()=>{class r{_elementRef=u(P);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(ki);_ngZone=u(Y);_parent=u(oo);_resizeSubscription=new ve;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return xs(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,i){t&2&&L("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return r})();function xs(r){let n=r;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Jr="mdc-line-ripple--active",Ii="mdc-line-ripple--deactivating",eo=(()=>{class r{_elementRef=u(P);_cleanupTransitionEnd;constructor(){let e=u(Y),t=u(pe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ii),e.add(Jr)}deactivate(){this._elementRef.nativeElement.classList.add(Ii)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(Ii);e.propertyName==="opacity"&&i&&t.remove(Jr,Ii)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return r})(),to=(()=>{class r{_elementRef=u(P);_ngZone=u(Y);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,i){if(t&1&&je(es,5),t&2){let a;O(a=R())&&(i._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,i){t&2&&L("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:ts,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,i){t&1&&(Se(),ui(0,"div",1),ci(1,"div",2,0),j(3),mi(),ui(4,"div",3))},encapsulation:2})}return r})(),Tt=(()=>{class r{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r})}return r})();var Ft=new C("MatFormField"),Ti=new C("MAT_FORM_FIELD_DEFAULT_OPTIONS"),io="fill",ws="auto",no="fixed",Ss="translateY(-50%)",te=(()=>{class r{_elementRef=u(P);_changeDetectorRef=u(De);_platform=u(Ce);_idGenerator=u(xe);_ngZone=u(Y);_defaults=u(Ti,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Lt("iconPrefixContainer");_textPrefixContainerSignal=Lt("textPrefixContainer");_iconSuffixContainerSignal=Lt("iconSuffixContainer");_textSuffixContainerSignal=Lt("textSuffixContainer");_prefixSuffixContainers=I(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=tr(U);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Dt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ws}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||io;this._appearanceSignal.set(t)}_appearanceSignal=f(io);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||no}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||no}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new k;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ke();constructor(){let e=this._defaults,t=u($e);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),at(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=I(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Be([void 0,void 0]),ke(()=>[t.errorState,t.userAriaDescribedBy]),qi(),Oe(([[a,o],[m,p]])=>a!==m||o!==p)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(K(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),qe(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ir({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=I(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(m=>m.align==="start"):null,o=this._hintChildren?this._hintChildren.find(m=>m.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let t=this._control.describedByIds,i;if(t){let a=this._describedByIds||e;i=e.concat(t.filter(o=>o&&!a.includes(o)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,m=t?.getBoundingClientRect().width??0,p=i?.getBoundingClientRect().width??0,x=a?.getBoundingClientRect().width??0,S=this._currentDirection==="rtl"?"-1":"1",B=`${o+m}px`,Ve=`calc(${S} * (${B} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Fe=`var(--mat-mdc-form-field-label-transform, ${Ss} translateX(${Ve}))`,gt=o+m+p+x;return[Fe,gt]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["mat-form-field"]],contentQueries:function(t,i,a){if(t&1&&($n(a,i._labelChild,U,5),yt(a,Tt,5)(a,ro,5)(a,bn,5)(a,_n,5)(a,gn,5)),t&2){Qi();let o;O(o=R())&&(i._formFieldControl=o.first),O(o=R())&&(i._prefixChildren=o),O(o=R())&&(i._suffixChildren=o),O(o=R())&&(i._errorChildren=o),O(o=R())&&(i._hintChildren=o)}},viewQuery:function(t,i){if(t&1&&(Jn(i._iconPrefixContainerSignal,Xr,5)(i._textPrefixContainerSignal,Zr,5)(i._iconSuffixContainerSignal,Qr,5)(i._textSuffixContainerSignal,Kr,5),je(is,5)(Xr,5)(Zr,5)(Qr,5)(Kr,5)($r,5)(to,5)(eo,5)),t&2){Qi(4);let a;O(a=R())&&(i._textField=a.first),O(a=R())&&(i._iconPrefixContainer=a.first),O(a=R())&&(i._textPrefixContainer=a.first),O(a=R())&&(i._iconSuffixContainer=a.first),O(a=R())&&(i._textSuffixContainer=a.first),O(a=R())&&(i._floatingLabel=a.first),O(a=R())&&(i._notchedOutline=a.first),O(a=R())&&(i._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,i){t&2&&L("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Q([{provide:Ft,useExisting:r},{provide:oo,useExisting:r}])],ngContentSelectors:rs,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,i){if(t&1&&(Se(ns),lt(0,ss,1,1,"ng-template",null,0,er),l(2,"div",6,1),A("click",function(o){return i._control.onContainerClick(o)}),q(4,ls,1,0,"div",7),l(5,"div",8),q(6,ms,2,2,"div",9),q(7,us,3,0,"div",10),q(8,hs,3,0,"div",11),l(9,"div",12),q(10,ps,1,1,null,13),j(11),s(),q(12,gs,3,0,"div",14),q(13,_s,3,0,"div",15),s(),q(14,bs,1,0,"div",16),s(),l(15,"div",17),q(16,vs,2,0,"div",18)(17,Cs,5,1,"div",19),s()),t&2){let a;d(2),L("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),d(2),X(!i._hasOutline()&&!i._control.disabled?4:-1),d(2),X(i._hasOutline()?6:-1),d(),X(i._hasIconPrefix?7:-1),d(),X(i._hasTextPrefix?8:-1),d(2),X(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),d(2),X(i._hasTextSuffix?12:-1),d(),X(i._hasIconSuffix?13:-1),d(),X(i._hasOutline()?-1:14),d(),L("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let o=i._getSubscriptMessageType();d(),X((a=o)==="error"?16:a==="hint"?17:-1)}},dependencies:[$r,to,or,eo,gn],styles:[`.mdc-text-field {
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
`],encapsulation:2})}return r})();var Zt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new k;constructor(n=!1,e,t=!0,i){this._multiple=n,this._emitChanges=t,this.compareWith=i,e&&e.length&&(n?e.forEach(a=>this._markSelected(a)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(a=>this._getConcreteValue(a)));n.forEach(a=>this._markSelected(a)),e.filter(a=>!t.has(this._getConcreteValue(a,t))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Ms=20,ao=(()=>{class r{_ngZone=u(Y);_platform=u(Ce);_renderer=u(Ze).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new k;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Ms){return this._platform.isBrowser?new _t(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(Yi(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Le()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Oe(a=>!a||i.indexOf(a)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,a)=>{this._targetContainsElement(a,e)&&t.push(a)}),t}_targetContainsElement(e,t){let i=Bt(t),a=e.getElementRef().nativeElement;do if(i==a)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(t){return new(t||r)};static \u0275prov=ye({token:r,factory:r.\u0275fac})}return r})();var Es=20,ht=(()=>{class r{_platform=u(Ce);_listeners;_viewportSize=null;_change=new k;_document=u(Ie);constructor(){let e=u(Y),t=u(Ze).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=a=>this._change.next(a);this._listeners=[t.listen("window","resize",i),t.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,a=i.getBoundingClientRect(),o=-a.top||e.body?.scrollTop||t.scrollY||i.scrollTop||0,m=-a.left||e.body?.scrollLeft||t.scrollX||i.scrollLeft||0;return{top:o,left:m}}change(e=Es){return e>0?this._change.pipe(Yi(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||r)};static \u0275prov=ye({token:r,factory:r.\u0275fac})}return r})();var Qt=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},vn=class extends Qt{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,i,a,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=i,this.bindings=a||null,this.directives=o||null}},Kt=class extends Qt{templateRef;viewContainerRef;context;injector;constructor(n,e,t,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},yn=class extends Qt{element;constructor(n){super(),this.element=n instanceof P?n.nativeElement:n}},Cn=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof vn)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Kt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof yn)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Fi=class extends Cn{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,i=t.get(Qn,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,i=n.injector||this._defaultInjector||Re.NULL,a=i.get(ai,t.injector);e=nr(n.component,{elementInjector:i,environmentInjector:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(i=>this.outletElement.appendChild(i)),t.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(t);i!==-1&&e.remove(i)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Oi=class{enable(){}disable(){}attach(){}};function xn(r,n){return n.some(e=>{let t=r.bottom<e.top,i=r.top>e.bottom,a=r.right<e.left,o=r.left>e.right;return t||i||a||o})}function so(r,n){return n.some(e=>{let t=r.top<e.top,i=r.bottom>e.bottom,a=r.left<e.left,o=r.right>e.right;return t||i||a||o})}function Ni(r,n){return new Ri(r.get(ao),r.get(ht),r.get(Y),n)}var Ri=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:i}=this._viewportRuler.getViewportSize();xn(e,[{width:t,height:i,bottom:i,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var $t=class{positionStrategy;scrollStrategy=new Oi;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var Pi=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var fo=(()=>{class r{_attachedOverlays=[];_document=u(Ie);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||r)};static \u0275prov=ye({token:r,factory:r.\u0275fac})}return r})(),po=(()=>{class r extends fo{_ngZone=u(Y);_renderer=u(Ze).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let i=t.length-1;i>-1;i--){let a=t[i];if(this.canReceiveEvent(a,e,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||r)};static \u0275prov=ye({token:r,factory:r.\u0275fac})}return r})(),go=(()=>{class r extends fo{_platform=u(Ce);_ngZone=u(Y);_renderer=u(Ze).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,i={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(t,"pointerdown",this._pointerDownListener,i),a.listen(t,"click",this._clickListener,i),a.listen(t,"auxclick",this._clickListener,i),a.listen(t,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=wt(e)};_clickListener=e=>{let t=wt(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let o=a.length-1;o>-1;o--){let m=a[o],p=m._outsidePointerEvents;if(!(!m.hasAttached()||!this.canReceiveEvent(m,e,p))){if(lo(m.overlayElement,t)||lo(m.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>p.next(e)):p.next(e)}}};static \u0275fac=function(t){return new(t||r)};static \u0275prov=ye({token:r,factory:r.\u0275fac})}return r})();function lo(r,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===r)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var _o=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return r})(),bo=(()=>{class r{_platform=u(Ce);_containerElement;_document=u(Ie);_styleLoader=u(Qe);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||en()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let a=0;a<i.length;a++)i[a].remove()}let t=this._document.createElement("div");t.classList.add(e),en()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(_o)}static \u0275fac=function(t){return new(t||r)};static \u0275prov=ye({token:r,factory:r.\u0275fac})}return r})(),wn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,i){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Sn(r){return r&&r.nodeType===1}var Ai=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new k;_attachments=new k;_detachments=new k;_positionStrategy;_scrollStrategy;_locationChanges=ve.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new k;_outsidePointerEvents=new k;_afterNextRenderRef;constructor(n,e,t,i,a,o,m,p,x,S=!1,B,we){this._portalOutlet=n,this._host=e,this._pane=t,this._config=i,this._ngZone=a,this._keyboardDispatcher=o,this._document=m,this._location=p,this._outsideClickDispatcher=x,this._animationsDisabled=S,this._injector=B,this._renderer=we,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=st(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=w(w({},this._config),n),this._updateElementSize()}setDirection(n){this._config=W(w({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ce(this._config.width),n.height=ce(this._config.height),n.minWidth=ce(this._config.minWidth),n.minHeight=ce(this._config.minHeight),n.maxWidth=ce(this._config.maxWidth),n.maxHeight=ce(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Sn(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new wn(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let i=Ji(e||[]).filter(a=>!!a);i.length&&(t?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=st(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},co="cdk-overlay-connected-position-bounding-box",ks=/([A-Za-z%]+)$/;function vo(r,n){return new Vi(n,r.get(ht),r.get(Ie),r.get(Ce),r.get(bo))}var Vi=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new k;_resizeSubscription=ve.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,i,a){this._viewportRuler=e,this._document=t,this._platform=i,this._overlayContainer=a,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(co),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,i=this._containerRect,a=[],o;for(let m of this._preferredPositions){let p=this._getOriginPoint(n,i,m),x=this._getOverlayPoint(p,e,m),S=this._getOverlayFit(x,e,t,m);if(S.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(m,p);return}if(this._canFitWithFlexibleDimensions(S,x,t)){a.push({position:m,origin:p,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(p,m)});continue}(!o||o.overlayFit.visibleArea<S.visibleArea)&&(o={overlayFit:S,overlayPoint:x,originPoint:p,position:m,overlayRect:e})}if(a.length){let m=null,p=-1;for(let x of a){let S=x.boundingBoxRect.width*x.boundingBoxRect.height*(x.position.weight||1);S>p&&(p=S,m=x)}this._isPushed=!1,this._applyPosition(m.position,m.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ft(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(co),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:Sn(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let i;if(t.originX=="center")i=n.left+n.width/2;else{let o=this._isRtl()?n.right:n.left,m=this._isRtl()?n.left:n.right;i=t.originX=="start"?o:m}e.left<0&&(i-=e.left);let a;return t.originY=="center"?a=n.top+n.height/2:a=t.originY=="top"?n.top:n.bottom,e.top<0&&(a-=e.top),{x:i,y:a}}_getOverlayPoint(n,e,t){let i;t.overlayX=="center"?i=-e.width/2:t.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let a;return t.overlayY=="center"?a=-e.height/2:a=t.overlayY=="top"?0:-e.height,{x:n.x+i,y:n.y+a}}_getOverlayFit(n,e,t,i){let a=uo(e),{x:o,y:m}=n,p=this._getOffset(i,"x"),x=this._getOffset(i,"y");p&&(o+=p),x&&(m+=x);let S=0-o,B=o+a.width-t.width,we=0-m,Ve=m+a.height-t.height,Fe=this._subtractOverflows(a.width,S,B),gt=this._subtractOverflows(a.height,we,Ve),Rn=Fe*gt;return{visibleArea:Rn,isCompletelyWithinViewport:a.width*a.height===Rn,fitsInViewportVertically:gt===a.height,fitsInViewportHorizontally:Fe==a.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let i=t.bottom-e.y,a=t.right-e.x,o=mo(this._overlayRef.getConfig().minHeight),m=mo(this._overlayRef.getConfig().minWidth),p=n.fitsInViewportVertically||o!=null&&o<=i,x=n.fitsInViewportHorizontally||m!=null&&m<=a;return p&&x}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=uo(e),a=this._viewportRect,o=Math.max(n.x+i.width-a.width,0),m=Math.max(n.y+i.height-a.height,0),p=Math.max(a.top-t.top-n.y,0),x=Math.max(a.left-t.left-n.x,0),S=0,B=0;return i.width<=a.width?S=x||-o:S=n.x<this._getViewportMarginStart()?a.left-t.left-n.x:0,i.height<=a.height?B=p||-m:B=n.y<this._getViewportMarginTop()?a.top-t.top-n.y:0,this._previousPushAmount={x:S,y:B},{x:n.x+S,y:n.y+B}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Is(this._lastScrollVisibility,t)){let i=new Pi(n,t);this._positionChanges.next(i)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,i=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let a=0;a<e.length;a++)e[a].style.transformOrigin=`${t} ${i}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,i=this._isRtl(),a,o,m;if(e.overlayY==="top")o=n.y,a=t.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")m=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=t.height-m+this._getViewportMarginTop();else{let Ve=Math.min(t.bottom-n.y+t.top,n.y),Fe=this._lastBoundingBoxSize.height;a=Ve*2,o=n.y-Ve,a>Fe&&!this._isInitialRender&&!this._growAfterOpen&&(o=n.y-Fe/2)}let p=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,x=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,S,B,we;if(x)we=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),S=n.x-this._getViewportMarginStart();else if(p)B=n.x,S=t.right-n.x-this._getViewportMarginEnd();else{let Ve=Math.min(t.right-n.x+t.left,n.x),Fe=this._lastBoundingBoxSize.width;S=Ve*2,B=n.x-Ve,S>Fe&&!this._isInitialRender&&!this._growAfterOpen&&(B=n.x-Fe/2)}return{top:o,left:B,bottom:m,right:we,width:S,height:a}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;i.width=ce(t.width),i.height=ce(t.height),i.top=ce(t.top)||"auto",i.bottom=ce(t.bottom)||"auto",i.left=ce(t.left)||"auto",i.right=ce(t.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",a&&(i.maxHeight=ce(a)),o&&(i.maxWidth=ce(o))}this._lastBoundingBoxSize=t,ft(this._boundingBox.style,i)}_resetBoundingBoxStyles(){ft(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ft(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},i=this._hasExactPosition(),a=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(i){let S=this._viewportRuler.getViewportScrollPosition();ft(t,this._getExactOverlayY(e,n,S)),ft(t,this._getExactOverlayX(e,n,S))}else t.position="static";let m="",p=this._getOffset(e,"x"),x=this._getOffset(e,"y");p&&(m+=`translateX(${p}px) `),x&&(m+=`translateY(${x}px)`),t.transform=m.trim(),o.maxHeight&&(i?t.maxHeight=ce(o.maxHeight):a&&(t.maxHeight="")),o.maxWidth&&(i?t.maxWidth=ce(o.maxWidth):a&&(t.maxWidth="")),ft(this._pane.style,t)}_getExactOverlayY(n,e,t){let i={top:"",bottom:""},a=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t)),n.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;i.bottom=`${o-(a.y+this._overlayRect.height)}px`}else i.top=ce(a.y);return i}_getExactOverlayX(n,e,t){let i={left:"",right:""},a=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,t));let o;if(this._isRtl()?o=n.overlayX==="end"?"left":"right":o=n.overlayX==="end"?"right":"left",o==="right"){let m=this._document.documentElement.clientWidth;i.right=`${m-(a.x+this._overlayRect.width)}px`}else i.left=ce(a.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:so(n,t),isOriginOutsideView:xn(n,t),isOverlayClipped:so(e,t),isOverlayOutsideView:xn(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,i)=>t-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Ji(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof P)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function ft(r,n){for(let e in n)n.hasOwnProperty(e)&&(r[e]=n[e]);return r}function mo(r){if(typeof r!="number"&&r!=null){let[n,e]=r.split(ks);return!e||e==="px"?parseFloat(n):null}return r||null}function uo(r){return{top:Math.floor(r.top),right:Math.floor(r.right),bottom:Math.floor(r.bottom),left:Math.floor(r.left),width:Math.floor(r.width),height:Math.floor(r.height)}}function Is(r,n){return r===n?!0:r.isOriginClipped===n.isOriginClipped&&r.isOriginOutsideView===n.isOriginOutsideView&&r.isOverlayClipped===n.isOverlayClipped&&r.isOverlayOutsideView===n.isOverlayOutsideView}var Jt=new C("OVERLAY_DEFAULT_CONFIG");function yo(r,n){r.get(Qe).load(_o);let e=r.get(bo),t=r.get(Ie),i=r.get(xe),a=r.get(di),o=r.get($e),m=r.get(pe,null,{optional:!0})||r.get(Ze).createRenderer(null,null),p=new $t(n),x=r.get(Jt,null,{optional:!0})?.usePopover??!0;p.direction=p.direction||o.value,"showPopover"in t.body?p.usePopover=n?.usePopover??x:p.usePopover=!1;let S=t.createElement("div"),B=t.createElement("div");S.id=i.getId("cdk-overlay-"),S.classList.add("cdk-overlay-pane"),B.appendChild(S),p.usePopover&&(B.setAttribute("popover","manual"),B.classList.add("cdk-overlay-popover"));let we=p.usePopover?p.positionStrategy?.getPopoverInsertionPoint?.():null;return Sn(we)?we.after(B):we?.type==="parent"?we.element.appendChild(B):e.getContainerElement().appendChild(B),new Ai(new Fi(S,a,r),B,S,p,r.get(Y),r.get(po),t,r.get(rr),r.get(go),n?.disableAnimations??r.get(Xn,null,{optional:!0})==="NoopAnimations",r.get(ai),m)}var Ts=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Fs=new C("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let r=u(Re);return()=>Ni(r)}}),Ot=(()=>{class r{elementRef=u(P);static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return r})(),Co=new C("cdk-connected-overlay-default-config"),Li=(()=>{class r{_dir=u($e,{optional:!0});_injector=u(Re);_overlayRef;_templatePortal;_backdropSubscription=ve.EMPTY;_attachSubscription=ve.EMPTY;_detachSubscription=ve.EMPTY;_positionSubscription=ve.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u(Fs);_ngZone=u(Y);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new H;positionChange=new H;attach=new H;detach=new H;overlayKeydown=new H;overlayOutsideClick=new H;constructor(){let e=u(At),t=u(Vt),i=u(Co,{optional:!0}),a=u(Jt,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new Kt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Ts);let e=this._overlayRef=yo(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ue(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let i=this._getOriginElement(),a=wt(t);(!i||i!==a&&!i.contains(a))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new $t({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=vo(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ot?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ot?this.origin.elementRef.nativeElement:this.origin instanceof P?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Gn(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",E],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",E],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",E],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",E],push:[2,"cdkConnectedOverlayPush","push",E],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",E],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",E],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Pe]})}return r})();var xo=(()=>{class r{_animationsDisabled=Ke();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&L("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2})}return r})();var Rs=["text"],Ps=[[["mat-icon"]],"*"],As=["mat-icon","*"];function Vs(r,n){if(r&1&&ue(0,"mat-pseudo-checkbox",1),r&2){let e=de();h("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Ns(r,n){if(r&1&&ue(0,"mat-pseudo-checkbox",3),r&2){let e=de();h("disabled",e.disabled)}}function Ls(r,n){if(r&1&&(l(0,"span",4),c(1),s()),r&2){let e=de();d(),Ae("(",e.group.label,")")}}var Wi=new C("MAT_OPTION_PARENT_COMPONENT"),zi=new C("MatOptgroup");var Bi=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},G=(()=>{class r{_element=u(P);_changeDetectorRef=u(De);_parent=u(Wi,{optional:!0});group=u(zi,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(xe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=f(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new H;_text;_stateChanges=new k;constructor(){let e=u(Qe);e.load(fi),e.load(dr),this._signalDisableRipple=!!this._parent&&li(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ue(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Bi(this,e))}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&je(Rs,7),t&2){let a;O(a=R())&&(i._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&A("click",function(){return i._selectViaInteraction()})("keydown",function(o){return i._handleKeydown(o)}),t&2&&(ct("id",i.id),J("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),L("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",E]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:As,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(Se(Ps),q(0,Vs,1,2,"mat-pseudo-checkbox",1),j(1),l(2,"span",2,0),j(4,1),s(),q(5,Ns,1,1,"mat-pseudo-checkbox",3),q(6,Ls,2,1,"span",4),ue(7,"div",5)),t&2&&(X(i.multiple?0:-1),d(5),X(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),d(),X(i.group&&i.group._inert?6:-1),d(),h("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[xo,Wt],styles:[`.mat-mdc-option {
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
`],encapsulation:2})}return r})();function Dn(r,n,e){if(e.length){let t=n.toArray(),i=e.toArray(),a=0;for(let o=0;o<r+1;o++)t[o].group&&t[o].group===i[a]&&a++;return a}return 0}function Mn(r,n,e,t){return r<e?r:r+n>e+t?Math.max(0,r-t+n):e}var Hi=(()=>{class r{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||r)};static \u0275prov=ye({token:r,factory:r.\u0275fac})}return r})();var Rt=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,i,a){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=a}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,i=this.ngControl?this.ngControl.control:null,a=t?.isErrorState(i,e)??!1;a!==n&&(this.errorState=a,this._stateChanges.next())}};var js=["trigger"],Us=["panel"],Gs=[[["mat-select-trigger"]],"*"],Ys=["mat-select-trigger","*"];function qs(r,n){if(r&1&&(l(0,"span",4),c(1),s()),r&2){let e=de();d(),M(e.placeholder)}}function Xs(r,n){r&1&&j(0)}function Zs(r,n){if(r&1&&(l(0,"span",11),c(1),s()),r&2){let e=de(2);d(),M(e.triggerValue)}}function Qs(r,n){if(r&1&&(l(0,"span",5),q(1,Xs,1,0)(2,Zs,2,1,"span",11),s()),r&2){let e=de();d(),X(e.customTrigger?1:2)}}function Ks(r,n){if(r&1){let e=dt();l(0,"div",12,1),A("keydown",function(i){he(e);let a=de();return fe(a._handleKeydown(i))}),j(2,1),s()}if(r&2){let e=de();Nt(e.panelClass),L("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",e._parentFormField?.color==="primary")("mat-accent",e._parentFormField?.color==="accent")("mat-warn",e._parentFormField?.color==="warn")("mat-undefined",!e._parentFormField?.color),J("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var $s=new C("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let r=u(Re);return()=>Ni(r)}}),Js=new C("MAT_SELECT_CONFIG"),el=new C("MatSelectTrigger"),En=class{source;value;constructor(n,e){this.source=n,this.value=e}},ae=(()=>{class r{_viewportRuler=u(ht);_changeDetectorRef=u(De);_elementRef=u(P);_dir=u($e,{optional:!0});_idGenerator=u(xe);_renderer=u(pe);_parentFormField=u(Ft,{optional:!0});ngControl=u(Ge,{self:!0,optional:!0});_liveAnnouncer=u(mr);_defaultOptions=u(Js,{optional:!0});_animationsDisabled=Ke();_popoverLocation;_initialized=new k;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=Dn(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Mn(o.offsetTop,o.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new En(this,e)}_scrollStrategyFactory=u($s);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new k;_errorStateTracker;stateChanges=new k;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=f(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(mt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Nn(()=>{let e=this.options;return e?e.changes.pipe(Be(e),bt(()=>qe(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(bt(()=>this.optionSelectionChanges))});openedChange=new H;_openedStream=this.openedChange.pipe(Oe(e=>e),ke(()=>{}));_closedStream=this.openedChange.pipe(Oe(e=>!e),ke(()=>{}));selectionChange=new H;valueChange=new H;constructor(){let e=u(Hi),t=u(Yt,{optional:!0}),i=u(qt,{optional:!0}),a=u(new Ct("tabindex"),{optional:!0}),o=u(Jt,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Rt(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Zt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(K(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(K(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Be(null),K(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ni(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&a&&!Ue(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let m=this.selected;o.onKeydown(e);let p=this.selected;p&&m!==p&&this._liveAnnouncer.announce(p.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,o=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(i===13||i===32)&&t.activeItem&&!Ue(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let m=this.options.some(p=>!p.disabled&&!p.selected);this.options.forEach(p=>{p.disabled||(m?p.select():p.deselect())})}else{let m=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==m&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ue(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ot?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ur(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=qe(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(K(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),qe(...this.options.map(t=>t._stateChanges)).pipe(K(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=wt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["mat-select"]],contentQueries:function(t,i,a){if(t&1&&yt(a,el,5)(a,G,5)(a,zi,5),t&2){let o;O(o=R())&&(i.customTrigger=o.first),O(o=R())&&(i.options=o),O(o=R())&&(i.optionGroups=o)}},viewQuery:function(t,i){if(t&1&&je(js,5)(Us,5)(Li,5),t&2){let a;O(a=R())&&(i.trigger=a.first),O(a=R())&&(i.panel=a.first),O(a=R())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&A("keydown",function(o){return i._handleKeydown(o)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(J("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),L("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",E],disableRipple:[2,"disableRipple","disableRipple",E],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:xt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",E],placeholder:"placeholder",required:[2,"required","required",E],multiple:[2,"multiple","multiple",E],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",E],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",xt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",E]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[Q([{provide:Tt,useExisting:r},{provide:Wi,useExisting:r}]),Pe],ngContentSelectors:Ys,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(Se(Gs),l(0,"div",2,0),A("click",function(){return i.open()}),l(3,"div",3),q(4,qs,2,1,"span",4)(5,Qs,3,1,"span",5),s(),l(6,"div",6)(7,"div",7),qn(),l(8,"svg",8),ue(9,"path",9),s()()()(),lt(10,Ks,3,16,"ng-template",10),A("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(o){return i._handleOverlayKeydown(o)})),t&2){let a=Z(1);d(3),J("id",i._valueId),d(),X(i.empty?4:5),d(6),h("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Ot,Li],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2})}return r})();var Do=new C("IntlCountryPipeDefaultOptions");var se=new C("IntlLocales");var Mo=(()=>{class r{constructor(){this.locale=u(se,{optional:!0}),this.defaultOptions=u(Do,{optional:!0})}transform(e,t){if(!e)return null;let o=t??{},{locale:i}=o,a=me(o,["locale"]);try{return new Intl.DisplayNames(i??this.locale??void 0,W(w(w({},this.defaultOptions),a),{type:"region"})).of(e)??null}catch(m){return console.error("Error while transforming the country",m),null}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275pipe=ie({name:"intlCountry",type:r,pure:!0})}}return r})();var Eo=new C("IntlCurrencyPipeDefaultOptions");var ot=r=>{if(typeof r=="number")return r;if(isNaN(Number(r)-parseFloat(r)))throw new Error(`${r} is not a number!`);return Number(r)};var ko=(()=>{class r{constructor(){this.locale=u(se,{optional:!0}),this.defaultOptions=u(Eo,{optional:!0})}transform(e,t,i){if(typeof e!="number"&&!e)return null;let a=ot(e),p=i??{},{locale:o}=p,m=me(p,["locale"]);try{return new Intl.NumberFormat(o??this.locale??void 0,W(w(w({},this.defaultOptions),m),{currency:t,style:"currency"})).format(a)}catch(x){return console.error("Error while transforming the currency",x),null}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275pipe=ie({name:"intlCurrency",type:r,pure:!0})}}return r})();var Io=new C("IntlDatePipeDefaultOptions");var To=(()=>{class r{constructor(){this.locale=u(se,{optional:!0}),this.defaultOptions=u(Io,{optional:!0})}transform(e,t){if(typeof e!="number"&&!e)return null;let i=new Date(e);if(isNaN(i.getTime()))return null;let m=t??{},{locale:a}=m,o=me(m,["locale"]);try{return new Intl.DateTimeFormat(a??this.locale??void 0,w(w({},this.defaultOptions),o)).format(i)}catch(p){return console.error("Error while transforming the date",p),null}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275pipe=ie({name:"intlDate",type:r,pure:!0})}}return r})();var Fo=new C("IntlDecimalPipeDefaultOptions");var Oo=(()=>{class r{constructor(){this.locale=u(se,{optional:!0}),this.defaultOptions=u(Fo,{optional:!0})}transform(e,t){if(typeof e!="number"&&!e)return null;let i=ot(e),m=t??{},{locale:a}=m,o=me(m,["locale"]);try{return new Intl.NumberFormat(a??this.locale??void 0,W(w(w({},this.defaultOptions),o),{style:"decimal"})).format(i)}catch(p){return console.error("Error while transforming the decimal number",p),null}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275pipe=ie({name:"intlDecimal",type:r,pure:!0})}}return r})();var Ro=new C("IntlDurationPipeDefaultOptions");var Po=(()=>{class r{constructor(){this.locale=u(se,{optional:!0}),this.defaultOptions=u(Ro,{optional:!0})}transform(e,t){if(!e)return null;let o=t??{},{locale:i}=o,a=me(o,["locale"]);try{return new Intl.DurationFormat(i??this.locale??void 0,w(w({},this.defaultOptions),a)).format(e)}catch(m){return console.error("Error while transforming the duration value",m),null}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275pipe=ie({name:"intlDuration",type:r,pure:!0})}}return r})();var Ao=new C("IntlLanguagePipeDefaultOptions");var Vo=(()=>{class r{constructor(){this.locale=u(se,{optional:!0}),this.defaultOptions=u(Ao,{optional:!0})}transform(e,t){if(!e)return null;let o=t??{},{locale:i}=o,a=me(o,["locale"]);try{return new Intl.DisplayNames(i??this.locale??void 0,W(w(w({},this.defaultOptions),a),{type:"language"})).of(e)??null}catch(m){return console.error("Error while transforming the language",m),null}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275pipe=ie({name:"intlLanguage",type:r,pure:!0})}}return r})();var No=new C("IntlListPipeDefaultOptions");var Lo=(()=>{class r{constructor(){this.locale=u(se,{optional:!0}),this.defaultOptions=u(No,{optional:!0})}transform(e,t){if(!e)return null;let o=t??{},{locale:i}=o,a=me(o,["locale"]);try{return new Intl.ListFormat(i??this.locale??void 0,w(w({},this.defaultOptions),a)).format(e)}catch(m){return console.error("Error while transforming the list",m),null}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275pipe=ie({name:"intlList",type:r,pure:!0})}}return r})();var Bo=new C("IntlPercentPipeDefaultOptions");var Wo=(()=>{class r{constructor(){this.locale=u(se,{optional:!0}),this.defaultOptions=u(Bo,{optional:!0})}transform(e,t){if(typeof e!="number"&&!e)return null;let i=ot(e),m=t??{},{locale:a}=m,o=me(m,["locale"]);try{return new Intl.NumberFormat(a??this.locale??void 0,W(w(w({},this.defaultOptions),o),{style:"percent"})).format(i)}catch(p){return console.error("Error while transforming the percent value",p),null}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275pipe=ie({name:"intlPercent",type:r,pure:!0})}}return r})();var zo=new C("IntlRelativeTimePipeDefaultOptions");var Me=(function(r){return r[r.oneSecond=1e3]="oneSecond",r[r.oneMinute=6e4]="oneMinute",r[r.oneHour=36e5]="oneHour",r[r.oneDay=864e5]="oneDay",r[r.oneWeek=6048e5]="oneWeek",r[r.oneMonth=2592e6]="oneMonth",r[r.oneYear=31536e6]="oneYear",r})(Me||{}),Ho=(()=>{class r{constructor(){this.cdr=u(De,{optional:!0}),this.locales=u(se,{optional:!0}),this.defaultOptions=u(zo,{optional:!0})}#e;transform(e,t){if(typeof e!="number"&&!e)return null;let i=new Date(e).getTime();if(isNaN(i))throw new Error(`${e.toString()} is not a valid date`);this.#t(),this.#e=new k,Bn(Me.oneMinute).pipe(K(this.#e)).subscribe(()=>this.cdr?.markForCheck());let a=new Intl.RelativeTimeFormat(t?.locale??this.locales??void 0,w(w({},this.defaultOptions),t)),o=new Date().getTime(),m=i<o?-1:1,p=Math.abs(i-o);return p>Me.oneYear?a.format(m*Math.floor(p/Me.oneYear),"year"):p>Me.oneMonth?a.format(m*Math.floor(p/Me.oneMonth),"month"):p>Me.oneWeek?a.format(m*Math.floor(p/Me.oneWeek),"week"):p>Me.oneDay?a.format(m*Math.floor(p/Me.oneDay),"day"):p>Me.oneHour?a.format(m*Math.floor(p/Me.oneHour),"hour"):p>Me.oneMinute?a.format(m*Math.floor(p/Me.oneMinute),"minute"):a.format(0,"minute")}ngOnDestroy(){this.#t()}#t(){this.#e?.next(),this.#e?.complete()}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275pipe=ie({name:"intlRelativeTime",type:r,pure:!1})}}return r})();var jo=new C("IntlUnitPipeDefaultOptions");var Uo=(()=>{class r{constructor(){this.locale=u(se,{optional:!0}),this.defaultOptions=u(jo,{optional:!0})}transform(e,t,i){if(typeof e!="number"&&!e)return null;let a=ot(e),p=i??{},{locale:o}=p,m=me(p,["locale"]);try{return new Intl.NumberFormat(o??this.locale??void 0,W(w(w({},this.defaultOptions),m),{unit:t,style:"unit"})).format(a)}catch(x){return console.error("Error while transforming the unit value",x),null}}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275pipe=ie({name:"intlUnit",type:r,pure:!0})}}return r})();var le=["af","ak","am","ar","as","asa","ast","az","bas","be","bem","bez","bg","bm","bn","bo","br","brx","bs","ca","ccp","ce","ceb","cgg","chr","ckb","cs","cu","cy","da","dav","de","de-AT","de-CH","de-DE","dje","dsb","dua","dyo","dz","ebu","ee","el","en","en-CA","en-GB","en-US","eo","es","et","eu","ewo","fa","ff","fi","fil","fo","fr","fur","fy","ga","gd","gl","gsw","gu","guz","gv","ha","haw","he","hi","hr","hsb","hu","hy","ia","id","ig","ii","is","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","khq","ki","kk","kkj","kl","kln","km","kn","ko","kok","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln","lo","lrc","lt","lu","luo","luy","lv","mai","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni","mr","ms","mt","mua","my","mzn","naq","nb","nd","nds","ne","nl","nmg","nn","nnh","nus","nyn","om","or","os","pa","pcm","pl","prg","ps","pt","pt-BR","pt-PT","qu","rm","rn","ro","rof","root","ru","rw","rwk","sah","saq","sat","sbp","sd","se","ses","sg","shi","si","sk","sl","smn","sn","so","sq","sr","su","sv","sw","ta","te","teo","tg","th","ti","tk","to","tr","tt","twq","tzm","ug","uk","ur","uz","vai","vi","vo","vun","wae","wo","xh","xog","yav","yi","yo","yue","zgh","zh","zu"];var Go=["AT","CA","CH","DE","GB","KR","SE","UA","US"];function tl(r,n){if(r&1&&(l(0,"mat-option",2),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}function il(r,n){if(r&1&&(l(0,"mat-option",2),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}var Yo=(()=>{class r{constructor(){this.languages=le,this.countries=Go,this.selectedCountry=f("DE"),this.locale=f(void 0),this.options=I(()=>({locale:this.locale()}))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-country"]],decls:18,vars:7,consts:[[1,"fields-container"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Country to transform"),s(),l(4,"mat-select",1),y("ngModelChange",function(o){return v(i.selectedCountry,o)||(i.selectedCountry=o),o}),V(5,tl,2,2,"mat-option",2,z),s(),g(),s(),l(7,"mat-form-field")(8,"mat-label"),c(9,"Locale"),s(),l(10,"mat-select",1),y("ngModelChange",function(o){return v(i.locale,o)||(i.locale=o),o}),l(11,"mat-option",2),c(12,"Browser default"),s(),V(13,il,2,2,"mat-option",2,z),s(),g(),s()(),l(15,"p"),c(16),ne(17,"intlCountry"),s()),t&2&&(d(4),b("ngModel",i.selectedCountry),_(),d(),N(i.countries),d(5),b("ngModel",i.locale),_(),d(),h("value",void 0),d(2),N(i.languages),d(3),M(_e(17,4,i.selectedCountry(),i.options())))},dependencies:[oe,re,ee,te,ae,G,U,Mo],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return r})();var nl=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return r})(),rl={passive:!0},qo=(()=>{class r{_platform=u(Ce);_ngZone=u(Y);_renderer=u(Ze).createRenderer(null,null);_styleLoader=u(Qe);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return ti;this._styleLoader.load(nl);let t=Bt(e),i=this._monitoredElements.get(t);if(i)return i.subject;let a=new k,o="cdk-text-field-autofilled",m=x=>{x.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>a.next({target:x.target,isAutofilled:!0}))):x.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>a.next({target:x.target,isAutofilled:!1})))},p=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",m,rl)));return this._monitoredElements.set(t,{subject:a,unlisten:p}),a}stopMonitoring(e){let t=Bt(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||r)};static \u0275prov=ye({token:r,factory:r.\u0275fac})}return r})();var Xo=new C("MAT_INPUT_VALUE_ACCESSOR");var ol=["button","checkbox","file","hidden","image","radio","range","reset","submit"],al=new C("MAT_INPUT_CONFIG"),Ee=(()=>{class r{_elementRef=u(P);_platform=u(Ce);ngControl=u(Ge,{optional:!0,self:!0});_autofillMonitor=u(qo);_ngZone=u(Y);_formField=u(Ft,{optional:!0});_renderer=u(pe);_uid=u(xe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(al,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new k;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Dt(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(mt.required)??!1}set required(e){this._required=Dt(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&tn().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Dt(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>tn().has(e));constructor(){let e=u(Yt,{optional:!0}),t=u(qt,{optional:!0}),i=u(Hi),a=u(Xo,{optional:!0,self:!0}),o=this._elementRef.nativeElement,m=o.nodeName.toLowerCase();a?li(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Rt(i,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=m==="select",this._isTextarea=m==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&at(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ol.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&A("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(ct("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),J("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),L("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",E]},exportAs:["matInput"],features:[Q([{provide:Tt,useExisting:r}]),Pe]})}return r})();var Zo=["USD","EUR","GBP","CAD","JPY","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USN","UYI","UYU","UYW","UZS","VED","VES","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMW","ZWL"];function sl(r,n){if(r&1&&(l(0,"mat-option",3),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}function ll(r,n){if(r&1&&(l(0,"mat-option",3),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}var Qo=(()=>{class r{constructor(){this.enteredNumber=f("0.24"),this.currency=f("USD"),this.languages=le,this.currencies=Zo,this.locale=f(void 0),this.notation=f(void 0),this.signDisplay=f(void 0),this.currencyDisplay=f(void 0),this.currencySign=f(void 0),this.minimumIntegerDigits=f(void 0),this.minimumFractionDigits=f(void 0),this.maximumFractionDigits=f(void 0),this.minimumSignificantDigits=f(void 0),this.maximumSignificantDigits=f(void 0),this.options=I(()=>({locale:this.locale(),currencyDisplay:this.currencyDisplay(),currencySign:this.currencySign(),notation:this.notation(),signDisplay:this.signDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-currency"]],decls:106,vars:37,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),s(),l(4,"input",1),y("ngModelChange",function(o){return v(i.enteredNumber,o)||(i.enteredNumber=o),o}),s(),g(),s(),l(5,"mat-form-field")(6,"mat-label"),c(7,"Currency"),s(),l(8,"mat-select",2),y("ngModelChange",function(o){return v(i.currency,o)||(i.currency=o),o}),V(9,sl,2,2,"mat-option",3,z),s(),g(),s(),l(11,"mat-form-field")(12,"mat-label"),c(13,"Locale"),s(),l(14,"mat-select",2),y("ngModelChange",function(o){return v(i.locale,o)||(i.locale=o),o}),l(15,"mat-option",3),c(16,"Browser default"),s(),V(17,ll,2,2,"mat-option",3,z),s(),g(),s(),l(19,"mat-form-field")(20,"mat-label"),c(21,"Currency display"),s(),l(22,"mat-select",2),y("ngModelChange",function(o){return v(i.currencyDisplay,o)||(i.currencyDisplay=o),o}),l(23,"mat-option",3),c(24,"Browser default"),s(),l(25,"mat-option",3),c(26,"symbol"),s(),l(27,"mat-option",3),c(28,"narrowSymbol"),s(),l(29,"mat-option",3),c(30,"code"),s(),l(31,"mat-option",3),c(32,"name"),s()(),g(),s(),l(33,"mat-form-field")(34,"mat-label"),c(35,"Currency sign"),s(),l(36,"mat-select",2),y("ngModelChange",function(o){return v(i.currencySign,o)||(i.currencySign=o),o}),l(37,"mat-option",3),c(38,"Browser default"),s(),l(39,"mat-option",3),c(40,"accounting"),s(),l(41,"mat-option",3),c(42,"standard"),s()(),g(),s(),l(43,"mat-form-field")(44,"mat-label"),c(45,"Notation"),s(),l(46,"mat-select",2),y("ngModelChange",function(o){return v(i.notation,o)||(i.notation=o),o}),l(47,"mat-option",3),c(48,"Browser default"),s(),l(49,"mat-option",3),c(50,"standard"),s(),l(51,"mat-option",3),c(52,"scientific"),s(),l(53,"mat-option",3),c(54,"engineering"),s(),l(55,"mat-option",3),c(56,"compact"),s()(),g(),s(),l(57,"mat-form-field")(58,"mat-label"),c(59,"Sign display"),s(),l(60,"mat-select",2),y("ngModelChange",function(o){return v(i.signDisplay,o)||(i.signDisplay=o),o}),l(61,"mat-option",3),c(62,"Browser default"),s(),l(63,"mat-option",3),c(64,"auto"),s(),l(65,"mat-option",3),c(66,"always"),s(),l(67,"mat-option",3),c(68,"exceptZero"),s(),l(69,"mat-option",3),c(70,"negative"),s(),l(71,"mat-option",3),c(72,"never"),s()(),g(),s(),l(73,"mat-form-field")(74,"mat-label"),c(75,"Minimum integer digits"),s(),l(76,"input",4),y("ngModelChange",function(o){return v(i.minimumIntegerDigits,o)||(i.minimumIntegerDigits=o),o}),s(),g(),l(77,"mat-error"),c(78,"Please enter a number from 1 to 21"),s()(),l(79,"mat-form-field")(80,"mat-label"),c(81,"Minimum fraction digits"),s(),l(82,"input",5),y("ngModelChange",function(o){return v(i.minimumFractionDigits,o)||(i.minimumFractionDigits=o),o}),s(),g(),l(83,"mat-error"),c(84,"Please enter a number from 0 to 20"),s()(),l(85,"mat-form-field")(86,"mat-label"),c(87,"Maximum fraction digits"),s(),l(88,"input",5),y("ngModelChange",function(o){return v(i.maximumFractionDigits,o)||(i.maximumFractionDigits=o),o}),s(),g(),l(89,"mat-error"),c(90,"Please enter a number from 0 to 20"),s()(),l(91,"mat-form-field")(92,"mat-label"),c(93,"Minimum significant digits"),s(),l(94,"input",4),y("ngModelChange",function(o){return v(i.minimumSignificantDigits,o)||(i.minimumSignificantDigits=o),o}),s(),g(),l(95,"mat-error"),c(96,"Please enter a number from 1 to 21"),s()(),l(97,"mat-form-field")(98,"mat-label"),c(99,"Maximum significant digits"),s(),l(100,"input",4),y("ngModelChange",function(o){return v(i.maximumSignificantDigits,o)||(i.maximumSignificantDigits=o),o}),s(),g(),l(101,"mat-error"),c(102,"Please enter a number from 1 to 21"),s()()(),l(103,"p"),c(104),ne(105,"intlCurrency"),s()),t&2&&(d(4),b("ngModel",i.enteredNumber),_(),d(4),b("ngModel",i.currency),_(),d(),N(i.currencies),d(5),b("ngModel",i.locale),_(),d(),h("value",void 0),d(2),N(i.languages),d(5),b("ngModel",i.currencyDisplay),_(),d(),h("value",void 0),d(2),h("value","symbol"),d(2),h("value","narrowSymbol"),d(2),h("value","code"),d(2),h("value","name"),d(5),b("ngModel",i.currencySign),_(),d(),h("value",void 0),d(2),h("value","accounting"),d(2),h("value","standard"),d(5),b("ngModel",i.notation),_(),d(),h("value",void 0),d(2),h("value","standard"),d(2),h("value","scientific"),d(2),h("value","engineering"),d(2),h("value","compact"),d(5),b("ngModel",i.signDisplay),_(),d(),h("value",void 0),d(2),h("value","auto"),d(2),h("value","always"),d(2),h("value","exceptZero"),d(2),h("value","negative"),d(2),h("value","never"),d(5),b("ngModel",i.minimumIntegerDigits),_(),d(6),b("ngModel",i.minimumFractionDigits),_(),d(6),b("ngModel",i.maximumFractionDigits),_(),d(6),b("ngModel",i.minimumSignificantDigits),_(),d(6),b("ngModel",i.maximumSignificantDigits),_(),d(4),Ae(" ",hi(105,33,i.enteredNumber(),i.currency(),i.options()),`
`))},dependencies:[oe,be,Ne,re,et,Je,ee,te,Ee,ae,G,U,tt,ko],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return r})();function Ko(r){return Error(`Unable to find icon with the name "${r}"`)}function dl(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function $o(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function Jo(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}var it=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},ta=(()=>{class r{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,i,a){this._httpClient=e,this._sanitizer=t,this._errorHandler=a,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,a){return this._addSvgIconConfig(e,t,new it(i,null,a))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,a){let o=this._sanitizer.sanitize(vt.HTML,i);if(!o)throw Jo(i);let m=St(o);return this._addSvgIconConfig(e,t,new it("",m,a))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new it(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let a=this._sanitizer.sanitize(vt.HTML,t);if(!a)throw Jo(t);let o=St(a);return this._addSvgIconSetConfig(e,new it("",o,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(vt.RESOURCE_URL,e);if(!t)throw $o(e);let i=this._cachedIconsByUrl.get(t);return i?Le(ji(i)):this._loadSvgIconFromConfig(new it(e,null)).pipe(ri(a=>this._cachedIconsByUrl.set(t,a)),ke(a=>ji(a)))}getNamedSvgIcon(e,t=""){let i=ea(t,e),a=this._svgIconConfigs.get(i);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(t,e),a)return this._svgIconConfigs.set(i,a),this._getSvgFromConfig(a);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):Vn(Ko(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Le(ji(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ke(t=>ji(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return Le(i);let a=t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(Wn(m=>{let x=`Loading icon set URL: ${this._sanitizer.sanitize(vt.RESOURCE_URL,o.url)} failed: ${m.message}`;return this._errorHandler.handleError(new Error(x)),Le(null)})));return ii(a).pipe(ke(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw Ko(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let a=t[i];if(a.svgText&&a.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(a),m=this._extractSvgIconFromSet(o,e,a.options);if(m)return m}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ri(t=>e.svgText=t),ke(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Le(null):this._fetchIcon(e).pipe(ri(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let a=e.querySelector(`[id="${t}"]`);if(!a)return null;let o=a.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,i);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),i);let m=this._svgElementFromString(St("<svg></svg>"));return m.appendChild(o),this._setSvgAttributes(m,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(St("<svg></svg>")),i=e.attributes;for(let a=0;a<i.length;a++){let{name:o,value:m}=i[a];o!=="id"&&t.setAttribute(o,m)}for(let a=0;a<e.childNodes.length;a++)e.childNodes[a].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[a].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,a=i?.withCredentials??!1;if(!this._httpClient)throw dl();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(vt.RESOURCE_URL,t);if(!o)throw $o(t);let m=this._inProgressUrlFetches.get(o);if(m)return m;let p=this._httpClient.get(o,{responseType:"text",withCredentials:a}).pipe(ke(x=>St(x)),Hn(()=>this._inProgressUrlFetches.delete(o)),jn());return this._inProgressUrlFetches.set(o,p),p}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(ea(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let a=this._resolvers[i](t,e);if(a)return cl(a)?new it(a.url,null,a.options):new it(a,null)}}static \u0275fac=function(t){return new(t||r)(Pt(ar,8),Pt(sr),Pt(Ie,8),Pt(si))};static \u0275prov=Yn({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function ji(r){return r.cloneNode(!0)}function ea(r,n){return r+":"+n}function cl(r){return!!(r.url&&r.options)}var ml=["*"],ul=new C("MAT_ICON_DEFAULT_OPTIONS"),hl=new C("mat-icon-location",{providedIn:"root",factory:()=>{let r=u(Ie),n=r?r.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),ia=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],fl=ia.map(r=>`[${r}]`).join(", "),pl=/^url\(['"]?#(.*?)['"]?\)$/,Ui=(()=>{class r{_elementRef=u(P);_iconRegistry=u(ta);_location=u(hl);_errorHandler=u(si);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ve.EMPTY;constructor(){let e=u(new Ct("aria-hidden"),{optional:!0}),t=u(ul,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,a)=>{i.forEach(o=>{a.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(fl),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<t.length;a++)ia.forEach(o=>{let m=t[a],p=m.getAttribute(o),x=p?p.match(pl):null;if(x){let S=i.get(m);S||(S=[],i.set(m,S)),S.push({name:o,value:x[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(ni(1)).subscribe(a=>this._setSvgElement(a),a=>{let o=`Error retrieving icon ${t}:${i}! ${a.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,i){t&2&&(J("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Nt(i.color?"mat-"+i.color:""),L("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",E],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ml,decls:1,vars:0,template:function(t,i){t&1&&(Se(),j(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})}return r})();var Gi=r=>{let n=r?new Date(r):new Date;return new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,-1).split(".")[0]};function gl(r,n){if(r&1&&(l(0,"mat-option",5),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}var na=(()=>{class r{constructor(){this.languages=le,this.selectedDate=f(Gi()),this.dateStyle=f(void 0),this.timeStyle=f(void 0),this.hour12=f(void 0),this.locale=f(void 0),this.options=I(()=>({locale:this.locale(),dateStyle:this.dateStyle(),timeStyle:this.timeStyle(),hour12:this.hour12()}))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-date"]],decls:58,vars:23,consts:[["picker",""],[1,"fields-container"],["matInput","","placeholder","Choose a date","type","datetime-local",3,"ngModelChange","ngModel"],["mat-icon-button","","matIconSuffix","",3,"click"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){if(t&1){let a=dt();l(0,"div",1)(1,"mat-form-field")(2,"mat-label"),c(3,"Date"),s(),l(4,"input",2,0),y("ngModelChange",function(m){return he(a),v(i.selectedDate,m)||(i.selectedDate=m),fe(m)}),s(),g(),l(6,"button",3),A("click",function(){he(a);let m=Z(5);return fe(m.showPicker())}),l(7,"mat-icon"),c(8,"today"),s()()(),l(9,"mat-form-field")(10,"mat-label"),c(11,"Locale"),s(),l(12,"mat-select",4),y("ngModelChange",function(m){return he(a),v(i.locale,m)||(i.locale=m),fe(m)}),l(13,"mat-option",5),c(14,"Browser default"),s(),V(15,gl,2,2,"mat-option",5,z),s(),g(),s(),l(17,"mat-form-field")(18,"mat-label"),c(19,"Date style"),s(),l(20,"mat-select",4),y("ngModelChange",function(m){return he(a),v(i.dateStyle,m)||(i.dateStyle=m),fe(m)}),l(21,"mat-option",5),c(22,"Browser default"),s(),l(23,"mat-option",5),c(24,"short"),s(),l(25,"mat-option",5),c(26,"medium"),s(),l(27,"mat-option",5),c(28,"long"),s(),l(29,"mat-option",5),c(30,"full"),s()(),g(),s(),l(31,"mat-form-field")(32,"mat-label"),c(33,"Time style"),s(),l(34,"mat-select",4),y("ngModelChange",function(m){return he(a),v(i.timeStyle,m)||(i.timeStyle=m),fe(m)}),l(35,"mat-option",5),c(36,"Browser default"),s(),l(37,"mat-option",5),c(38,"short"),s(),l(39,"mat-option",5),c(40,"medium"),s(),l(41,"mat-option",5),c(42,"long"),s(),l(43,"mat-option",5),c(44,"full"),s()(),g(),s(),l(45,"mat-form-field")(46,"mat-label"),c(47,"12 Hours"),s(),l(48,"mat-select",4),y("ngModelChange",function(m){return he(a),v(i.hour12,m)||(i.hour12=m),fe(m)}),l(49,"mat-option",5),c(50,"Browser default"),s(),l(51,"mat-option",5),c(52,"true"),s(),l(53,"mat-option",5),c(54,"false"),s()(),g(),s()(),l(55,"p"),c(56),ne(57,"intlDate"),s()}t&2&&(d(4),b("ngModel",i.selectedDate),_(),d(8),b("ngModel",i.locale),_(),d(),h("value",void 0),d(2),N(i.languages),d(5),b("ngModel",i.dateStyle),_(),d(),h("value",void 0),d(2),h("value","short"),d(2),h("value","medium"),d(2),h("value","long"),d(2),h("value","full"),d(5),b("ngModel",i.timeStyle),_(),d(),h("value",void 0),d(2),h("value","short"),d(2),h("value","medium"),d(2),h("value","long"),d(2),h("value","full"),d(5),b("ngModel",i.hour12),_(),d(),h("value",void 0),d(2),h("value",!0),d(2),h("value",!1),d(3),M(_e(57,20,i.selectedDate(),i.options())))},dependencies:[oe,be,re,ee,te,Ee,pi,Ui,ae,G,U,Xt,To],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return r})();function _l(r,n){if(r&1&&(l(0,"mat-option",3),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}var ra=(()=>{class r{constructor(){this.enteredNumber=f("1024.4539"),this.languages=le,this.locale=f(void 0),this.notation=f(void 0),this.signDisplay=f(void 0),this.minimumIntegerDigits=f(void 0),this.minimumFractionDigits=f(void 0),this.maximumFractionDigits=f(void 0),this.minimumSignificantDigits=f(void 0),this.maximumSignificantDigits=f(void 0),this.options=I(()=>({locale:this.locale(),notation:this.notation(),signDisplay:this.signDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-decimal"]],decls:76,vars:25,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),s(),l(4,"input",1),y("ngModelChange",function(o){return v(i.enteredNumber,o)||(i.enteredNumber=o),o}),s(),g(),s(),l(5,"mat-form-field")(6,"mat-label"),c(7,"Locale"),s(),l(8,"mat-select",2),y("ngModelChange",function(o){return v(i.locale,o)||(i.locale=o),o}),l(9,"mat-option",3),c(10,"Browser default"),s(),V(11,_l,2,2,"mat-option",3,z),s(),g(),s(),l(13,"mat-form-field")(14,"mat-label"),c(15,"Notation"),s(),l(16,"mat-select",2),y("ngModelChange",function(o){return v(i.notation,o)||(i.notation=o),o}),l(17,"mat-option",3),c(18,"Browser default"),s(),l(19,"mat-option",3),c(20,"standard"),s(),l(21,"mat-option",3),c(22,"scientific"),s(),l(23,"mat-option",3),c(24,"engineering"),s(),l(25,"mat-option",3),c(26,"compact"),s()(),g(),s(),l(27,"mat-form-field")(28,"mat-label"),c(29,"Sign display"),s(),l(30,"mat-select",2),y("ngModelChange",function(o){return v(i.signDisplay,o)||(i.signDisplay=o),o}),l(31,"mat-option",3),c(32,"Browser default"),s(),l(33,"mat-option",3),c(34,"auto"),s(),l(35,"mat-option",3),c(36,"always"),s(),l(37,"mat-option",3),c(38,"exceptZero"),s(),l(39,"mat-option",3),c(40,"negative"),s(),l(41,"mat-option",3),c(42,"never"),s()(),g(),s(),l(43,"mat-form-field")(44,"mat-label"),c(45,"Minimum integer digits"),s(),l(46,"input",4),y("ngModelChange",function(o){return v(i.minimumIntegerDigits,o)||(i.minimumIntegerDigits=o),o}),s(),g(),l(47,"mat-error"),c(48,"Please enter a number from 1 to 21"),s()(),l(49,"mat-form-field")(50,"mat-label"),c(51,"Minimum fraction digits"),s(),l(52,"input",5),y("ngModelChange",function(o){return v(i.minimumFractionDigits,o)||(i.minimumFractionDigits=o),o}),s(),g(),l(53,"mat-error"),c(54,"Please enter a number from 0 to 20"),s()(),l(55,"mat-form-field")(56,"mat-label"),c(57,"Maximum fraction digits"),s(),l(58,"input",5),y("ngModelChange",function(o){return v(i.maximumFractionDigits,o)||(i.maximumFractionDigits=o),o}),s(),g(),l(59,"mat-error"),c(60,"Please enter a number from 0 to 20"),s()(),l(61,"mat-form-field")(62,"mat-label"),c(63,"Minimum significant digits"),s(),l(64,"input",4),y("ngModelChange",function(o){return v(i.minimumSignificantDigits,o)||(i.minimumSignificantDigits=o),o}),s(),g(),l(65,"mat-error"),c(66,"Please enter a number from 1 to 21"),s()(),l(67,"mat-form-field")(68,"mat-label"),c(69,"Maximum significant digits"),s(),l(70,"input",4),y("ngModelChange",function(o){return v(i.maximumSignificantDigits,o)||(i.maximumSignificantDigits=o),o}),s(),g(),l(71,"mat-error"),c(72,"Please enter a number from 1 to 21"),s()()(),l(73,"p"),c(74),ne(75,"intlDecimal"),s()),t&2&&(d(4),b("ngModel",i.enteredNumber),_(),d(4),b("ngModel",i.locale),_(),d(),h("value",void 0),d(2),N(i.languages),d(5),b("ngModel",i.notation),_(),d(),h("value",void 0),d(2),h("value","standard"),d(2),h("value","scientific"),d(2),h("value","engineering"),d(2),h("value","compact"),d(5),b("ngModel",i.signDisplay),_(),d(),h("value",void 0),d(2),h("value","auto"),d(2),h("value","always"),d(2),h("value","exceptZero"),d(2),h("value","negative"),d(2),h("value","never"),d(5),b("ngModel",i.minimumIntegerDigits),_(),d(6),b("ngModel",i.minimumFractionDigits),_(),d(6),b("ngModel",i.maximumFractionDigits),_(),d(6),b("ngModel",i.minimumSignificantDigits),_(),d(6),b("ngModel",i.maximumSignificantDigits),_(),d(4),Ae(" ",_e(75,22,i.enteredNumber(),i.options()),`
`))},dependencies:[oe,be,Ne,re,et,Je,ee,te,Ee,ae,G,U,tt,Oo],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return r})();function bl(r,n){if(r&1&&(l(0,"mat-option",3),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}var oa=(()=>{class r{constructor(){this.languages=le,this.years=f(5),this.months=f(2),this.weeks=f(void 0),this.days=f(23),this.hours=f(void 0),this.minutes=f(void 0),this.seconds=f(void 0),this.milliseconds=f(void 0),this.microseconds=f(void 0),this.nanoseconds=f(void 0),this.locale=f(void 0),this.style=f(void 0),this.value=I(()=>({years:this.years(),months:this.months(),weeks:this.weeks(),days:this.days(),hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds(),microseconds:this.microseconds()})),this.options=I(()=>({locale:this.locale(),style:this.style()}))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-duration"]],decls:66,vars:22,consts:[[1,"fields-container"],["matInput","","type","number",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Years"),s(),l(4,"input",1),y("ngModelChange",function(o){return v(i.years,o)||(i.years=o),o}),s(),g(),s(),l(5,"mat-form-field")(6,"mat-label"),c(7,"Months"),s(),l(8,"input",1),y("ngModelChange",function(o){return v(i.months,o)||(i.months=o),o}),s(),g(),s(),l(9,"mat-form-field")(10,"mat-label"),c(11,"Weeks"),s(),l(12,"input",1),y("ngModelChange",function(o){return v(i.weeks,o)||(i.weeks=o),o}),s(),g(),s(),l(13,"mat-form-field")(14,"mat-label"),c(15,"Days"),s(),l(16,"input",1),y("ngModelChange",function(o){return v(i.days,o)||(i.days=o),o}),s(),g(),s(),l(17,"mat-form-field")(18,"mat-label"),c(19,"Hours"),s(),l(20,"input",1),y("ngModelChange",function(o){return v(i.hours,o)||(i.hours=o),o}),s(),g(),s(),l(21,"mat-form-field")(22,"mat-label"),c(23,"Minutes"),s(),l(24,"input",1),y("ngModelChange",function(o){return v(i.minutes,o)||(i.minutes=o),o}),s(),g(),s(),l(25,"mat-form-field")(26,"mat-label"),c(27,"Seconds"),s(),l(28,"input",1),y("ngModelChange",function(o){return v(i.seconds,o)||(i.seconds=o),o}),s(),g(),s(),l(29,"mat-form-field")(30,"mat-label"),c(31,"Milliseconds"),s(),l(32,"input",1),y("ngModelChange",function(o){return v(i.milliseconds,o)||(i.milliseconds=o),o}),s(),g(),s(),l(33,"mat-form-field")(34,"mat-label"),c(35,"Microseconds"),s(),l(36,"input",1),y("ngModelChange",function(o){return v(i.microseconds,o)||(i.microseconds=o),o}),s(),g(),s(),l(37,"mat-form-field")(38,"mat-label"),c(39,"Nanoseconds"),s(),l(40,"input",1),y("ngModelChange",function(o){return v(i.nanoseconds,o)||(i.nanoseconds=o),o}),s(),g(),s(),l(41,"mat-form-field")(42,"mat-label"),c(43,"Locale"),s(),l(44,"mat-select",2),y("ngModelChange",function(o){return v(i.locale,o)||(i.locale=o),o}),l(45,"mat-option",3),c(46,"Browser default"),s(),V(47,bl,2,2,"mat-option",3,z),s(),g(),s(),l(49,"mat-form-field")(50,"mat-label"),c(51,"Style"),s(),l(52,"mat-select",2),y("ngModelChange",function(o){return v(i.style,o)||(i.style=o),o}),l(53,"mat-option",3),c(54,"Browser default"),s(),l(55,"mat-option",3),c(56,"long"),s(),l(57,"mat-option",3),c(58,"short"),s(),l(59,"mat-option",3),c(60,"narrow"),s(),l(61,"mat-option",3),c(62,"digital"),s()(),g(),s()(),l(63,"p"),c(64),ne(65,"intlDuration"),s()),t&2&&(d(4),b("ngModel",i.years),_(),d(4),b("ngModel",i.months),_(),d(4),b("ngModel",i.weeks),_(),d(4),b("ngModel",i.days),_(),d(4),b("ngModel",i.hours),_(),d(4),b("ngModel",i.minutes),_(),d(4),b("ngModel",i.seconds),_(),d(4),b("ngModel",i.milliseconds),_(),d(4),b("ngModel",i.microseconds),_(),d(4),b("ngModel",i.nanoseconds),_(),d(4),b("ngModel",i.locale),_(),d(),h("value",void 0),d(2),N(i.languages),d(5),b("ngModel",i.style),_(),d(),h("value",void 0),d(2),h("value","long"),d(2),h("value","short"),d(2),h("value","narrow"),d(2),h("value","digital"),d(3),Ae(" ",_e(65,19,i.value(),i.options()),`
`))},dependencies:[oe,be,Ne,re,ee,te,Ee,ae,G,U,Po],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return r})();function vl(r,n){if(r&1&&(l(0,"mat-option",2),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}function yl(r,n){if(r&1&&(l(0,"mat-option",2),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}var aa=(()=>{class r{constructor(){this.languages=le,this.selectedLanguage=f("de-DE"),this.languageDisplay=f(void 0),this.locale=f(void 0),this.options=I(()=>({locale:this.locale(),languageDisplay:this.languageDisplay()}))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-language"]],decls:28,vars:11,consts:[[1,"fields-container"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Language to transform"),s(),l(4,"mat-select",1),y("ngModelChange",function(o){return v(i.selectedLanguage,o)||(i.selectedLanguage=o),o}),V(5,vl,2,2,"mat-option",2,z),s(),g(),s(),l(7,"mat-form-field")(8,"mat-label"),c(9,"Locale"),s(),l(10,"mat-select",1),y("ngModelChange",function(o){return v(i.locale,o)||(i.locale=o),o}),l(11,"mat-option",2),c(12,"Browser default"),s(),V(13,yl,2,2,"mat-option",2,z),s(),g(),s(),l(15,"mat-form-field")(16,"mat-label"),c(17,"Language display"),s(),l(18,"mat-select",1),y("ngModelChange",function(o){return v(i.languageDisplay,o)||(i.languageDisplay=o),o}),l(19,"mat-option",2),c(20,"Browser default"),s(),l(21,"mat-option",2),c(22,"dialect"),s(),l(23,"mat-option",2),c(24,"standard"),s()(),g(),s()(),l(25,"p"),c(26),ne(27,"intlLanguage"),s()),t&2&&(d(4),b("ngModel",i.selectedLanguage),_(),d(),N(i.languages),d(5),b("ngModel",i.locale),_(),d(),h("value",void 0),d(2),N(i.languages),d(5),b("ngModel",i.languageDisplay),_(),d(),h("value",void 0),d(2),h("value","dialect"),d(2),h("value","standard"),d(3),M(_e(27,8,i.selectedLanguage(),i.options())))},dependencies:[oe,re,ee,te,ae,G,U,Vo],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return r})();var ei=["Pizza","Lasagne","Gnocchi","Spaghetti","Pesto"];function Cl(r,n){if(r&1&&(l(0,"mat-option",2),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}function xl(r,n){if(r&1&&(l(0,"mat-option",2),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}var sa=(()=>{class r{constructor(){this.languages=le,this.list=ei,this.selectedItems=f([ei[0],ei[2],ei[3]]),this.locale=f(void 0),this.type=f(void 0),this.style=f(void 0),this.options=I(()=>({locale:this.locale(),type:this.type(),style:this.style()}))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-list"]],decls:42,vars:17,consts:[[1,"fields-container"],["multiple","",3,"ngModelChange","ngModel"],[3,"value"],[3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"List items"),s(),l(4,"mat-select",1),y("ngModelChange",function(o){return v(i.selectedItems,o)||(i.selectedItems=o),o}),V(5,Cl,2,2,"mat-option",2,z),s(),g(),s(),l(7,"mat-form-field")(8,"mat-label"),c(9,"Locale"),s(),l(10,"mat-select",3),y("ngModelChange",function(o){return v(i.locale,o)||(i.locale=o),o}),l(11,"mat-option",2),c(12,"Browser default"),s(),V(13,xl,2,2,"mat-option",2,z),s(),g(),s(),l(15,"mat-form-field")(16,"mat-label"),c(17,"Type"),s(),l(18,"mat-select",3),y("ngModelChange",function(o){return v(i.type,o)||(i.type=o),o}),l(19,"mat-option",2),c(20,"Browser default"),s(),l(21,"mat-option",2),c(22,"conjunction"),s(),l(23,"mat-option",2),c(24,"disjunction"),s(),l(25,"mat-option",2),c(26,"unit"),s()(),g(),s(),l(27,"mat-form-field")(28,"mat-label"),c(29,"Style"),s(),l(30,"mat-select",3),y("ngModelChange",function(o){return v(i.style,o)||(i.style=o),o}),l(31,"mat-option",2),c(32,"Browser default"),s(),l(33,"mat-option",2),c(34,"long"),s(),l(35,"mat-option",2),c(36,"short"),s(),l(37,"mat-option",2),c(38,"narrow"),s()(),g(),s()(),l(39,"p"),c(40),ne(41,"intlList"),s()),t&2&&(d(4),b("ngModel",i.selectedItems),_(),d(),N(i.list),d(5),b("ngModel",i.locale),_(),d(),h("value",void 0),d(2),N(i.languages),d(5),b("ngModel",i.type),_(),d(),h("value",void 0),d(2),h("value","conjunction"),d(2),h("value","disjunction"),d(2),h("value","unit"),d(5),b("ngModel",i.style),_(),d(),h("value",void 0),d(2),h("value","long"),d(2),h("value","short"),d(2),h("value","narrow"),d(3),M(_e(41,14,i.selectedItems(),i.options())))},dependencies:[oe,re,ee,te,ae,G,U,Lo],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return r})();function wl(r,n){if(r&1&&(l(0,"mat-option",3),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}var la=(()=>{class r{constructor(){this.enteredNumber=f("0.24"),this.languages=le,this.locale=f(void 0),this.notation=f(void 0),this.signDisplay=f(void 0),this.minimumIntegerDigits=f(void 0),this.minimumFractionDigits=f(void 0),this.maximumFractionDigits=f(void 0),this.minimumSignificantDigits=f(void 0),this.maximumSignificantDigits=f(void 0),this.options=I(()=>({locale:this.locale(),notation:this.notation(),signDisplay:this.signDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-percent"]],decls:76,vars:25,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),s(),l(4,"input",1),y("ngModelChange",function(o){return v(i.enteredNumber,o)||(i.enteredNumber=o),o}),s(),g(),s(),l(5,"mat-form-field")(6,"mat-label"),c(7,"Locale"),s(),l(8,"mat-select",2),y("ngModelChange",function(o){return v(i.locale,o)||(i.locale=o),o}),l(9,"mat-option",3),c(10,"Browser default"),s(),V(11,wl,2,2,"mat-option",3,z),s(),g(),s(),l(13,"mat-form-field")(14,"mat-label"),c(15,"Notation"),s(),l(16,"mat-select",2),y("ngModelChange",function(o){return v(i.notation,o)||(i.notation=o),o}),l(17,"mat-option",3),c(18,"Browser default"),s(),l(19,"mat-option",3),c(20,"standard"),s(),l(21,"mat-option",3),c(22,"scientific"),s(),l(23,"mat-option",3),c(24,"engineering"),s(),l(25,"mat-option",3),c(26,"compact"),s()(),g(),s(),l(27,"mat-form-field")(28,"mat-label"),c(29,"Sign display"),s(),l(30,"mat-select",2),y("ngModelChange",function(o){return v(i.signDisplay,o)||(i.signDisplay=o),o}),l(31,"mat-option",3),c(32,"Browser default"),s(),l(33,"mat-option",3),c(34,"auto"),s(),l(35,"mat-option",3),c(36,"always"),s(),l(37,"mat-option",3),c(38,"exceptZero"),s(),l(39,"mat-option",3),c(40,"negative"),s(),l(41,"mat-option",3),c(42,"never"),s()(),g(),s(),l(43,"mat-form-field")(44,"mat-label"),c(45,"Minimum integer digits"),s(),l(46,"input",4),y("ngModelChange",function(o){return v(i.minimumIntegerDigits,o)||(i.minimumIntegerDigits=o),o}),s(),g(),l(47,"mat-error"),c(48,"Please enter a number from 1 to 21"),s()(),l(49,"mat-form-field")(50,"mat-label"),c(51,"Minimum fraction digits"),s(),l(52,"input",5),y("ngModelChange",function(o){return v(i.minimumFractionDigits,o)||(i.minimumFractionDigits=o),o}),s(),g(),l(53,"mat-error"),c(54,"Please enter a number from 0 to 20"),s()(),l(55,"mat-form-field")(56,"mat-label"),c(57,"Maximum fraction digits"),s(),l(58,"input",5),y("ngModelChange",function(o){return v(i.maximumFractionDigits,o)||(i.maximumFractionDigits=o),o}),s(),g(),l(59,"mat-error"),c(60,"Please enter a number from 0 to 20"),s()(),l(61,"mat-form-field")(62,"mat-label"),c(63,"Minimum significant digits"),s(),l(64,"input",4),y("ngModelChange",function(o){return v(i.minimumSignificantDigits,o)||(i.minimumSignificantDigits=o),o}),s(),g(),l(65,"mat-error"),c(66,"Please enter a number from 1 to 21"),s()(),l(67,"mat-form-field")(68,"mat-label"),c(69,"Maximum significant digits"),s(),l(70,"input",4),y("ngModelChange",function(o){return v(i.maximumSignificantDigits,o)||(i.maximumSignificantDigits=o),o}),s(),g(),l(71,"mat-error"),c(72,"Please enter a number from 1 to 21"),s()()(),l(73,"p"),c(74),ne(75,"intlPercent"),s()),t&2&&(d(4),b("ngModel",i.enteredNumber),_(),d(4),b("ngModel",i.locale),_(),d(),h("value",void 0),d(2),N(i.languages),d(5),b("ngModel",i.notation),_(),d(),h("value",void 0),d(2),h("value","standard"),d(2),h("value","scientific"),d(2),h("value","engineering"),d(2),h("value","compact"),d(5),b("ngModel",i.signDisplay),_(),d(),h("value",void 0),d(2),h("value","auto"),d(2),h("value","always"),d(2),h("value","exceptZero"),d(2),h("value","negative"),d(2),h("value","never"),d(5),b("ngModel",i.minimumIntegerDigits),_(),d(6),b("ngModel",i.minimumFractionDigits),_(),d(6),b("ngModel",i.maximumFractionDigits),_(),d(6),b("ngModel",i.minimumSignificantDigits),_(),d(6),b("ngModel",i.maximumSignificantDigits),_(),d(4),Ae(" ",_e(75,22,i.enteredNumber(),i.options()),`
`))},dependencies:[oe,be,Ne,re,et,Je,ee,te,Ee,ae,G,U,tt,Wo],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return r})();var Tn=["*"];var Sl=["tabListContainer"],Dl=["tabList"],Ml=["tabListInner"],El=["nextPaginator"],kl=["previousPaginator"];var kn="mdc-tab-indicator--active",da="mdc-tab-indicator--no-transition",In=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(i=>i.elementRef.nativeElement===n),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let i=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},Il=(()=>{class r{_elementRef=u(P);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(kn);return}let i=t.getBoundingClientRect(),a=e.width/i.width,o=e.left-i.left;t.classList.add(da),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${a})`),t.getBoundingClientRect(),t.classList.remove(da),t.classList.add(kn),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(kn)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",E]}})}return r})();var ca={passive:!0},Tl=650,Fl=100,Ol=(()=>{class r{_elementRef=u(P);_changeDetectorRef=u(De);_viewportRuler=u(ht);_dir=u($e,{optional:!0});_ngZone=u(Y);_platform=u(Ce);_sharedResizeObserver=u(ki);_injector=u(Re);_renderer=u(pe);_animationsDisabled=Ke();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new k;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new k;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new H;indexFocused=new H;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),ca),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),ca))}ngAfterContentInit(){let e=this._dir?this._dir.change:Le("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(zn(32),K(this._destroyed)),i=this._viewportRuler.change(150).pipe(K(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new hr(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),st(a,{injector:this._injector}),qe(e,i,t,this._items.changes,this._itemsResized()).pipe(K(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?ti:this._items.changes.pipe(Be(this._items),bt(e=>new _t(t=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(a=>t.next(a));return e.forEach(a=>i.observe(a.elementRef.nativeElement)),()=>{i.disconnect()}}))),Un(1),Oe(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Ue(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=t.elementRef.nativeElement,m,p;this._getLayoutDirection()=="ltr"?(m=a,p=m+o):(p=this._tabListInner.nativeElement.offsetWidth-a,m=p-o);let x=this.scrollDistance,S=this.scrollDistance+i;m<x?this.scrollDistance-=x-m:p>S&&(this.scrollDistance+=Math.min(p-S,m-x))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,i=e-t>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Ln(Tl,Fl).pipe(K(qe(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:a}=this._scrollHeader(e);(a===0||a>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||r)};static \u0275dir=F({type:r,inputs:{disablePagination:[2,"disablePagination","disablePagination",E],selectedIndex:[2,"selectedIndex","selectedIndex",xt]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return r})();var Rl=new C("MAT_TABS_CONFIG");var Fn=(()=>{class r extends Ol{_focusedItem=f(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new Pn(!1);stretchTabs=!0;get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=f(!1);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=u(Rl,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new In(this._items),this._items.changes.pipe(Be(null),K(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Be(null),K(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let t=0;t<e.length;t++)if(e[t].active){this.selectedIndex=t,this.tabPanel&&(this.tabPanel._activeTabId=e[t].id),this._focusedItem.set(e[t]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(e){return this._keyManager?.activeItem===e}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(t,i,a){if(t&1&&yt(a,On,5),t&2){let o;O(o=R())&&(i._items=o)}},viewQuery:function(t,i){if(t&1&&je(Sl,7)(Dl,7)(Ml,7)(El,5)(kl,5),t&2){let a;O(a=R())&&(i._tabListContainer=a.first),O(a=R())&&(i._tabList=a.first),O(a=R())&&(i._tabListInner=a.first),O(a=R())&&(i._nextPaginator=a.first),O(a=R())&&(i._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(t,i){t&2&&(J("role",i._getRole()),Ki("--mat-tab-header-animation-duration",i.animationDuration),L("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",i.stretchTabs)("mat-primary",i.color!=="warn"&&i.color!=="accent")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("_mat-animation-noopable",i._animationsDisabled))},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",E],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",E],animationDuration:"animationDuration",backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",E],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[ge],ngContentSelectors:Tn,decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,i){t&1&&(Se(),l(0,"div",5,0),A("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(o){return i._handlePaginatorPress("before",o)})("touchend",function(){return i._stopInterval()}),ue(2,"div",6),s(),l(3,"div",7,1),A("keydown",function(o){return i._handleKeydown(o)}),l(5,"div",8,2),A("cdkObserveContent",function(){return i._onContentChanges()}),l(7,"div",9,3),j(9),s()()(),l(10,"div",10,4),A("mousedown",function(o){return i._handlePaginatorPress("after",o)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),ue(12,"div",6),s()),t&2&&(L("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),h("matRippleDisabled",i._disableScrollBefore||i.disableRipple),d(10),L("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),h("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[Wt,cr],styles:[`.mdc-tab {
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
  transition: var(--mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
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
  transition-duration: var(--mat-tab-header-animation-duration, 250ms);
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
`],encapsulation:2,changeDetection:1})}return r})(),On=(()=>{class r extends Il{_tabNavBar=u(Fn);elementRef=u(P);_focusMonitor=u(lr);_destroyed=new k;_isActive=!1;_tabIndex=I(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=f(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=u(xe).getId("mat-tab-link-");constructor(){super(),u(Qe).load(fi);let e=u(fr,{optional:!0}),t=u(new Ct("tabindex"),{optional:!0});this.rippleConfig=e||{},this.tabIndex=t==null?0:parseInt(t)||0,Ke()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(K(this._destroyed)).subscribe(i=>{this.fitInkBarToContent=i})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===32&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(t,i){t&1&&A("focus",function(){return i._handleFocus()})("keydown",function(o){return i._handleKeydown(o)}),t&2&&(J("aria-controls",i._getAriaControls())("aria-current",i._getAriaCurrent())("aria-disabled",i.disabled)("aria-selected",i._getAriaSelected())("id",i.id)("tabIndex",i._tabIndex())("role",i._getRole()),L("mat-mdc-tab-disabled",i.disabled)("mdc-tab--active",i.active))},inputs:{active:[2,"active","active",E],disabled:[2,"disabled","disabled",E],disableRipple:[2,"disableRipple","disableRipple",E],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:xt(e)],id:"id"},exportAs:["matTabLink"],features:[ge],ngContentSelectors:Tn,decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(t,i){t&1&&(Se(),ue(0,"span",0)(1,"div",1),l(2,"span",2)(3,"span",3),j(4),s()()),t&2&&(d(),h("matRippleTrigger",i.elementRef.nativeElement)("matRippleDisabled",i.rippleDisabled))},dependencies:[Wt],styles:[`.mat-mdc-tab-link {
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
`],encapsulation:2})}return r})(),ma=(()=>{class r{id=u(xe).getId("mat-tab-nav-panel-");_activeTabId;static \u0275fac=function(t){return new(t||r)};static \u0275cmp=D({type:r,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-mdc-tab-nav-panel"],hostVars:2,hostBindings:function(t,i){t&2&&J("aria-labelledby",i._activeTabId)("id",i.id)},inputs:{id:"id"},exportAs:["matTabNavPanel"],ngContentSelectors:Tn,decls:1,vars:0,template:function(t,i){t&1&&(Se(),j(0))},encapsulation:2})}return r})();var ua=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-pipes"]],features:[Q([{provide:Ti,useValue:{subscriptSizing:"dynamic"}}])],decls:35,vars:11,consts:[["dateActive","routerLinkActive"],["decimalActive","routerLinkActive"],["percentActive","routerLinkActive"],["currencyActive","routerLinkActive"],["unitActive","routerLinkActive"],["languageActive","routerLinkActive"],["countryActive","routerLinkActive"],["listActive","routerLinkActive"],["relativeTimeActive","routerLinkActive"],["durationActive","routerLinkActive"],["tabPanel",""],["mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","","routerLink","date","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","decimal","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","percent","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","currency","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","unit","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","language","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","country","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","list","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","relative-time","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","duration","routerLinkActive","",3,"active"],[1,"panel-container"]],template:function(t,i){if(t&1&&(l(0,"nav",11)(1,"a",12,0),c(3," Date "),s(),l(4,"a",13,1),c(6," Decimal "),s(),l(7,"a",14,2),c(9," Percent "),s(),l(10,"a",15,3),c(12,"Currency"),s(),l(13,"a",16,4),c(15," Unit "),s(),l(16,"a",17,5),c(18,"Language"),s(),l(19,"a",18,6),c(21," Country "),s(),l(22,"a",19,7),c(24," List "),s(),l(25,"a",20,8),c(27,"Relative Time"),s(),l(28,"a",21,9),c(30," Duration "),s()(),ue(31,"mat-tab-nav-panel",null,10),l(33,"div",22),ue(34,"router-outlet"),s()),t&2){let a=Z(2),o=Z(5),m=Z(8),p=Z(11),x=Z(14),S=Z(17),B=Z(20),we=Z(23),Ve=Z(26),Fe=Z(29),gt=Z(32);h("tabPanel",gt),d(),h("active",a.isActive),d(3),h("active",o.isActive),d(3),h("active",m.isActive),d(3),h("active",p.isActive),d(3),h("active",x.isActive),d(3),h("active",S.isActive),d(3),h("active",B.isActive),d(3),h("active",we.isActive),d(3),h("active",Ve.isActive),d(3),h("active",Fe.isActive)}},dependencies:[gr,_r,pr,Fn,On,ma],styles:[".panel-container[_ngcontent-%COMP%]{padding:16px}"]})}}return r})();function Pl(r,n){if(r&1&&(l(0,"mat-option",5),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}var ha=(()=>{class r{constructor(){this.selectedDate=f(Gi(new Date(new Date().getTime()-6e4))),this.languages=le,this.numeric=f(void 0),this.style=f(void 0),this.locale=f(void 0),this.options=I(()=>({locale:this.locale(),numeric:this.numeric(),style:this.style()}))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-relative-time"]],decls:42,vars:16,consts:[["picker",""],[1,"fields-container"],["matInput","","placeholder","Choose a date","type","datetime-local",3,"ngModelChange","ngModel"],["mat-icon-button","","matIconSuffix","",3,"click"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){if(t&1){let a=dt();l(0,"div",1)(1,"mat-form-field")(2,"mat-label"),c(3,"Date"),s(),l(4,"input",2,0),y("ngModelChange",function(m){return he(a),v(i.selectedDate,m)||(i.selectedDate=m),fe(m)}),s(),g(),l(6,"button",3),A("click",function(){he(a);let m=Z(5);return fe(m.showPicker())}),l(7,"mat-icon"),c(8,"today"),s()()(),l(9,"mat-form-field")(10,"mat-label"),c(11,"Locale"),s(),l(12,"mat-select",4),y("ngModelChange",function(m){return he(a),v(i.locale,m)||(i.locale=m),fe(m)}),l(13,"mat-option",5),c(14,"Browser default"),s(),V(15,Pl,2,2,"mat-option",5,z),s(),g(),s(),l(17,"mat-form-field")(18,"mat-label"),c(19,"Numeric"),s(),l(20,"mat-select",4),y("ngModelChange",function(m){return he(a),v(i.numeric,m)||(i.numeric=m),fe(m)}),l(21,"mat-option",5),c(22,"Browser default"),s(),l(23,"mat-option",5),c(24,"auto"),s(),l(25,"mat-option",5),c(26,"always"),s()(),g(),s(),l(27,"mat-form-field")(28,"mat-label"),c(29,"Style"),s(),l(30,"mat-select",4),y("ngModelChange",function(m){return he(a),v(i.style,m)||(i.style=m),fe(m)}),l(31,"mat-option",5),c(32,"Browser default"),s(),l(33,"mat-option",5),c(34,"long"),s(),l(35,"mat-option",5),c(36,"short"),s(),l(37,"mat-option",5),c(38,"narrow"),s()(),g(),s()(),l(39,"p"),c(40),ne(41,"intlRelativeTime"),s()}t&2&&(d(4),b("ngModel",i.selectedDate),_(),d(8),b("ngModel",i.locale),_(),d(),h("value",void 0),d(2),N(i.languages),d(5),b("ngModel",i.numeric),_(),d(),h("value",void 0),d(2),h("value","auto"),d(2),h("value","always"),d(5),b("ngModel",i.style),_(),d(),h("value",void 0),d(2),h("value","long"),d(2),h("value","short"),d(2),h("value","narrow"),d(3),M(_e(41,13,i.selectedDate(),i.options())))},dependencies:[oe,be,re,ee,te,Ee,pi,Ui,ae,G,U,Xt,Ho],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return r})();var fa=["acre","bit","byte","celsius","centimeter","day","degree","fahrenheit","fluid-ounce","foot","gallon","gigabit","gigabyte","gram","hectare","hour","inch","kilobit","kilobyte","kilogram","kilometer","liter","megabit","megabyte","meter","mile","mile-scandinavian","milliliter","millimeter","millisecond","minute","month","ounce","percent","petabyte","pound","second","stone","terabit","terabyte","week","yardv","year"];function Al(r,n){if(r&1&&(l(0,"mat-option",3),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}function Vl(r,n){if(r&1&&(l(0,"mat-option",3),c(1),s()),r&2){let e=n.$implicit;h("value",e),d(),M(e)}}var pa=(()=>{class r{constructor(){this.enteredNumber=f("1"),this.selectedUnit=f("hour"),this.languages=le,this.units=fa,this.locale=f(void 0),this.notation=f(void 0),this.signDisplay=f(void 0),this.unitDisplay=f(void 0),this.minimumIntegerDigits=f(void 0),this.minimumFractionDigits=f(void 0),this.maximumFractionDigits=f(void 0),this.minimumSignificantDigits=f(void 0),this.maximumSignificantDigits=f(void 0),this.options=I(()=>({locale:this.locale(),notation:this.notation(),signDisplay:this.signDisplay(),unitDisplay:this.unitDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=D({type:r,selectors:[["app-unit"]],decls:94,vars:32,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(l(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),s(),l(4,"input",1),y("ngModelChange",function(o){return v(i.enteredNumber,o)||(i.enteredNumber=o),o}),s(),g(),s(),l(5,"mat-form-field")(6,"mat-label"),c(7,"Unit"),s(),l(8,"mat-select",2),y("ngModelChange",function(o){return v(i.selectedUnit,o)||(i.selectedUnit=o),o}),V(9,Al,2,2,"mat-option",3,z),s(),g(),s(),l(11,"mat-form-field")(12,"mat-label"),c(13,"Locale"),s(),l(14,"mat-select",2),y("ngModelChange",function(o){return v(i.locale,o)||(i.locale=o),o}),l(15,"mat-option",3),c(16,"Browser default"),s(),V(17,Vl,2,2,"mat-option",3,z),s(),g(),s(),l(19,"mat-form-field")(20,"mat-label"),c(21,"Unit display"),s(),l(22,"mat-select",2),y("ngModelChange",function(o){return v(i.unitDisplay,o)||(i.unitDisplay=o),o}),l(23,"mat-option",3),c(24,"Browser default"),s(),l(25,"mat-option",3),c(26,"narrow"),s(),l(27,"mat-option",3),c(28,"short"),s(),l(29,"mat-option",3),c(30,"long"),s()(),g(),s(),l(31,"mat-form-field")(32,"mat-label"),c(33,"Notation"),s(),l(34,"mat-select",2),y("ngModelChange",function(o){return v(i.notation,o)||(i.notation=o),o}),l(35,"mat-option",3),c(36,"Browser default"),s(),l(37,"mat-option",3),c(38,"standard"),s(),l(39,"mat-option",3),c(40,"scientific"),s(),l(41,"mat-option",3),c(42,"engineering"),s(),l(43,"mat-option",3),c(44,"compact"),s()(),g(),s(),l(45,"mat-form-field")(46,"mat-label"),c(47,"Sign display"),s(),l(48,"mat-select",2),y("ngModelChange",function(o){return v(i.signDisplay,o)||(i.signDisplay=o),o}),l(49,"mat-option",3),c(50,"Browser default"),s(),l(51,"mat-option",3),c(52,"auto"),s(),l(53,"mat-option",3),c(54,"always"),s(),l(55,"mat-option",3),c(56,"exceptZero"),s(),l(57,"mat-option",3),c(58,"negative"),s(),l(59,"mat-option",3),c(60,"never"),s()(),g(),s(),l(61,"mat-form-field")(62,"mat-label"),c(63,"Minimum integer digits"),s(),l(64,"input",4),y("ngModelChange",function(o){return v(i.minimumIntegerDigits,o)||(i.minimumIntegerDigits=o),o}),s(),g(),l(65,"mat-error"),c(66,"Please enter a number from 1 to 21"),s()(),l(67,"mat-form-field")(68,"mat-label"),c(69,"Minimum fraction digits"),s(),l(70,"input",5),y("ngModelChange",function(o){return v(i.minimumFractionDigits,o)||(i.minimumFractionDigits=o),o}),s(),g(),l(71,"mat-error"),c(72,"Please enter a number from 0 to 20"),s()(),l(73,"mat-form-field")(74,"mat-label"),c(75,"Maximum fraction digits"),s(),l(76,"input",5),y("ngModelChange",function(o){return v(i.maximumFractionDigits,o)||(i.maximumFractionDigits=o),o}),s(),g(),l(77,"mat-error"),c(78,"Please enter a number from 0 to 20"),s()(),l(79,"mat-form-field")(80,"mat-label"),c(81,"Minimum significant digits"),s(),l(82,"input",4),y("ngModelChange",function(o){return v(i.minimumSignificantDigits,o)||(i.minimumSignificantDigits=o),o}),s(),g(),l(83,"mat-error"),c(84,"Please enter a number from 1 to 21"),s()(),l(85,"mat-form-field")(86,"mat-label"),c(87,"Maximum significant digits"),s(),l(88,"input",4),y("ngModelChange",function(o){return v(i.maximumSignificantDigits,o)||(i.maximumSignificantDigits=o),o}),s(),g(),l(89,"mat-error"),c(90,"Please enter a number from 1 to 21"),s()()(),l(91,"p"),c(92),ne(93,"intlUnit"),s()),t&2&&(d(4),b("ngModel",i.enteredNumber),_(),d(4),b("ngModel",i.selectedUnit),_(),d(),N(i.units),d(5),b("ngModel",i.locale),_(),d(),h("value",void 0),d(2),N(i.languages),d(5),b("ngModel",i.unitDisplay),_(),d(),h("value",void 0),d(2),h("value","narrow"),d(2),h("value","short"),d(2),h("value","long"),d(5),b("ngModel",i.notation),_(),d(),h("value",void 0),d(2),h("value","standard"),d(2),h("value","scientific"),d(2),h("value","engineering"),d(2),h("value","compact"),d(5),b("ngModel",i.signDisplay),_(),d(),h("value",void 0),d(2),h("value","auto"),d(2),h("value","always"),d(2),h("value","exceptZero"),d(2),h("value","negative"),d(2),h("value","never"),d(5),b("ngModel",i.minimumIntegerDigits),_(),d(6),b("ngModel",i.minimumFractionDigits),_(),d(6),b("ngModel",i.maximumFractionDigits),_(),d(6),b("ngModel",i.minimumSignificantDigits),_(),d(6),b("ngModel",i.maximumSignificantDigits),_(),d(4),Ae(" ",hi(93,28,i.enteredNumber(),i.selectedUnit(),i.options()),`
`))},dependencies:[oe,be,Ne,re,et,Je,ee,te,Ee,ae,G,U,tt,Uo],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return r})();var Nl=[{path:"",component:ua,children:[{path:"date",component:na},{path:"decimal",component:ra},{path:"percent",component:la},{path:"currency",component:Qo},{path:"unit",component:pa},{path:"language",component:aa},{path:"country",component:Yo},{path:"list",component:sa},{path:"relative-time",component:ha},{path:"duration",component:oa},{path:"",redirectTo:"date",pathMatch:"full"}]}],C_=Nl;export{C_ as default};
