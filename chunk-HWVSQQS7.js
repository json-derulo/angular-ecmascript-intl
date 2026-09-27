import{$a as ne,$b as At,A as Ji,Aa as se,Ab as ua,B as ri,Ba as ee,Bb as fa,C as ea,Ca as te,D as Ye,Da as K,E as kt,Ea as G,F as re,Fa as q,Fb as pa,G as ta,Ga as f,H as hn,Ha as s,I as Ht,Ia as l,Ib as ha,J as Ue,Ja as ve,Jb as Tt,K as na,Ka as vn,Kb as Te,L as Ke,La as xn,Lb as Kt,M as k,Ma as Cn,Mb as ga,N as jt,Na as bt,Nb as it,O as u,Oa as _t,Ob as ba,P as gn,Pa as U,Pb as Ot,Q as Dt,Qb as mi,R as Ce,Ra as be,Rb as _a,S as Se,Sa as Ae,Sb as ya,T as ia,Ta as Z,Tb as Qe,U as Le,Ua as Et,Ub as va,V as Be,Va as Ze,Vb as xa,W as bn,Wa as L,Wb as Oe,X,Xa as B,Xb as ui,Y as J,Ya as sa,Yb as fi,Z as _n,Za as la,Zb as at,_ as g,_a as si,_b as _e,a as D,aa,ab as li,ac as Ca,b as j,ba as ct,bb as Y,bc as Xt,c as ye,ca as mt,cb as qt,cc as wn,d as Ee,da as He,db as c,dc as Mn,e as Mt,ea as tt,eb as T,ec as rt,f as R,fa as Ne,fb as je,g as Ui,ga as z,gb as v,gc as Sa,h as un,ha as ht,hb as x,hc as wa,i as Gi,ia as d,ib as C,ic as Ma,j as qe,ja as Ut,jb as ie,k as qi,ka as nt,kb as me,l as Ve,la as xe,lb as Me,m as Yi,ma as _,mb as Sn,n as fn,na as y,nb as da,o as Ki,oa as oe,p as Xi,pa as Gt,pb as F,q as et,qa as oi,qb as Re,r as We,ra,rb as Nt,s as ii,sa as I,sb as Yt,t as Zi,ta as Xe,tb as ca,u as Qi,ua as V,ub as Ie,v as pn,va as ce,vb as O,wa as oa,wb as It,xa as we,xb as di,y as $i,ya as gt,yb as ma,z as ai,za as yn,zb as ci}from"./chunk-QOK6USQC.js";var Ra=(()=>{class a{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||a)(oe(xe),oe(z))};static \u0275dir=V({type:a})}return a})(),Fa=(()=>{class a extends Ra{static \u0275fac=(()=>{let e;return function(i){return(e||(e=tt(a)))(i||a)}})();static \u0275dir=V({type:a,features:[we]})}return a})(),bi=new k("");var Ro={provide:bi,useExisting:Ue(()=>ke),multi:!0};function Fo(){let a=ci()?ci().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var Po=new k(""),ke=(()=>{class a extends Ra{_compositionMode;_composing=!1;constructor(e,t,i){super(e,t),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Fo())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||a)(oe(xe),oe(z),oe(Po,8))};static \u0275dir=V({type:a,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,i){t&1&&U("input",function(r){return i._handleInput(r.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(r){return i._compositionEnd(r.target.value)})},standalone:!1,features:[ie([Ro]),we]})}return a})();function _i(a){return a==null||yi(a)===0}function yi(a){return a==null?null:Array.isArray(a)||typeof a=="string"?a.length:a instanceof Set?a.size:null}var Vt=new k(""),vi=new k(""),Vo=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,yt=class{static min(n){return Pa(n)}static max(n){return Va(n)}static required(n){return La(n)}static requiredTrue(n){return Lo(n)}static email(n){return Bo(n)}static minLength(n){return zo(n)}static maxLength(n){return Wo(n)}static pattern(n){return Ho(n)}static nullValidator(n){return Dn()}static compose(n){return Ua(n)}static composeAsync(n){return Ga(n)}};function Pa(a){return n=>{if(n.value==null||a==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<a?{min:{min:a,actual:n.value}}:null}}function Va(a){return n=>{if(n.value==null||a==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>a?{max:{max:a,actual:n.value}}:null}}function La(a){return _i(a.value)?{required:!0}:null}function Lo(a){return a.value===!0?null:{required:!0}}function Bo(a){return _i(a.value)||Vo.test(a.value)?null:{email:!0}}function zo(a){return n=>{let e=n.value?.length??yi(n.value);return e===null||e===0?null:e<a?{minlength:{requiredLength:a,actualLength:e}}:null}}function Wo(a){return n=>{let e=n.value?.length??yi(n.value);return e!==null&&e>a?{maxlength:{requiredLength:a,actualLength:e}}:null}}function Ho(a){if(!a)return Dn;let n,e;return typeof a=="string"?(e="",a.charAt(0)!=="^"&&(e+="^"),e+=a,a.charAt(a.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=a.toString(),n=a),t=>{if(_i(t.value))return null;let i=t.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Dn(a){return null}function Ba(a){return a!=null}function za(a){return oi(a)?Gi(a):a}function Wa(a){let n={};return a.forEach(e=>{n=e!=null?D(D({},n),e):n}),Object.keys(n).length===0?null:n}function Ha(a,n){return n.map(e=>e(a))}function jo(a){return!a.validate}function ja(a){return a.map(n=>jo(n)?n:e=>n.validate(e))}function Ua(a){if(!a)return null;let n=a.filter(Ba);return n.length==0?null:function(e){return Wa(Ha(e,n))}}function xi(a){return a!=null?Ua(ja(a)):null}function Ga(a){if(!a)return null;let n=a.filter(Ba);return n.length==0?null:function(e){let t=Ha(e,n).map(za);return fn(t).pipe(Ve(Wa))}}function Ci(a){return a!=null?Ga(ja(a)):null}function ka(a,n){return a===null?[n]:Array.isArray(a)?[...a,n]:[a,n]}function qa(a){return a._rawValidators}function Ya(a){return a._rawAsyncValidators}function pi(a){return a?Array.isArray(a)?a:[a]:[]}function En(a,n){return Array.isArray(a)?a.includes(n):a===n}function Da(a,n){let e=pi(n);return pi(a).forEach(i=>{En(e,i)||e.push(i)}),e}function Ea(a,n){return pi(n).filter(e=>!En(a,e))}var Nn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=xi(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Ci(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},vt=class extends Nn{name;get formDirective(){return null}get path(){return null}};var Zt="VALID",kn="INVALID",Rt="PENDING",Qt="DISABLED",ut=class{},In=class extends ut{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Jt=class extends ut{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},en=class extends ut{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Ft=class extends ut{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Tn=class extends ut{source;constructor(n){super(),this.source=n}},Pt=class extends ut{source;constructor(n){super(),this.source=n}};function Ka(a){return(Pn(a)?a.validators:a)||null}function Uo(a){return Array.isArray(a)?xi(a):a||null}function Xa(a,n){return(Pn(n)?n.asyncValidators:a)||null}function Go(a){return Array.isArray(a)?Ci(a):a||null}function Pn(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function qo(a,n,e){let t=a.controls;if(!(n?Object.keys(t):t).length)throw new Ht(1e3,"");if(!Za(t,e))throw new Ht(1001,"")}function Yo(a,n,e){a._forEachChild((t,i)=>{if(e[i]===void 0)throw new Ht(-1002,"")})}var On=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=g(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Re(this.statusReactive)}set status(n){Re(()=>this.statusReactive.set(n))}_status=F(()=>this.statusReactive());statusReactive=g(void 0);get valid(){return this.status===Zt}get invalid(){return this.status===kn}get pending(){return this.status===Rt}get disabled(){return this.status===Qt}get enabled(){return this.status!==Qt}errors;get pristine(){return Re(this.pristineReactive)}set pristine(n){Re(()=>this.pristineReactive.set(n))}_pristine=F(()=>this.pristineReactive());pristineReactive=g(!0);get dirty(){return!this.pristine}get touched(){return Re(this.touchedReactive)}set touched(n){Re(()=>this.touchedReactive.set(n))}_touched=F(()=>this.touchedReactive());touchedReactive=g(!1);get untouched(){return!this.touched}_events=new R;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Da(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Da(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Ea(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Ea(n,this._rawAsyncValidators))}hasValidator(n){return En(this._rawValidators,n)}hasAsyncValidator(n){return En(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(j(D({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new en(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new en(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(j(D({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Jt(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new Jt(!0,t))}markAsPending(n={}){this.status=Rt;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ft(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(j(D({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Qt,this.errors=null,this._forEachChild(i=>{i.disable(j(D({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new In(this.value,t)),this._events.next(new Ft(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(j(D({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Zt,this._forEachChild(t=>{t.enable(j(D({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(j(D({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Zt||this.status===Rt)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new In(this.value,e)),this._events.next(new Ft(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(j(D({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Qt:Zt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Rt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=za(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,i)=>t&&t._find(i),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new Ft(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new X,this.statusChanges=new X}_calculateStatus(){return this._allControlsDisabled()?Qt:this.errors?kn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Rt)?Rt:this._anyControlsHaveStatus(kn)?kn:Zt}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),i=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),i&&this._events.next(new Jt(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new en(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Pn(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Uo(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Go(this._rawAsyncValidators)}_updateHasRequiredValidator(){Re(()=>this._hasRequired.set(this.hasValidator(yt.required)))}};function Za(a,n){return Object.hasOwn(a,n)}function Ko(a){return a.tagName==="INPUT"||a.tagName==="SELECT"||a.tagName==="TEXTAREA"}function Xo(a,n,e,t){switch(e){case"name":a.setAttribute(n,e,t);break;case"disabled":case"readonly":case"required":t?a.setAttribute(n,e,""):a.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?a.setAttribute(n,e,t.toString()):a.removeAttribute(n,e);break}}var hi=class{kind;context;control;message;constructor({kind:n,context:e,control:t}){this.kind=n,this.context=e,this.control=t}};function Qa(a){return typeof a=="number"?a:parseFloat(a)}var Si=(()=>{class a{_validator=Dn;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Dn,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,features:[He]})}return a})(),Zo={provide:Vt,useExisting:Ue(()=>ot),multi:!0},ot=(()=>{class a extends Si{max;inputName="max";normalizeInput=e=>Qa(e);createValidator=e=>Va(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=tt(a)))(i||a)}})();static \u0275dir=V({type:a,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(t,i){t&2&&se("max",i._enabled?i.max:null)},inputs:{max:"max"},standalone:!1,features:[ie([Zo]),we]})}return a})(),Qo={provide:Vt,useExisting:Ue(()=>st),multi:!0},st=(()=>{class a extends Si{min;inputName="min";normalizeInput=e=>Qa(e);createValidator=e=>Pa(e);static \u0275fac=(()=>{let e;return function(i){return(e||(e=tt(a)))(i||a)}})();static \u0275dir=V({type:a,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(t,i){t&2&&se("min",i._enabled?i.min:null)},inputs:{min:"min"},standalone:!1,features:[ie([Qo]),we]})}return a})(),$o={provide:Vt,useExisting:Ue(()=>$a),multi:!0};var $a=(()=>{class a extends Si{required;inputName="required";normalizeInput=O;createValidator=e=>La;enabled(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=tt(a)))(i||a)}})();static \u0275dir=V({type:a,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,i){t&2&&se("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ie([$o]),we]})}return a})();var Jo=new k(""),Vn=new k("",{factory:()=>wi}),wi="always";function es(a,n){return[...n.path,a]}function Na(a,n,e=wi){Mi(a,n),n.valueAccessor.writeValue(a.value),(a.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(a.disabled),ns(a,n),as(a,n),is(a,n),ts(a,n)}function Ia(a,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),Rn(a,n),a&&(n._invokeOnDestroyCallbacks(),a._registerOnCollectionChange(()=>{}))}function An(a,n){a.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function ts(a,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};a.registerOnDisabledChange(e),n._registerOnDestroy(()=>{a._unregisterOnDisabledChange(e)})}}function Mi(a,n){let e=qa(a);n.validator!==null?a.setValidators(ka(e,n.validator)):typeof e=="function"&&a.setValidators([e]);let t=Ya(a);n.asyncValidator!==null?a.setAsyncValidators(ka(t,n.asyncValidator)):typeof t=="function"&&a.setAsyncValidators([t]);let i=()=>a.updateValueAndValidity();An(n._rawValidators,i),An(n._rawAsyncValidators,i)}function Rn(a,n){let e=!1;if(a!==null){if(n.validator!==null){let i=qa(a);if(Array.isArray(i)&&i.length>0){let o=i.filter(r=>r!==n.validator);o.length!==i.length&&(e=!0,a.setValidators(o))}}if(n.asyncValidator!==null){let i=Ya(a);if(Array.isArray(i)&&i.length>0){let o=i.filter(r=>r!==n.asyncValidator);o.length!==i.length&&(e=!0,a.setAsyncValidators(o))}}}let t=()=>{};return An(n._rawValidators,t),An(n._rawAsyncValidators,t),e}function ns(a,n){n.valueAccessor.registerOnChange(e=>{a._pendingValue=e,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&Ja(a,n)})}function is(a,n){n.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&Ja(a,n),a.updateOn!=="submit"&&a.markAsTouched()})}function Ja(a,n){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function as(a,n){let e=(t,i)=>{n.valueAccessor.writeValue(t),i&&n.viewToModelUpdate(t)};a.registerOnChange(e),n._registerOnDestroy(()=>{a._unregisterOnChange(e)})}function er(a,n){a==null,Mi(a,n)}function rs(a,n){return Rn(a,n)}function os(a,n){if(!Object.hasOwn(a,"model"))return!1;let e=a.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function ss(a){return Object.getPrototypeOf(a.constructor)===Fa}function tr(a,n){a._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function ls(a,n){if(!n)return null;Array.isArray(n);let e,t,i;return n.forEach(o=>{o.constructor===ke?e=o:ss(o)?t=o:i=o}),i||t||e||null}function ds(a,n){let e=a.indexOf(n);e>-1&&a.splice(e,1)}var cs={provide:Jo,useFactory:()=>{let a=u($e,{self:!0});return{setParseErrors:n=>{a.setParseErrorSource(n)},set onReset(n){a.onReset=n}}}},$e=class extends Nn{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Pt&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=ls(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,t){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(bn)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(Ie);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new Ee,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof Pt&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(i=>{this.control?.markAsDirty(),this.control?.setValue(i,{emitModelToViewChange:!1}),this.viewToModelUpdate(i)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Ko(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof $a))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let t=this.control,i=this.customControlBindings;Object.is(i.value,t.value)||(i.value=t.value,n.setCustomControlModelInput(t.value)),this.bindControlProperty(n,i,"touched",t.touched),this.bindControlProperty(n,i,"dirty",t.dirty),this.bindControlProperty(n,i,"valid",t.valid),this.bindControlProperty(n,i,"invalid",t.invalid),this.bindControlProperty(n,i,"pending",t.pending),this.bindControlProperty(n,i,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(n,i,"required",this.isRequired);let o=t.errors;if(i.errors!==o){i.errors=o;let r=this._convertErrors(o);n.setInputOnDirectives("errors",r)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,t,i){if(e[t]===i)return;e[t]=i;let o=n.setInputOnDirectives(t,i);this.isNativeFormElement&&!o&&(t==="disabled"||t==="required")&&this.renderer&&Xo(this.renderer,n.nativeElement,t,i)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([t,i])=>new hi({context:i,kind:t,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,t=F(()=>{let i=n();return i.length===0?null:i.reduce((o,r)=>(o[r.kind]=r,o),{})});this.parseErrorsValidator=(()=>e).bind(this),ct(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},gi=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ue=(()=>{class a extends gi{constructor(e){super(e)}static \u0275fac=function(t){return new(t||a)(oe($e,2))};static \u0275dir=V({type:a,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,i){t&2&&Y("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[we]})}return a})();var Fn=class extends On{constructor(n,e,t){super(Ka(e),Xa(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let t=this._find(n);return t||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let t=this._find(n);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){Re(()=>{Yo(this,!0,n),Object.keys(n).forEach(t=>{qo(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let i=this._find(t);i&&i.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,i)=>{t.reset(n?n[i]:null,j(D({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Pt(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,i)=>((t.enabled||this.disabled)&&(e[i]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((i,o)=>{t=e(t,i,o)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return Za(this.controls,n)?this.controls[n]:null}};var ms={provide:vt,useExisting:Ue(()=>tn)},$t=Promise.resolve(),tn=(()=>{class a extends vt{callSetDisabledState;get submitted(){return Re(this.submittedReactive)}_submitted=F(()=>this.submittedReactive());submittedReactive=g(!1);_directives=new Set;form;ngSubmit=new X;options;constructor(e,t,i){super(),this.callSetDisabledState=i,this.form=new Fn({},xi(e),Ci(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){$t.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){$t.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){$t.then(()=>{let t=this._findContainer(e.path),i=new Fn({});er(i,e),t.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){$t.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){$t.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),tr(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Tn(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||a)(oe(Vt,10),oe(vi,10),oe(Vn,8))};static \u0275dir=V({type:a,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,i){t&1&&U("submit",function(r){return i.onSubmit(r)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ie([ms]),we]})}return a})();function Ta(a,n){let e=a.indexOf(n);e>-1&&a.splice(e,1)}function Oa(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var nr=class extends On{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(Ka(e),Xa(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Pn(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Oa(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){Re(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Pt(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Ta(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Ta(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Oa(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var us=a=>a instanceof nr;var fs=(()=>{class a extends vt{callSetDisabledState;get submitted(){return Re(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=F(()=>this._submittedReactive());_submittedReactive=g(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Rn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Ia(e.control||null,e,!1),ds(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,tr(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Tn(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,i=this.form.get(e.path);t!==i&&(Ia(t||null,e),us(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);er(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&rs(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Mi(this.form,this),this._oldForm&&Rn(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||a)(oe(Vt,10),oe(vi,10),oe(Vn,8))};static \u0275dir=V({type:a,features:[we,He]})}return a})(),ps={provide:vt,useExisting:Ue(()=>nn)},nn=(()=>{class a extends fs{form=null;ngSubmit=new X;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=tt(a)))(i||a)}})();static \u0275dir=V({type:a,selectors:[["","formGroup",""]],hostBindings:function(t,i){t&1&&U("submit",function(r){return i.onSubmit(r)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ie([ps]),we]})}return a})(),hs={provide:$e,useExisting:Ue(()=>le)},Aa=Promise.resolve(),le=(()=>{class a extends $e{_changeDetectorRef;callSetDisabledState;control=new nr;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new X;constructor(e,t,i,o,r,m,p,S){super(p,S,o),this._changeDetectorRef=r,this.callSetDisabledState=m,this._parent=e,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),os(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Na(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Na(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Aa.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,i=t!==0&&O(t);Aa.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?es(e,this._parent):[e]}static \u0275fac=function(t){return new(t||a)(oe(vt,9),oe(Vt,10),oe(vi,10),oe(bi,10),oe(Ie,8),oe(Vn,8),oe(Le,8),oe(xe,8))};static \u0275dir=V({type:a,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[ie([hs,cs]),we,He,oa(null)]})}return a})();var gs={provide:bi,useExisting:Ue(()=>Ge),multi:!0},Ge=(()=>{class a extends Fa{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(i){return(e||(e=tt(a)))(i||a)}})();static \u0275dir=V({type:a,selectors:[["input","type","number","formControlName","",3,"ngNoCva",""],["input","type","number","formControl","",3,"ngNoCva",""],["input","type","number","ngModel","",3,"ngNoCva",""]],hostBindings:function(t,i){t&1&&U("input",function(r){return i.onChange(r.target.value)})("blur",function(){return i.onTouched()})},standalone:!1,features:[ie([gs]),we]})}return a})();var bs=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=Xe({type:a});static \u0275inj=Ke({})}return a})();var fe=(()=>{class a{static withConfig(e){return{ngModule:a,providers:[{provide:Vn,useValue:e.callSetDisabledState??wi}]}}static \u0275fac=function(t){return new(t||a)};static \u0275mod=Xe({type:a});static \u0275inj=Ke({imports:[bs]})}return a})();var ar=Symbol("FIELD_TREE");var rr=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),ir=class{reducer;create;brand;[rr];constructor(n,e){this.reducer=n,this.create=e}};function an(a){return typeof a=="function"&&a[ar]===!0}var Ln=new k("");var ki=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Mt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(We(e=>e.some(t=>t.target===n)),ri({bufferSize:1,refCount:!0}),re(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Bn=(()=>{class a{_cleanupErrorListener;_observers=new Map;_ngZone=u(J);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new ki(i)),this._observers.get(i).observe(e)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac})}return a})();var Q=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,selectors:[["mat-label"]]})}return a})(),Ei=new k("MatError"),lt=(()=>{class a{id=u(Oe).getId("mat-mdc-error-");static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(t,i){t&2&&_t("id",i.id)},inputs:{id:"id"},features:[ie([{provide:Ei,useExisting:a}])]})}return a})(),Di=(()=>{class a{align="start";id=u(Oe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,i){t&2&&(_t("id",i.id),se("align",null),Y("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return a})(),ur=new k("MatPrefix");var Ni=new k("MatSuffix"),rn=(()=>{class a{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[ie([{provide:Ni,useExisting:a}])]})}return a})(),fr=new k("FloatingLabelParent"),or=(()=>{class a{_elementRef=u(z);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(Bn);_ngZone=u(J);_parent=u(fr);_resizeSubscription=new Ee;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return _s(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,i){t&2&&Y("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return a})();function _s(a){let n=a;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var sr="mdc-line-ripple--active",zn="mdc-line-ripple--deactivating",lr=(()=>{class a{_elementRef=u(z);_cleanupTransitionEnd;constructor(){let e=u(J),t=u(xe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(zn),e.add(sr)}deactivate(){this._elementRef.nativeElement.classList.add(zn)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(zn);e.propertyName==="opacity"&&i&&t.remove(sr,zn)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return a})(),dr=(()=>{class a{_elementRef=u(z);_ngZone=u(J);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){let e=["notch"];return I({type:a,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(o,r){if(o&1&&Ze(e,5),o&2){let m;L(m=B())&&(r._notch=m.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(o,r){o&2&&Y("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(o,r){o&1&&(Ae(),Cn(0,"div",1),vn(1,"div",2,0),Z(3),xn(),Cn(4,"div",3))},encapsulation:2})})()}return a})(),Lt=(()=>{class a{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a})}return a})();var Bt=new k("MatFormField"),Wn=new k("MAT_FORM_FIELD_DEFAULT_OPTIONS"),cr="fill",ys="auto",mr="fixed",vs="translateY(-50%)",de=(()=>{class a{_elementRef=u(z);_changeDetectorRef=u(Ie);_platform=u(Te);_idGenerator=u(Oe);_ngZone=u(J);_defaults=u(Wn,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return mt(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Yt("iconPrefixContainer");_textPrefixContainerSignal=Yt("textPrefixContainer");_iconSuffixContainerSignal=Yt("iconSuffixContainer");_textSuffixContainerSignal=Yt("textSuffixContainer");_prefixSuffixContainers=F(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ca(Q);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=At(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ys}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||cr;this._appearanceSignal.set(t)}_appearanceSignal=g(cr);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||mr}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||mr}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=at();constructor(){let e=this._defaults,t=u(rt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ct(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=an(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!an(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=F(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(Ye([void 0,void 0]),Ve(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),ai(),We(([[o,r],[m,p]])=>o!==m||r!==p)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!an(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(re(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),et(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){di({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=F(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(an(t)){let i=t();return e==="valid"?i.valid():e==="dirty"?i.dirty():e==="touched"?i.touched():e==="pending"?i.pending():e==="untouched"?!i.touched():e==="pristine"?!i.dirty():e==="invalid"?!i.valid():!1}else{let i=t;return e==="valid"?i.valid:e==="dirty"?i.dirty:e==="touched"?i.touched:e==="pending"?i.pending:e==="untouched"?i.untouched:e==="pristine"?i.pristine:e==="invalid"?i.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(m=>m.align==="start"):null,r=this._hintChildren?this._hintChildren.find(m=>m.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,i;if(t){let o=this._describedByIds||e;i=e.concat(t.filter(r=>r&&!o.includes(r)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,m=t?.getBoundingClientRect().width??0,p=i?.getBoundingClientRect().width??0,S=o?.getBoundingClientRect().width??0,h=this._currentDirection==="rtl"?"-1":"1",w=`${r+m}px`,M=`calc(${h} * (${w} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,A=`var(--mat-mdc-form-field-label-transform, ${vs} translateX(${M}))`,ae=r+m+p+S;return[A,ae]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){let e=["iconPrefixContainer"],t=["textPrefixContainer"],i=["iconSuffixContainer"],o=["textSuffixContainer"],r=["textField"],m=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],p=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function S(N,W){N&1&&ve(0,"span",21)}function h(N,W){if(N&1&&(s(0,"label",20),Z(1,1),ee(2,S,1,0,"span",21),l()),N&2){let b=be(2);f("floating",b._shouldLabelFloat())("monitorResize",b._hasOutline())("id",b._labelId),se("for",b._control.disableAutomaticLabeling?null:b._control.id),d(2),te(!b.hideRequiredMarker&&b._unwrapMaybeSignal(b._control.required)?2:-1)}}function w(N,W){if(N&1&&ee(0,h,3,5,"label",20),N&2){let b=be();te(b._hasFloatingLabel()?0:-1)}}function E(N,W){N&1&&ve(0,"div",7)}function M(N,W){}function A(N,W){if(N&1&&gt(0,M,0,0,"ng-template",13),N&2){be(2);let b=ne(1);f("ngTemplateOutlet",b)}}function ae(N,W){if(N&1&&(s(0,"div",9),ee(1,A,1,1,null,13),l()),N&2){let b=be();f("matFormFieldNotchedOutlineOpen",b._shouldLabelFloat()),d(),te(b._forceDisplayInfixLabel()?-1:1)}}function wt(N,W){N&1&&(s(0,"div",10,2),Z(2,2),l())}function wo(N,W){N&1&&(s(0,"div",11,3),Z(2,3),l())}function Mo(N,W){}function ko(N,W){if(N&1&&gt(0,Mo,0,0,"ng-template",13),N&2){be();let b=ne(1);f("ngTemplateOutlet",b)}}function Do(N,W){N&1&&(s(0,"div",14,4),Z(2,4),l())}function Eo(N,W){N&1&&(s(0,"div",15,5),Z(2,5),l())}function No(N,W){N&1&&ve(0,"div",16)}function Io(N,W){N&1&&(s(0,"div",18),Z(1,6),l())}function To(N,W){if(N&1&&(s(0,"mat-hint",22),c(1),l()),N&2){let b=be(2);f("id",b._hintLabelId),d(),T(b.hintLabel)}}function Oo(N,W){if(N&1&&(s(0,"div",19),ee(1,To,2,2,"mat-hint",22),Z(2,7),ve(3,"div",23),Z(4,8),l()),N&2){let b=be();d(),te(b.hintLabel?1:-1)}}return I({type:a,selectors:[["mat-form-field"]],contentQueries:function(W,b,H){if(W&1&&(sa(H,b._labelChild,Q,5),Et(H,Lt,5)(H,ur,5)(H,Ni,5)(H,Ei,5)(H,Di,5)),W&2){si();let De;L(De=B())&&(b._formFieldControl=De.first),L(De=B())&&(b._prefixChildren=De),L(De=B())&&(b._suffixChildren=De),L(De=B())&&(b._errorChildren=De),L(De=B())&&(b._hintChildren=De)}},viewQuery:function(W,b){if(W&1&&(la(b._iconPrefixContainerSignal,e,5)(b._textPrefixContainerSignal,t,5)(b._iconSuffixContainerSignal,i,5)(b._textSuffixContainerSignal,o,5),Ze(r,5)(e,5)(t,5)(i,5)(o,5)(or,5)(dr,5)(lr,5)),W&2){si(4);let H;L(H=B())&&(b._textField=H.first),L(H=B())&&(b._iconPrefixContainer=H.first),L(H=B())&&(b._textPrefixContainer=H.first),L(H=B())&&(b._iconSuffixContainer=H.first),L(H=B())&&(b._textSuffixContainer=H.first),L(H=B())&&(b._floatingLabel=H.first),L(H=B())&&(b._notchedOutline=H.first),L(H=B())&&(b._lineRipple=H.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(W,b){W&2&&Y("mat-mdc-form-field-label-always-float",b._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",b._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",b._hasIconSuffix)("mat-form-field-invalid",b._unwrapMaybeSignal(b._control.errorState))("mat-form-field-disabled",b._unwrapMaybeSignal(b._control.disabled))("mat-form-field-autofilled",b._unwrapMaybeSignal(b._control.autofilled))("mat-form-field-appearance-fill",b.appearance=="fill")("mat-form-field-appearance-outline",b.appearance=="outline")("mat-form-field-hide-placeholder",b._hasFloatingLabel()&&!b._shouldLabelFloat())("mat-primary",b.color!=="accent"&&b.color!=="warn")("mat-accent",b.color==="accent")("mat-warn",b.color==="warn")("ng-untouched",b._shouldForward("untouched"))("ng-touched",b._shouldForward("touched"))("ng-pristine",b._shouldForward("pristine"))("ng-dirty",b._shouldForward("dirty"))("ng-valid",b._shouldForward("valid"))("ng-invalid",b._shouldForward("invalid"))("ng-pending",b._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ie([{provide:Bt,useExisting:a},{provide:fr,useExisting:a}])],ngContentSelectors:p,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(W,b){if(W&1&&(Ae(m),gt(0,w,1,1,"ng-template",null,0,da),s(2,"div",6,1),U("click",function(De){return b._control.onContainerClick(De)}),ee(4,E,1,0,"div",7),s(5,"div",8),ee(6,ae,2,2,"div",9),ee(7,wt,3,0,"div",10),ee(8,wo,3,0,"div",11),s(9,"div",12),ee(10,ko,1,1,null,13),Z(11),l(),ee(12,Do,3,0,"div",14),ee(13,Eo,3,0,"div",15),l(),ee(14,No,1,0,"div",16),l(),s(15,"div",17),ee(16,Io,2,0,"div",18)(17,Oo,5,1,"div",19),l()),W&2){let H,De=b._unwrapMaybeSignal(b._control.disabled);d(2),Y("mdc-text-field--filled",!b._hasOutline())("mdc-text-field--outlined",b._hasOutline())("mdc-text-field--no-label",!b._hasFloatingLabel())("mdc-text-field--disabled",De)("mdc-text-field--invalid",b._unwrapMaybeSignal(b._control.errorState)),d(2),te(!b._hasOutline()&&!De?4:-1),d(2),te(b._hasOutline()?6:-1),d(),te(b._hasIconPrefix?7:-1),d(),te(b._hasTextPrefix?8:-1),d(2),te(!b._hasOutline()||b._forceDisplayInfixLabel()?10:-1),d(2),te(b._hasTextSuffix?12:-1),d(),te(b._hasIconSuffix?13:-1),d(),te(b._hasOutline()?-1:14),d(),Y("mat-mdc-form-field-subscript-dynamic-size",b.subscriptSizing==="dynamic");let Ao=b._getSubscriptMessageType();d(),te((H=Ao)==="error"?16:H==="hint"?17:-1)}},dependencies:[or,dr,fa,lr,Di],styles:[`.mdc-text-field {
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
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
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
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
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
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
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

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
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
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
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
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
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

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
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
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
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
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
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
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
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
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
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
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
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
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
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
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
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
`],encapsulation:2})})()}return a})();var on=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new R;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,i){this._multiple=n,this._emitChanges=t,this.compareWith=i,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Cs=20,pr=(()=>{class a{_ngZone=u(J);_platform=u(Te);_renderer=u(nt).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new R;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Cs){return this._platform.isBrowser?new Mt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(ii(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):qe()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(We(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,e)&&t.push(o)}),t}_targetContainsElement(e,t){let i=Kt(t),o=e.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac})}return a})();var Ss=20,xt=(()=>{class a{_platform=u(Te);_listeners;_viewportSize=null;_change=new R;_document=u(Be);constructor(){let e=u(J),t=u(nt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[t.listen("window","resize",i),t.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,o=i.getBoundingClientRect(),r=-o.top||e.body?.scrollTop||t.scrollY||i.scrollTop||0,m=-o.left||e.body?.scrollLeft||t.scrollX||i.scrollLeft||0;return{top:r,left:m}}change(e=Ss){return e>0?this._change.pipe(ii(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac})}return a})();var sn=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Ii=class extends sn{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,i,o,r){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=i,this.bindings=o||null,this.directives=r||null}},ln=class extends sn{templateRef;viewContainerRef;context;injector;constructor(n,e,t,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Ti=class extends sn{element;constructor(n){super(),this.element=n instanceof z?n.nativeElement:n}},Oi=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Ii)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof ln)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Ti)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Hn=class extends Oi{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,i=t.get(ra,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,i=n.injector||this._defaultInjector||Le.NULL,o=i.get(gn,t.injector);e=ma(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(i=>this.outletElement.appendChild(i)),t.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(t);i!==-1&&e.remove(i)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var jn=class{enable(){}disable(){}attach(){}};function Ri(a,n){return n.some(e=>{let t=a.bottom<e.top,i=a.top>e.bottom,o=a.right<e.left,r=a.left>e.right;return t||i||o||r})}function hr(a,n){return n.some(e=>{let t=a.top<e.top,i=a.bottom>e.bottom,o=a.left<e.left,r=a.right>e.right;return t||i||o||r})}function Kn(a,n){return new Un(a.get(pr),a.get(xt),a.get(J),n)}var Un=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:i}=this._viewportRuler.getViewportSize();Ri(e,[{width:t,height:i,bottom:i,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var dn=class{positionStrategy;scrollStrategy=new jn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var Gn=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var xr=(()=>{class a{_attachedOverlays=[];_document=u(Be);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac})}return a})(),Cr=(()=>{class a extends xr{_ngZone=u(J);_renderer=u(nt).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let i=t.length-1;i>-1;i--){let o=t[i];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac})}return a})(),Sr=(()=>{class a extends xr{_platform=u(Te);_ngZone=u(J);_renderer=u(nt).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,i),o.listen(t,"click",this._clickListener,i),o.listen(t,"auxclick",this._clickListener,i),o.listen(t,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Tt(e)};_clickListener=e=>{let t=Tt(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let m=o[r],p=m._outsidePointerEvents;if(!(!m.hasAttached()||!this.canReceiveEvent(m,e,p))){if(gr(m.overlayElement,t)||gr(m.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>p.next(e)):p.next(e)}}};static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac})}return a})();function gr(a,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===a)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var wr=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=I({type:a,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return a})(),Mr=(()=>{class a{_platform=u(Te);_containerElement;_document=u(Be);_styleLoader=u(it);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||ui()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let t=this._document.createElement("div");t.classList.add(e),ui()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(wr)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac})}return a})(),Fi=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,i){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Pi(a){return a&&a.nodeType===1}var Ai=new Set,qn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new R;_attachments=new R;_detachments=new R;_positionStrategy;_scrollStrategy;_locationChanges=Ee.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new R;_outsidePointerEvents=new R;_afterNextRenderRef;constructor(n,e,t,i,o,r,m,p,S,h=!1,w,E){this._portalOutlet=n,this._host=e,this._pane=t,this._config=i,this._ngZone=o,this._keyboardDispatcher=r,this._document=m,this._location=p,this._outsideClickDispatcher=S,this._animationsDisabled=h,this._injector=w,this._renderer=E,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Ai.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ht(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),Ai.delete(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Ai.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=D(D({},this._config),n),this._updateElementSize()}setDirection(n){this._config=j(D({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=_e(this._config.width),n.height=_e(this._config.height),n.minWidth=_e(this._config.minWidth),n.minHeight=_e(this._config.minHeight),n.maxWidth=_e(this._config.maxWidth),n.maxHeight=_e(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Pi(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Fi(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let i=mi(e||[]).filter(o=>!!o);i.length&&(t?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=ht(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},br="cdk-overlay-connected-position-bounding-box",ws=/([A-Za-z%]+)$/;function kr(a,n){return new Yn(n,a.get(xt),a.get(Be),a.get(Te),a.get(Mr))}var Yn=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new R;_resizeSubscription=Ee.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,i,o){this._viewportRuler=e,this._document=t,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(br),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,i=this._containerRect,o=[],r;for(let m of this._preferredPositions){let p=this._getOriginPoint(n,i,m),S=this._getOverlayPoint(p,e,m),h=this._getOverlayFit(S,e,t,m);if(h.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(m,p);return}if(this._canFitWithFlexibleDimensions(h,S,t)){o.push({position:m,origin:p,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(p,m)});continue}(!r||r.overlayFit.visibleArea<h.visibleArea)&&(r={overlayFit:h,overlayPoint:S,originPoint:p,position:m,overlayRect:e})}if(o.length){let m=null,p=-1;for(let S of o){let h=S.boundingBoxRect.width*S.boundingBoxRect.height*(S.position.weight||1);h>p&&(p=h,m=S)}this._isPushed=!1,this._applyPosition(m.position,m.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Ct(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(br),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof z?this._origin.nativeElement:Pi(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let i;if(t.originX=="center")i=n.left+n.width/2;else{let r=this._isRtl()?n.right:n.left,m=this._isRtl()?n.left:n.right;i=t.originX=="start"?r:m}e.left<0&&(i-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:i,y:o}}_getOverlayPoint(n,e,t){let i;t.overlayX=="center"?i=-e.width/2:t.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,e,t,i){let o=yr(e),{x:r,y:m}=n,p=this._getOffset(i,"x"),S=this._getOffset(i,"y");p&&(r+=p),S&&(m+=S);let h=0-r,w=r+o.width-t.width,E=0-m,M=m+o.height-t.height,A=this._subtractOverflows(o.width,h,w),ae=this._subtractOverflows(o.height,E,M),wt=A*ae;return{visibleArea:wt,isCompletelyWithinViewport:o.width*o.height===wt,fitsInViewportVertically:ae===o.height,fitsInViewportHorizontally:A==o.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let i=t.bottom-e.y,o=t.right-e.x,r=_r(this._overlayRef.getConfig().minHeight),m=_r(this._overlayRef.getConfig().minWidth),p=n.fitsInViewportVertically||r!=null&&r<=i,S=n.fitsInViewportHorizontally||m!=null&&m<=o;return p&&S}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=yr(e),o=this._viewportRect,r=Math.max(n.x+i.width-o.width,0),m=Math.max(n.y+i.height-o.height,0),p=Math.max(o.top-t.top-n.y,0),S=Math.max(o.left-t.left-n.x,0),h=0,w=0;return i.width<=o.width?h=S||-r:h=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,i.height<=o.height?w=p||-m:w=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:h,y:w},{x:n.x+h,y:n.y+w}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Ms(this._lastScrollVisibility,t)){let i=new Gn(n,t);this._positionChanges.next(i)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,i=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${i}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,i=this._isRtl(),o,r,m;if(e.overlayY==="top")r=n.y,o=t.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")m=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-m+this._getViewportMarginTop();else{let M=Math.min(t.bottom-n.y+t.top,n.y),A=this._lastBoundingBoxSize.height;o=M*2,r=n.y-M,o>A&&!this._isInitialRender&&!this._growAfterOpen&&(r=n.y-A/2)}let p=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,S=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,h,w,E;if(S)E=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),h=n.x-this._getViewportMarginStart();else if(p)w=n.x,h=t.right-n.x-this._getViewportMarginEnd();else{let M=Math.min(t.right-n.x+t.left,n.x),A=this._lastBoundingBoxSize.width;h=M*2,w=n.x-M,h>A&&!this._isInitialRender&&!this._growAfterOpen&&(w=n.x-A/2)}return{top:r,left:w,bottom:m,right:E,width:h,height:o}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.width=_e(t.width),i.height=_e(t.height),i.top=_e(t.top)||"auto",i.bottom=_e(t.bottom)||"auto",i.left=_e(t.left)||"auto",i.right=_e(t.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=_e(o)),r&&(i.maxWidth=_e(r))}this._lastBoundingBoxSize=t,Ct(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Ct(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Ct(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let h=this._viewportRuler.getViewportScrollPosition();Ct(t,this._getExactOverlayY(e,n,h)),Ct(t,this._getExactOverlayX(e,n,h))}else t.position="static";let m="",p=this._getOffset(e,"x"),S=this._getOffset(e,"y");p&&(m+=`translateX(${p}px) `),S&&(m+=`translateY(${S}px)`),t.transform=m.trim(),r.maxHeight&&(i?t.maxHeight=_e(r.maxHeight):o&&(t.maxHeight="")),r.maxWidth&&(i?t.maxWidth=_e(r.maxWidth):o&&(t.maxWidth="")),Ct(this._pane.style,t)}_getExactOverlayY(n,e,t){let i={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;i.bottom=`${r-(o.y+this._overlayRect.height)}px`}else i.top=_e(o.y);return i}_getExactOverlayX(n,e,t){let i={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let r;if(this._isRtl()?r=n.overlayX==="end"?"left":"right":r=n.overlayX==="end"?"right":"left",r==="right"){let m=this._document.documentElement.clientWidth;i.right=`${m-(o.x+this._overlayRect.width)}px`}else i.left=_e(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:hr(n,t),isOriginOutsideView:Ri(n,t),isOverlayClipped:hr(e,t),isOverlayOutsideView:Ri(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,i)=>t-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&mi(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof z)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function Ct(a,n){for(let e in n)Object.hasOwn(n,e)&&(a[e]=n[e]);return a}function _r(a){if(typeof a!="number"&&a!=null){let[n,e]=a.split(ws);return!e||e==="px"?parseFloat(n):null}return a||null}function yr(a){return{top:Math.floor(a.top),right:Math.floor(a.right),bottom:Math.floor(a.bottom),left:Math.floor(a.left),width:Math.floor(a.width),height:Math.floor(a.height)}}function Ms(a,n){return a===n?!0:a.isOriginClipped===n.isOriginClipped&&a.isOriginOutsideView===n.isOriginOutsideView&&a.isOverlayClipped===n.isOverlayClipped&&a.isOverlayOutsideView===n.isOverlayOutsideView}var cn=new k("OVERLAY_DEFAULT_CONFIG");function Dr(a,n){a.get(it).load(wr);let e=a.get(Mr),t=a.get(Be),i=a.get(Oe),o=a.get(yn),r=a.get(rt),m=a.get(xe,null,{optional:!0})||a.get(nt).createRenderer(null,null),p=new dn(n),S=a.get(cn,null,{optional:!0})?.usePopover??!0;p.direction=p.direction||r.value,!t.body||!("showPopover"in t.body)?p.usePopover=!1:p.usePopover=n?.usePopover??S;let h=t.createElement("div"),w=t.createElement("div");h.id=i.getId("cdk-overlay-"),h.classList.add("cdk-overlay-pane"),w.appendChild(h),p.usePopover&&(w.setAttribute("popover","manual"),w.classList.add("cdk-overlay-popover"));let E=p.usePopover?p.positionStrategy?.getPopoverInsertionPoint?.():null;return Pi(E)?E.after(w):E?.type==="parent"?E.element.appendChild(w):e.getContainerElement().appendChild(w),new qn(new Hn(h,o,a),w,h,p,a.get(J),a.get(Cr),t,a.get(ua),a.get(Sr),n?.disableAnimations??a.get(aa,null,{optional:!0})==="NoopAnimations",a.get(gn),m)}var ks=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Ds=new k("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let a=u(Le);return()=>Kn(a)}}),zt=(()=>{class a{elementRef=u(z);static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return a})(),Er=new k("cdk-connected-overlay-default-config"),Xn=(()=>{class a{_dir=u(rt,{optional:!0});_injector=u(Le);_overlayRef;_templatePortal;_backdropSubscription=Ee.EMPTY;_attachSubscription=Ee.EMPTY;_detachSubscription=Ee.EMPTY;_positionSubscription=Ee.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=u(Ds);_ngZone=u(J);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new X;positionChange=new X;attach=new X;detach=new X;overlayKeydown=new X;overlayOutsideClick=new X;constructor(){let e=u(Ut),t=u(Gt),i=u(Er,{optional:!0}),o=u(cn,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new ln(e,t),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=ks);let e=this._overlayRef=Dr(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Qe(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let i=this._getOriginElement(),o=Tt(t);(!i||i!==o&&!i.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new dn({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=kr(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof zt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof zt?this.origin.elementRef.nativeElement:this.origin instanceof z?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(ta(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",O],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",O],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",O],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",O],push:[2,"cdkConnectedOverlayPush","push",O],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",O],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",O],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[He]})}return a})();var Nr=(()=>{class a{_animationsDisabled=at();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||a)};static \u0275cmp=I({type:a,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&Y("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
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
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
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
`],encapsulation:2})}return a})();var Qn=new k("MAT_OPTION_PARENT_COMPONENT"),$n=new k("MatOptgroup");var Zn=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},$=(()=>{class a{_element=u(z);_changeDetectorRef=u(Ie);_parent=u(Qn,{optional:!0});group=u($n,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=u(Oe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=g(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new X;_text;_stateChanges=new R;constructor(){let e=u(it);e.load(wn),e.load(ba),this._signalDisableRipple=!!this._parent&&mt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Qe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Zn(this,e))}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){let e=["text"],t=[[["mat-icon"]],"*"],i=["mat-icon","*"];function o(p,S){if(p&1&&ve(0,"mat-pseudo-checkbox",1),p&2){let h=be();f("disabled",h.disabled)("state",h.selected?"checked":"unchecked")}}function r(p,S){if(p&1&&ve(0,"mat-pseudo-checkbox",3),p&2){let h=be();f("disabled",h.disabled)}}function m(p,S){if(p&1&&(s(0,"span",4),c(1),l()),p&2){let h=be();d(),je("(",h.group.label,")")}}return I({type:a,selectors:[["mat-option"]],viewQuery:function(S,h){if(S&1&&Ze(e,7),S&2){let w;L(w=B())&&(h._text=w.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(S,h){S&1&&U("click",function(){return h._selectViaInteraction()})("keydown",function(E){return h._handleKeydown(E)}),S&2&&(_t("id",h.id),se("aria-selected",h.selected)("aria-disabled",h.disabled.toString()),Y("mdc-list-item--selected",h.selected)("mat-mdc-option-multiple",h.multiple)("mat-mdc-option-active",h.active)("mdc-list-item--disabled",h.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",O]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:i,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(S,h){S&1&&(Ae(t),ee(0,o,1,2,"mat-pseudo-checkbox",1),Z(1),s(2,"span",2,0),Z(4,1),l(),ee(5,r,1,1,"mat-pseudo-checkbox",3),ee(6,m,2,1,"span",4),ve(7,"div",5)),S&2&&(te(h.multiple?0:-1),d(5),te(!h.multiple&&h.selected&&!h.hideSingleSelectionIndicator?5:-1),d(),te(h.group&&h.group._inert?6:-1),d(),f("matRippleTrigger",h._getHostElement())("matRippleDisabled",h.disabled||h.disableRipple))},dependencies:[Nr,Xt],styles:[`.mat-mdc-option {
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
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
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
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
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
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return a})();function Vi(a,n,e){if(e.length){let t=n.toArray(),i=e.toArray(),o=0;for(let r=0;r<a+1;r++)t[r].group&&t[r].group===i[o]&&o++;return o}return 0}function Li(a,n,e,t){return a<e?a:a+n>e+t?Math.max(0,a-t+n):e}var Jn=(()=>{class a{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),i=e().touched();return t&&i}static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac})}return a})();var Wt=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,t,i,o){this._defaultMatcher=n,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=o,e?mt(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return n?.isErrorState(t,e)??!1}};var As=new k("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let a=u(Le);return()=>Kn(a)}}),Rs=new k("MAT_SELECT_CONFIG"),Fs=new k("MatSelectTrigger"),Bi=class{source;value;constructor(n,e){this.source=n,this.value=e}},pe=(()=>{class a{_viewportRuler=u(xt);_changeDetectorRef=u(Ie);_elementRef=u(z);_dir=u(rt,{optional:!0});_idGenerator=u(Oe);_renderer=u(xe);_parentFormField=u(Bt,{optional:!0});ngControl=u($e,{self:!0,optional:!0});_liveAnnouncer=u(ya);_defaultOptions=u(Rs,{optional:!0});_animationsDisabled=at();_popoverLocation;_initialized=new R;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,o=Vi(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=Li(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Bi(this,e)}_scrollStrategyFactory=u(As);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new R;_errorStateTracker;stateChanges=new R;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=g(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(yt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Yi(()=>{let e=this.options;return e?e.changes.pipe(Ye(e),kt(()=>et(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(kt(()=>this.optionSelectionChanges))});openedChange=new X;_openedStream=this.openedChange.pipe(We(e=>e),Ve(()=>{}));_closedStream=this.openedChange.pipe(We(e=>!e),Ve(()=>{}));selectionChange=new X;valueChange=new X;constructor(){let e=u(Jn),t=u(tn,{optional:!0}),i=u(nn,{optional:!0}),o=u(new Nt("tabindex"),{optional:!0}),r=u(cn,{optional:!0}),m=u(Ln,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Wt(e,m||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new on(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(re(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(re(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Ye(null),re(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(pn(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,o=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&o&&!Qe(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let m=this.selected;r.onKeydown(e);let p=this.selected;p&&m!==p&&this._liveAnnouncer.announce(p.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,o=i===40||i===38,r=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!Qe(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let m=this.options.some(p=>!p.disabled&&!p.selected);this.options.forEach(p=>{p.disabled||(m?p.select():p.deselect())})}else{let m=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==m&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Qe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof zt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new va(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=et(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(re(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),et(...this.options.map(t=>t._stateChanges)).pipe(re(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Tt(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){let e=["trigger"],t=["panel"],i=[[["mat-select-trigger"]],"*"],o=["mat-select-trigger","*"];function r(w,E){if(w&1&&(s(0,"span",4),c(1),l()),w&2){let M=be();d(),T(M.placeholder)}}function m(w,E){w&1&&Z(0)}function p(w,E){if(w&1&&(s(0,"span",11),c(1),l()),w&2){let M=be(2);d(),T(M.triggerValue)}}function S(w,E){if(w&1&&(s(0,"span",5),ee(1,m,1,0)(2,p,2,1,"span",11),l()),w&2){let M=be();d(),te(M.customTrigger?1:2)}}function h(w,E){if(w&1){let M=bt();s(0,"div",12,1),U("keydown",function(ae){Ce(M);let wt=be();return Se(wt._handleKeydown(ae))}),Z(2,1),l()}if(w&2){let M=be();qt(M.panelClass),Y("mat-select-panel-animations-enabled",!M._animationsDisabled)("mat-primary",M._parentFormField?.color==="primary")("mat-accent",M._parentFormField?.color==="accent")("mat-warn",M._parentFormField?.color==="warn")("mat-undefined",!M._parentFormField?.color),se("id",M.id+"-panel")("aria-multiselectable",M.multiple)("aria-label",M.ariaLabel||null)("aria-labelledby",M._getPanelAriaLabelledby())}}return I({type:a,selectors:[["mat-select"]],contentQueries:function(E,M,A){if(E&1&&Et(A,Fs,5)(A,$,5)(A,$n,5),E&2){let ae;L(ae=B())&&(M.customTrigger=ae.first),L(ae=B())&&(M.options=ae),L(ae=B())&&(M.optionGroups=ae)}},viewQuery:function(E,M){if(E&1&&Ze(e,5)(t,5)(Xn,5),E&2){let A;L(A=B())&&(M.trigger=A.first),L(A=B())&&(M.panel=A.first),L(A=B())&&(M._overlayDir=A.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(E,M){E&1&&U("keydown",function(ae){return M._handleKeydown(ae)})("focus",function(){return M._onFocus()})("blur",function(){return M._onBlur()}),E&2&&(se("id",M.id)("tabindex",M.disabled?-1:M.tabIndex)("aria-controls",M.panelOpen?M.id+"-panel":null)("aria-expanded",M.panelOpen)("aria-label",M.ariaLabel||null)("aria-required",M.required.toString())("aria-disabled",M.disabled.toString())("aria-invalid",M.errorState)("aria-activedescendant",M._getAriaActiveDescendant()),Y("mat-mdc-select-disabled",M.disabled)("mat-mdc-select-invalid",M.errorState)("mat-mdc-select-required",M.required)("mat-mdc-select-empty",M.empty)("mat-mdc-select-multiple",M.multiple)("mat-select-open",M.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",O],disableRipple:[2,"disableRipple","disableRipple",O],tabIndex:[2,"tabIndex","tabIndex",w=>w==null?0:It(w)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",O],placeholder:"placeholder",required:[2,"required","required",O],multiple:[2,"multiple","multiple",O],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",O],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",It],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",O]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ie([{provide:Lt,useExisting:a},{provide:Qn,useExisting:a}]),He],ngContentSelectors:o,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(E,M){if(E&1&&(Ae(i),s(0,"div",2,0),U("click",function(){return M.open()}),s(3,"div",3),ee(4,r,2,1,"span",4)(5,S,3,1,"span",5),l(),s(6,"div",6)(7,"div",7),ia(),s(8,"svg",8),ve(9,"path",9),l()()()(),gt(10,h,3,16,"ng-template",10),U("detach",function(){return M.close()})("backdropClick",function(){return M.close()})("overlayKeydown",function(ae){return M._handleOverlayKeydown(ae)})),E&2){let A=ne(1);d(3),se("id",M._valueId),d(),te(M.empty?4:5),d(6),f("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",M._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",M._scrollStrategy)("cdkConnectedOverlayOrigin",M._preferredOverlayOrigin||A)("cdkConnectedOverlayPositions",M._positions)("cdkConnectedOverlayWidth",M._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",M._popoverLocation)}},dependencies:[zt,Xn],styles:[`@keyframes _mat-select-enter {
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
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
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
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
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
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return a})();var Or=new k("IntlCountryPipeDefaultOptions");var he=new k("IntlLocales");var Ar=(()=>{class a{constructor(){this.locale=u(he,{optional:!0}),this.defaultOptions=u(Or,{optional:!0})}transform(e,t){if(!e)return null;let r=t??{},{locale:i}=r,o=ye(r,["locale"]);try{return new Intl.DisplayNames(i??this.locale??void 0,j(D(D({},this.defaultOptions),o),{type:"region"})).of(e)??null}catch(m){return console.error("Error while transforming the country",m),null}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275pipe=ce({name:"intlCountry",type:a,pure:!0})}}return a})();var Rr=new k("IntlCurrencyPipeDefaultOptions");var pt=a=>{if(typeof a=="number")return a;if(isNaN(Number(a)-parseFloat(a)))throw new Error(`${a} is not a number!`);return Number(a)};var Fr=(()=>{class a{constructor(){this.locale=u(he,{optional:!0}),this.defaultOptions=u(Rr,{optional:!0})}transform(e,t,i){if(typeof e!="number"&&!e)return null;let o=pt(e),p=i??{},{locale:r}=p,m=ye(p,["locale"]);try{return new Intl.NumberFormat(r??this.locale??void 0,j(D(D({},this.defaultOptions),m),{currency:t,style:"currency"})).format(o)}catch(S){return console.error("Error while transforming the currency",S),null}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275pipe=ce({name:"intlCurrency",type:a,pure:!0})}}return a})();var Pr=new k("IntlDatePipeDefaultOptions");var Vr=(()=>{class a{constructor(){this.locale=u(he,{optional:!0}),this.defaultOptions=u(Pr,{optional:!0})}transform(e,t){if(typeof e!="number"&&!e)return null;let i=new Date(e);if(isNaN(i.getTime()))return null;let m=t??{},{locale:o}=m,r=ye(m,["locale"]);try{return new Intl.DateTimeFormat(o??this.locale??void 0,D(D({},this.defaultOptions),r)).format(i)}catch(p){return console.error("Error while transforming the date",p),null}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275pipe=ce({name:"intlDate",type:a,pure:!0})}}return a})();var Lr=new k("IntlDecimalPipeDefaultOptions");var Br=(()=>{class a{constructor(){this.locale=u(he,{optional:!0}),this.defaultOptions=u(Lr,{optional:!0})}transform(e,t){if(typeof e!="number"&&!e)return null;let i=pt(e),m=t??{},{locale:o}=m,r=ye(m,["locale"]);try{return new Intl.NumberFormat(o??this.locale??void 0,j(D(D({},this.defaultOptions),r),{style:"decimal"})).format(i)}catch(p){return console.error("Error while transforming the decimal number",p),null}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275pipe=ce({name:"intlDecimal",type:a,pure:!0})}}return a})();var zr=new k("IntlDurationPipeDefaultOptions");var Wr=(()=>{class a{constructor(){this.locale=u(he,{optional:!0}),this.defaultOptions=u(zr,{optional:!0})}transform(e,t){if(!e)return null;let r=t??{},{locale:i}=r,o=ye(r,["locale"]);try{return new Intl.DurationFormat(i??this.locale??void 0,D(D({},this.defaultOptions),o)).format(e)}catch(m){return console.error("Error while transforming the duration value",m),null}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275pipe=ce({name:"intlDuration",type:a,pure:!0})}}return a})();var Hr=new k("IntlLanguagePipeDefaultOptions");var jr=(()=>{class a{constructor(){this.locale=u(he,{optional:!0}),this.defaultOptions=u(Hr,{optional:!0})}transform(e,t){if(!e)return null;let r=t??{},{locale:i}=r,o=ye(r,["locale"]);try{return new Intl.DisplayNames(i??this.locale??void 0,j(D(D({},this.defaultOptions),o),{type:"language"})).of(e)??null}catch(m){return console.error("Error while transforming the language",m),null}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275pipe=ce({name:"intlLanguage",type:a,pure:!0})}}return a})();var Ur=new k("IntlListPipeDefaultOptions");var Gr=(()=>{class a{constructor(){this.locale=u(he,{optional:!0}),this.defaultOptions=u(Ur,{optional:!0})}transform(e,t){if(!e)return null;let r=t??{},{locale:i}=r,o=ye(r,["locale"]);try{return new Intl.ListFormat(i??this.locale??void 0,D(D({},this.defaultOptions),o)).format(e)}catch(m){return console.error("Error while transforming the list",m),null}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275pipe=ce({name:"intlList",type:a,pure:!0})}}return a})();var qr=new k("IntlPercentPipeDefaultOptions");var Yr=(()=>{class a{constructor(){this.locale=u(he,{optional:!0}),this.defaultOptions=u(qr,{optional:!0})}transform(e,t){if(typeof e!="number"&&!e)return null;let i=pt(e),m=t??{},{locale:o}=m,r=ye(m,["locale"]);try{return new Intl.NumberFormat(o??this.locale??void 0,j(D(D({},this.defaultOptions),r),{style:"percent"})).format(i)}catch(p){return console.error("Error while transforming the percent value",p),null}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275pipe=ce({name:"intlPercent",type:a,pure:!0})}}return a})();var Kr=new k("IntlRelativeTimePipeDefaultOptions");var Fe=(function(a){return a[a.oneSecond=1e3]="oneSecond",a[a.oneMinute=6e4]="oneMinute",a[a.oneHour=36e5]="oneHour",a[a.oneDay=864e5]="oneDay",a[a.oneWeek=6048e5]="oneWeek",a[a.oneMonth=2592e6]="oneMonth",a[a.oneYear=31536e6]="oneYear",a})(Fe||{}),Xr=(()=>{class a{constructor(){this.cdr=u(Ie,{optional:!0}),this.locales=u(he,{optional:!0}),this.defaultOptions=u(Kr,{optional:!0})}#e;transform(e,t){if(typeof e!="number"&&!e)return null;let i=new Date(e).getTime();if(isNaN(i))throw new Error(`${e.toString()} is not a valid date`);this.#t(),this.#e=new R,Xi(Fe.oneMinute).pipe(re(this.#e)).subscribe(()=>this.cdr?.markForCheck());let o=new Intl.RelativeTimeFormat(t?.locale??this.locales??void 0,D(D({},this.defaultOptions),t)),r=new Date().getTime(),m=i<r?-1:1,p=Math.abs(i-r);return p>Fe.oneYear?o.format(m*Math.floor(p/Fe.oneYear),"year"):p>Fe.oneMonth?o.format(m*Math.floor(p/Fe.oneMonth),"month"):p>Fe.oneWeek?o.format(m*Math.floor(p/Fe.oneWeek),"week"):p>Fe.oneDay?o.format(m*Math.floor(p/Fe.oneDay),"day"):p>Fe.oneHour?o.format(m*Math.floor(p/Fe.oneHour),"hour"):p>Fe.oneMinute?o.format(m*Math.floor(p/Fe.oneMinute),"minute"):o.format(0,"minute")}ngOnDestroy(){this.#t()}#t(){this.#e?.next(),this.#e?.complete()}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275pipe=ce({name:"intlRelativeTime",type:a,pure:!1})}}return a})();var Zr=new k("IntlUnitPipeDefaultOptions");var Qr=(()=>{class a{constructor(){this.locale=u(he,{optional:!0}),this.defaultOptions=u(Zr,{optional:!0})}transform(e,t,i){if(typeof e!="number"&&!e)return null;let o=pt(e),p=i??{},{locale:r}=p,m=ye(p,["locale"]);try{return new Intl.NumberFormat(r??this.locale??void 0,j(D(D({},this.defaultOptions),m),{unit:t,style:"unit"})).format(o)}catch(S){return console.error("Error while transforming the unit value",S),null}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275pipe=ce({name:"intlUnit",type:a,pure:!0})}}return a})();var ge=["af","ak","am","ar","as","asa","ast","az","bas","be","bem","bez","bg","bm","bn","bo","br","brx","bs","ca","ccp","ce","ceb","cgg","chr","ckb","cs","cu","cy","da","dav","de","de-AT","de-CH","de-DE","dje","dsb","dua","dyo","dz","ebu","ee","el","en","en-CA","en-GB","en-US","eo","es","et","eu","ewo","fa","ff","fi","fil","fo","fr","fur","fy","ga","gd","gl","gsw","gu","guz","gv","ha","haw","he","hi","hr","hsb","hu","hy","ia","id","ig","ii","is","it","ja","jgo","jmc","jv","ka","kab","kam","kde","kea","khq","ki","kk","kkj","kl","kln","km","kn","ko","kok","ks","ksb","ksf","ksh","ku","kw","ky","lag","lb","lg","lkt","ln","lo","lrc","lt","lu","luo","luy","lv","mai","mas","mer","mfe","mg","mgh","mgo","mi","mk","ml","mn","mni","mr","ms","mt","mua","my","mzn","naq","nb","nd","nds","ne","nl","nmg","nn","nnh","nus","nyn","om","or","os","pa","pcm","pl","prg","ps","pt","pt-BR","pt-PT","qu","rm","rn","ro","rof","root","ru","rw","rwk","sah","saq","sat","sbp","sd","se","ses","sg","shi","si","sk","sl","smn","sn","so","sq","sr","su","sv","sw","ta","te","teo","tg","th","ti","tk","to","tr","tt","twq","tzm","ug","uk","ur","uz","vai","vi","vo","vun","wae","wo","xh","xog","yav","yi","yo","yue","zgh","zh","zu"];var $r=["AT","CA","CH","DE","GB","KR","SE","UA","US"];function Ps(a,n){if(a&1&&(s(0,"mat-option",2),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}function Vs(a,n){if(a&1&&(s(0,"mat-option",2),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}var Jr=(()=>{class a{constructor(){this.languages=ge,this.countries=$r,this.selectedCountry=g("DE"),this.locale=g(void 0),this.options=F(()=>({locale:this.locale()}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-country"]],decls:18,vars:7,consts:[[1,"fields-container"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Country to transform"),l(),s(4,"mat-select",1),_(),C("ngModelChange",function(r){return x(i.selectedCountry,r)||(i.selectedCountry=r),r}),G(5,Ps,2,2,"mat-option",2,K),l()(),s(7,"mat-form-field")(8,"mat-label"),c(9,"Locale"),l(),s(10,"mat-select",1),_(),C("ngModelChange",function(r){return x(i.locale,r)||(i.locale=r),r}),s(11,"mat-option",2),c(12,"Browser default"),l(),G(13,Vs,2,2,"mat-option",2,K),l()()(),s(15,"p"),c(16),me(17,"intlCountry"),l()),t&2&&(d(4),v("ngModel",i.selectedCountry),y(),d(),q(i.countries),d(5),v("ngModel",i.locale),y(),d(),f("value",void 0),d(2),q(i.languages),d(3),T(Me(17,4,i.selectedCountry(),i.options())))},dependencies:[fe,ue,le,de,pe,$,Q,Ar],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return a})();var Ls=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=I({type:a,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return a})(),Bs={passive:!0},eo=(()=>{class a{_platform=u(Te);_ngZone=u(J);_renderer=u(nt).createRenderer(null,null);_styleLoader=u(it);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return un;this._styleLoader.load(Ls);let t=Kt(e),i=this._monitoredElements.get(t);if(i)return i.subject;let o=new R,r="cdk-text-field-autofilled",m=S=>{S.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>o.next({target:S.target,isAutofilled:!0}))):S.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>o.next({target:S.target,isAutofilled:!1})))},p=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",m,Bs)));return this._monitoredElements.set(t,{subject:o,unlisten:p}),o}stopMonitoring(e){let t=Kt(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||a)};static \u0275prov=Ne({token:a,factory:a.\u0275fac})}return a})();var to=new k("MAT_INPUT_VALUE_ACCESSOR");var zs=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Ws=new k("MAT_INPUT_CONFIG"),Pe=(()=>{class a{_elementRef=u(z);_platform=u(Te);ngControl=u($e,{optional:!0,self:!0});_autofillMonitor=u(eo);_ngZone=u(J);_formField=u(Bt,{optional:!0});_renderer=u(xe);_uid=u(Oe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(Ws,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=At(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(yt.required)??!1}set required(e){this._required=At(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&fi().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=At(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>fi().has(e));constructor(){let e=u(tn,{optional:!0}),t=u(nn,{optional:!0}),i=u(Jn),o=u(to,{optional:!0,self:!0}),r=u(Ln,{optional:!0,self:!0}),m=this._elementRef.nativeElement,p=m.nodeName.toLowerCase();o?mt(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=m,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(m,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Wt(i,r||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=p==="select",this._isTextarea=p==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=m.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ct(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){zs.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&U("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(_t("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),se("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),Y("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",O]},exportAs:["matInput"],features:[ie([{provide:Lt,useExisting:a}]),He]})}return a})();var no=["USD","EUR","GBP","CAD","JPY","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRL","BSD","BTN","BWP","BYN","BZD","CDF","CHE","CHF","CHW","CLF","CLP","CNY","COP","COU","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","FJD","FKP","GEL","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HTG","HUF","IDR","ILS","INR","IQD","IRR","ISK","JMD","JOD","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MXV","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USN","UYI","UYU","UYW","UZS","VED","VES","VND","VUV","WST","XAF","XAG","XAU","XBA","XBB","XBC","XBD","XCD","XDR","XOF","XPD","XPF","XPT","XSU","XTS","XUA","XXX","YER","ZAR","ZMW","ZWL"];function Hs(a,n){if(a&1&&(s(0,"mat-option",3),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}function js(a,n){if(a&1&&(s(0,"mat-option",3),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}var io=(()=>{class a{constructor(){this.enteredNumber=g("0.24"),this.currency=g("USD"),this.languages=ge,this.currencies=no,this.locale=g(void 0),this.notation=g(void 0),this.signDisplay=g(void 0),this.currencyDisplay=g(void 0),this.currencySign=g(void 0),this.minimumIntegerDigits=g(void 0),this.minimumFractionDigits=g(void 0),this.maximumFractionDigits=g(void 0),this.minimumSignificantDigits=g(void 0),this.maximumSignificantDigits=g(void 0),this.options=F(()=>({locale:this.locale(),currencyDisplay:this.currencyDisplay(),currencySign:this.currencySign(),notation:this.notation(),signDisplay:this.signDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-currency"]],decls:106,vars:37,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),l(),s(4,"input",1),_(),C("ngModelChange",function(r){return x(i.enteredNumber,r)||(i.enteredNumber=r),r}),l()(),s(5,"mat-form-field")(6,"mat-label"),c(7,"Currency"),l(),s(8,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.currency,r)||(i.currency=r),r}),G(9,Hs,2,2,"mat-option",3,K),l()(),s(11,"mat-form-field")(12,"mat-label"),c(13,"Locale"),l(),s(14,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.locale,r)||(i.locale=r),r}),s(15,"mat-option",3),c(16,"Browser default"),l(),G(17,js,2,2,"mat-option",3,K),l()(),s(19,"mat-form-field")(20,"mat-label"),c(21,"Currency display"),l(),s(22,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.currencyDisplay,r)||(i.currencyDisplay=r),r}),s(23,"mat-option",3),c(24,"Browser default"),l(),s(25,"mat-option",3),c(26,"symbol"),l(),s(27,"mat-option",3),c(28,"narrowSymbol"),l(),s(29,"mat-option",3),c(30,"code"),l(),s(31,"mat-option",3),c(32,"name"),l()()(),s(33,"mat-form-field")(34,"mat-label"),c(35,"Currency sign"),l(),s(36,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.currencySign,r)||(i.currencySign=r),r}),s(37,"mat-option",3),c(38,"Browser default"),l(),s(39,"mat-option",3),c(40,"accounting"),l(),s(41,"mat-option",3),c(42,"standard"),l()()(),s(43,"mat-form-field")(44,"mat-label"),c(45,"Notation"),l(),s(46,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.notation,r)||(i.notation=r),r}),s(47,"mat-option",3),c(48,"Browser default"),l(),s(49,"mat-option",3),c(50,"standard"),l(),s(51,"mat-option",3),c(52,"scientific"),l(),s(53,"mat-option",3),c(54,"engineering"),l(),s(55,"mat-option",3),c(56,"compact"),l()()(),s(57,"mat-form-field")(58,"mat-label"),c(59,"Sign display"),l(),s(60,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.signDisplay,r)||(i.signDisplay=r),r}),s(61,"mat-option",3),c(62,"Browser default"),l(),s(63,"mat-option",3),c(64,"auto"),l(),s(65,"mat-option",3),c(66,"always"),l(),s(67,"mat-option",3),c(68,"exceptZero"),l(),s(69,"mat-option",3),c(70,"negative"),l(),s(71,"mat-option",3),c(72,"never"),l()()(),s(73,"mat-form-field")(74,"mat-label"),c(75,"Minimum integer digits"),l(),s(76,"input",4),_(),C("ngModelChange",function(r){return x(i.minimumIntegerDigits,r)||(i.minimumIntegerDigits=r),r}),l(),s(77,"mat-error"),c(78,"Please enter a number from 1 to 21"),l()(),s(79,"mat-form-field")(80,"mat-label"),c(81,"Minimum fraction digits"),l(),s(82,"input",5),_(),C("ngModelChange",function(r){return x(i.minimumFractionDigits,r)||(i.minimumFractionDigits=r),r}),l(),s(83,"mat-error"),c(84,"Please enter a number from 0 to 20"),l()(),s(85,"mat-form-field")(86,"mat-label"),c(87,"Maximum fraction digits"),l(),s(88,"input",5),_(),C("ngModelChange",function(r){return x(i.maximumFractionDigits,r)||(i.maximumFractionDigits=r),r}),l(),s(89,"mat-error"),c(90,"Please enter a number from 0 to 20"),l()(),s(91,"mat-form-field")(92,"mat-label"),c(93,"Minimum significant digits"),l(),s(94,"input",4),_(),C("ngModelChange",function(r){return x(i.minimumSignificantDigits,r)||(i.minimumSignificantDigits=r),r}),l(),s(95,"mat-error"),c(96,"Please enter a number from 1 to 21"),l()(),s(97,"mat-form-field")(98,"mat-label"),c(99,"Maximum significant digits"),l(),s(100,"input",4),_(),C("ngModelChange",function(r){return x(i.maximumSignificantDigits,r)||(i.maximumSignificantDigits=r),r}),l(),s(101,"mat-error"),c(102,"Please enter a number from 1 to 21"),l()()(),s(103,"p"),c(104),me(105,"intlCurrency"),l()),t&2&&(d(4),v("ngModel",i.enteredNumber),y(),d(4),v("ngModel",i.currency),y(),d(),q(i.currencies),d(5),v("ngModel",i.locale),y(),d(),f("value",void 0),d(2),q(i.languages),d(5),v("ngModel",i.currencyDisplay),y(),d(),f("value",void 0),d(2),f("value","symbol"),d(2),f("value","narrowSymbol"),d(2),f("value","code"),d(2),f("value","name"),d(5),v("ngModel",i.currencySign),y(),d(),f("value",void 0),d(2),f("value","accounting"),d(2),f("value","standard"),d(5),v("ngModel",i.notation),y(),d(),f("value",void 0),d(2),f("value","standard"),d(2),f("value","scientific"),d(2),f("value","engineering"),d(2),f("value","compact"),d(5),v("ngModel",i.signDisplay),y(),d(),f("value",void 0),d(2),f("value","auto"),d(2),f("value","always"),d(2),f("value","exceptZero"),d(2),f("value","negative"),d(2),f("value","never"),d(5),v("ngModel",i.minimumIntegerDigits),y(),d(6),v("ngModel",i.minimumFractionDigits),y(),d(6),v("ngModel",i.maximumFractionDigits),y(),d(6),v("ngModel",i.minimumSignificantDigits),y(),d(6),v("ngModel",i.maximumSignificantDigits),y(),d(4),je(" ",Sn(105,33,i.enteredNumber(),i.currency(),i.options()),`
`))},dependencies:[fe,ke,Ge,ue,st,ot,le,de,Pe,pe,$,Q,lt,Fr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return a})();function ao(a){return Error(`Unable to find icon with the name "${a}"`)}function Us(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function ro(a){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${a}".`)}function oo(a){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${a}".`)}var dt=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t}},lo=(()=>{class a{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(e,t,i,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=i}addSvgIcon(e,t,i){return this.addSvgIconInNamespace("",e,t,i)}addSvgIconLiteral(e,t,i){return this.addSvgIconLiteralInNamespace("",e,t,i)}addSvgIconInNamespace(e,t,i,o){return this._addSvgIconConfig(e,t,new dt(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,i,o){let r=this._sanitizer.sanitize(Dt.HTML,i);if(!r)throw oo(i);let m=Ot(r);return this._addSvgIconConfig(e,t,new dt("",m,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,i){return this._addSvgIconSetConfig(e,new dt(t,null,i))}addSvgIconSetLiteralInNamespace(e,t,i){let o=this._sanitizer.sanitize(Dt.HTML,t);if(!o)throw oo(t);let r=Ot(o);return this._addSvgIconSetConfig(e,new dt("",r,i))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=qs(this._document),this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Dt.RESOURCE_URL,e);if(!t)throw ro(e);let i=this._cachedIconsByUrl.get(t);return i?qe(ei(i)):this._loadSvgIconFromConfig(new dt(e,null)).pipe(hn(o=>this._cachedIconsByUrl.set(t,o)),Ve(o=>ei(o)))}getNamedSvgIcon(e,t=""){let i=so(t,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(t);return r?this._getSvgFromIconSetConfigs(e,r):qi(ao(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?qe(ei(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(Ve(t=>ei(t)))}_getSvgFromIconSetConfigs(e,t){let i=this._extractIconWithNameFromAnySet(e,t);if(i)return qe(i);let o=t.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Zi(m=>{let S=`Loading icon set URL: ${this._sanitizer.sanitize(Dt.RESOURCE_URL,r.url)} failed: ${m.message}`;return this._errorHandler.handleError(new Error(S)),qe(null)})));return fn(o).pipe(Ve(()=>{let r=this._extractIconWithNameFromAnySet(e,t);if(!r)throw ao(e);return r}))}_extractIconWithNameFromAnySet(e,t){for(let i=t.length-1;i>=0;i--){let o=t[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(o),m=this._extractSvgIconFromSet(r,e,o.options);if(m)return m}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(hn(t=>e.svgText=t),Ve(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?qe(null):this._fetchIcon(e).pipe(hn(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,i){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,i);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),i);let m=this._svgElementFromString(Ot("<svg></svg>"));return m.appendChild(r),this._setSvgAttributes(m,i)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let i=t.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let t=this._svgElementFromString(Ot("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:r,value:m}=i[o];r!=="id"&&t.setAttribute(r,m)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw Us();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let r=this._sanitizer.sanitize(Dt.RESOURCE_URL,t);if(!r)throw ro(t);let m=this._inProgressUrlFetches.get(r);if(m)return m;let p=this._httpClient.get(r,{responseType:"text",withCredentials:o}).pipe(Ve(S=>Ot(S)),$i(()=>this._inProgressUrlFetches.delete(r)),Ji());return this._inProgressUrlFetches.set(r,p),p}_addSvgIconConfig(e,t,i){return this._svgIconConfigs.set(so(e,t),i),this}_addSvgIconSetConfig(e,t){let i=this._iconSetConfigs.get(e);return i?i.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](t,e);if(o)return Gs(o)?new dt(o.url,null,o.options):new dt(o,null)}}static \u0275fac=function(t){return new(t||a)(jt(pa,8),jt(ha),jt(Be,8),jt(_n))};static \u0275prov=na({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ei(a){return a.cloneNode(!0)}function so(a,n){return a+":"+n}function Gs(a){return!!(a.url&&a.options)}function qs(a){let n=null,e=!1;return a.fonts&&typeof a.fonts.forEach=="function"&&a.fonts.forEach(t=>{let i=t.family.replace(/['"]/g,"").trim().toLowerCase();(i==="material icons"||i.startsWith("material icons "))&&(e=!0),i.startsWith("material symbols rounded")?n="rounded":i.startsWith("material symbols sharp")?n="sharp":i.startsWith("material symbols")&&(n="outlined")}),[n&&!e?`material-symbols-${n}`:"material-icons","mat-ligature-font"]}var Ys=new k("MAT_ICON_DEFAULT_OPTIONS"),Ks=new k("mat-icon-location",{providedIn:"root",factory:()=>{let a=u(Be),n=a?a.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),co=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Xs=co.map(a=>`[${a}]`).join(", "),Zs=/^url\(['"]?#(.*?)['"]?\)$/,ti=(()=>{class a{_elementRef=u(z);_iconRegistry=u(lo);_location=u(Ks);_errorHandler=u(_n);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Ee.EMPTY;constructor(){let e=u(new Nt("aria-hidden"),{optional:!0}),t=u(Ys,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let i=e.childNodes[t];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),t.forEach(i=>e.classList.add(i)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((i,o)=>{i.forEach(r=>{o.setAttribute(r.name,`url('${e}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Xs),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)co.forEach(r=>{let m=t[o],p=m.getAttribute(r),S=p?p.match(Zs):null;if(S){let h=i.get(m);h||(h=[],i.set(m,h)),h.push({name:r,value:S[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,i]=this._splitIconName(e);t&&(this._svgNamespace=t),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,t).pipe(pn(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${t}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){return I({type:a,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,o){i&2&&(se("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),qt(o.color?"mat-"+o.color:""),Y("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",O],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:["*"],decls:1,vars:0,template:function(i,o){i&1&&(Ae(),Z(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
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
`],encapsulation:2})})()}return a})();var ni=a=>{let n=a?new Date(a):new Date;return new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,-1).split(".")[0]};function Qs(a,n){if(a&1&&(s(0,"mat-option",5),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}var mo=(()=>{class a{constructor(){this.languages=ge,this.selectedDate=g(ni()),this.dateStyle=g(void 0),this.timeStyle=g(void 0),this.hour12=g(void 0),this.locale=g(void 0),this.options=F(()=>({locale:this.locale(),dateStyle:this.dateStyle(),timeStyle:this.timeStyle(),hour12:this.hour12()}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-date"]],decls:58,vars:23,consts:[["picker",""],[1,"fields-container"],["matInput","","placeholder","Choose a date","type","datetime-local",3,"ngModelChange","ngModel"],["mat-icon-button","","matIconSuffix","",3,"click"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){if(t&1){let o=bt();s(0,"div",1)(1,"mat-form-field")(2,"mat-label"),c(3,"Date"),l(),s(4,"input",2,0),_(),C("ngModelChange",function(m){return Ce(o),x(i.selectedDate,m)||(i.selectedDate=m),Se(m)}),l(),s(6,"button",3),U("click",function(){Ce(o);let m=ne(5);return Se(m.showPicker())}),s(7,"mat-icon"),c(8,"today"),l()()(),s(9,"mat-form-field")(10,"mat-label"),c(11,"Locale"),l(),s(12,"mat-select",4),_(),C("ngModelChange",function(m){return Ce(o),x(i.locale,m)||(i.locale=m),Se(m)}),s(13,"mat-option",5),c(14,"Browser default"),l(),G(15,Qs,2,2,"mat-option",5,K),l()(),s(17,"mat-form-field")(18,"mat-label"),c(19,"Date style"),l(),s(20,"mat-select",4),_(),C("ngModelChange",function(m){return Ce(o),x(i.dateStyle,m)||(i.dateStyle=m),Se(m)}),s(21,"mat-option",5),c(22,"Browser default"),l(),s(23,"mat-option",5),c(24,"short"),l(),s(25,"mat-option",5),c(26,"medium"),l(),s(27,"mat-option",5),c(28,"long"),l(),s(29,"mat-option",5),c(30,"full"),l()()(),s(31,"mat-form-field")(32,"mat-label"),c(33,"Time style"),l(),s(34,"mat-select",4),_(),C("ngModelChange",function(m){return Ce(o),x(i.timeStyle,m)||(i.timeStyle=m),Se(m)}),s(35,"mat-option",5),c(36,"Browser default"),l(),s(37,"mat-option",5),c(38,"short"),l(),s(39,"mat-option",5),c(40,"medium"),l(),s(41,"mat-option",5),c(42,"long"),l(),s(43,"mat-option",5),c(44,"full"),l()()(),s(45,"mat-form-field")(46,"mat-label"),c(47,"12 Hours"),l(),s(48,"mat-select",4),_(),C("ngModelChange",function(m){return Ce(o),x(i.hour12,m)||(i.hour12=m),Se(m)}),s(49,"mat-option",5),c(50,"Browser default"),l(),s(51,"mat-option",5),c(52,"true"),l(),s(53,"mat-option",5),c(54,"false"),l()()()(),s(55,"p"),c(56),me(57,"intlDate"),l()}t&2&&(d(4),v("ngModel",i.selectedDate),y(),d(8),v("ngModel",i.locale),y(),d(),f("value",void 0),d(2),q(i.languages),d(5),v("ngModel",i.dateStyle),y(),d(),f("value",void 0),d(2),f("value","short"),d(2),f("value","medium"),d(2),f("value","long"),d(2),f("value","full"),d(5),v("ngModel",i.timeStyle),y(),d(),f("value",void 0),d(2),f("value","short"),d(2),f("value","medium"),d(2),f("value","long"),d(2),f("value","full"),d(5),v("ngModel",i.hour12),y(),d(),f("value",void 0),d(2),f("value",!0),d(2),f("value",!1),d(3),T(Me(57,20,i.selectedDate(),i.options())))},dependencies:[fe,ke,ue,le,de,Pe,Mn,ti,pe,$,Q,rn,Vr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return a})();function $s(a,n){if(a&1&&(s(0,"mat-option",3),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}var uo=(()=>{class a{constructor(){this.enteredNumber=g("1024.4539"),this.languages=ge,this.locale=g(void 0),this.notation=g(void 0),this.signDisplay=g(void 0),this.minimumIntegerDigits=g(void 0),this.minimumFractionDigits=g(void 0),this.maximumFractionDigits=g(void 0),this.minimumSignificantDigits=g(void 0),this.maximumSignificantDigits=g(void 0),this.options=F(()=>({locale:this.locale(),notation:this.notation(),signDisplay:this.signDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-decimal"]],decls:76,vars:25,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),l(),s(4,"input",1),_(),C("ngModelChange",function(r){return x(i.enteredNumber,r)||(i.enteredNumber=r),r}),l()(),s(5,"mat-form-field")(6,"mat-label"),c(7,"Locale"),l(),s(8,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.locale,r)||(i.locale=r),r}),s(9,"mat-option",3),c(10,"Browser default"),l(),G(11,$s,2,2,"mat-option",3,K),l()(),s(13,"mat-form-field")(14,"mat-label"),c(15,"Notation"),l(),s(16,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.notation,r)||(i.notation=r),r}),s(17,"mat-option",3),c(18,"Browser default"),l(),s(19,"mat-option",3),c(20,"standard"),l(),s(21,"mat-option",3),c(22,"scientific"),l(),s(23,"mat-option",3),c(24,"engineering"),l(),s(25,"mat-option",3),c(26,"compact"),l()()(),s(27,"mat-form-field")(28,"mat-label"),c(29,"Sign display"),l(),s(30,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.signDisplay,r)||(i.signDisplay=r),r}),s(31,"mat-option",3),c(32,"Browser default"),l(),s(33,"mat-option",3),c(34,"auto"),l(),s(35,"mat-option",3),c(36,"always"),l(),s(37,"mat-option",3),c(38,"exceptZero"),l(),s(39,"mat-option",3),c(40,"negative"),l(),s(41,"mat-option",3),c(42,"never"),l()()(),s(43,"mat-form-field")(44,"mat-label"),c(45,"Minimum integer digits"),l(),s(46,"input",4),_(),C("ngModelChange",function(r){return x(i.minimumIntegerDigits,r)||(i.minimumIntegerDigits=r),r}),l(),s(47,"mat-error"),c(48,"Please enter a number from 1 to 21"),l()(),s(49,"mat-form-field")(50,"mat-label"),c(51,"Minimum fraction digits"),l(),s(52,"input",5),_(),C("ngModelChange",function(r){return x(i.minimumFractionDigits,r)||(i.minimumFractionDigits=r),r}),l(),s(53,"mat-error"),c(54,"Please enter a number from 0 to 20"),l()(),s(55,"mat-form-field")(56,"mat-label"),c(57,"Maximum fraction digits"),l(),s(58,"input",5),_(),C("ngModelChange",function(r){return x(i.maximumFractionDigits,r)||(i.maximumFractionDigits=r),r}),l(),s(59,"mat-error"),c(60,"Please enter a number from 0 to 20"),l()(),s(61,"mat-form-field")(62,"mat-label"),c(63,"Minimum significant digits"),l(),s(64,"input",4),_(),C("ngModelChange",function(r){return x(i.minimumSignificantDigits,r)||(i.minimumSignificantDigits=r),r}),l(),s(65,"mat-error"),c(66,"Please enter a number from 1 to 21"),l()(),s(67,"mat-form-field")(68,"mat-label"),c(69,"Maximum significant digits"),l(),s(70,"input",4),_(),C("ngModelChange",function(r){return x(i.maximumSignificantDigits,r)||(i.maximumSignificantDigits=r),r}),l(),s(71,"mat-error"),c(72,"Please enter a number from 1 to 21"),l()()(),s(73,"p"),c(74),me(75,"intlDecimal"),l()),t&2&&(d(4),v("ngModel",i.enteredNumber),y(),d(4),v("ngModel",i.locale),y(),d(),f("value",void 0),d(2),q(i.languages),d(5),v("ngModel",i.notation),y(),d(),f("value",void 0),d(2),f("value","standard"),d(2),f("value","scientific"),d(2),f("value","engineering"),d(2),f("value","compact"),d(5),v("ngModel",i.signDisplay),y(),d(),f("value",void 0),d(2),f("value","auto"),d(2),f("value","always"),d(2),f("value","exceptZero"),d(2),f("value","negative"),d(2),f("value","never"),d(5),v("ngModel",i.minimumIntegerDigits),y(),d(6),v("ngModel",i.minimumFractionDigits),y(),d(6),v("ngModel",i.maximumFractionDigits),y(),d(6),v("ngModel",i.minimumSignificantDigits),y(),d(6),v("ngModel",i.maximumSignificantDigits),y(),d(4),je(" ",Me(75,22,i.enteredNumber(),i.options()),`
`))},dependencies:[fe,ke,Ge,ue,st,ot,le,de,Pe,pe,$,Q,lt,Br],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return a})();function Js(a,n){if(a&1&&(s(0,"mat-option",3),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}var fo=(()=>{class a{constructor(){this.languages=ge,this.years=g(5),this.months=g(2),this.weeks=g(void 0),this.days=g(23),this.hours=g(void 0),this.minutes=g(void 0),this.seconds=g(void 0),this.milliseconds=g(void 0),this.microseconds=g(void 0),this.nanoseconds=g(void 0),this.locale=g(void 0),this.style=g(void 0),this.value=F(()=>({years:this.years(),months:this.months(),weeks:this.weeks(),days:this.days(),hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds(),microseconds:this.microseconds()})),this.options=F(()=>({locale:this.locale(),style:this.style()}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-duration"]],decls:66,vars:22,consts:[[1,"fields-container"],["matInput","","type","number",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Years"),l(),s(4,"input",1),_(),C("ngModelChange",function(r){return x(i.years,r)||(i.years=r),r}),l()(),s(5,"mat-form-field")(6,"mat-label"),c(7,"Months"),l(),s(8,"input",1),_(),C("ngModelChange",function(r){return x(i.months,r)||(i.months=r),r}),l()(),s(9,"mat-form-field")(10,"mat-label"),c(11,"Weeks"),l(),s(12,"input",1),_(),C("ngModelChange",function(r){return x(i.weeks,r)||(i.weeks=r),r}),l()(),s(13,"mat-form-field")(14,"mat-label"),c(15,"Days"),l(),s(16,"input",1),_(),C("ngModelChange",function(r){return x(i.days,r)||(i.days=r),r}),l()(),s(17,"mat-form-field")(18,"mat-label"),c(19,"Hours"),l(),s(20,"input",1),_(),C("ngModelChange",function(r){return x(i.hours,r)||(i.hours=r),r}),l()(),s(21,"mat-form-field")(22,"mat-label"),c(23,"Minutes"),l(),s(24,"input",1),_(),C("ngModelChange",function(r){return x(i.minutes,r)||(i.minutes=r),r}),l()(),s(25,"mat-form-field")(26,"mat-label"),c(27,"Seconds"),l(),s(28,"input",1),_(),C("ngModelChange",function(r){return x(i.seconds,r)||(i.seconds=r),r}),l()(),s(29,"mat-form-field")(30,"mat-label"),c(31,"Milliseconds"),l(),s(32,"input",1),_(),C("ngModelChange",function(r){return x(i.milliseconds,r)||(i.milliseconds=r),r}),l()(),s(33,"mat-form-field")(34,"mat-label"),c(35,"Microseconds"),l(),s(36,"input",1),_(),C("ngModelChange",function(r){return x(i.microseconds,r)||(i.microseconds=r),r}),l()(),s(37,"mat-form-field")(38,"mat-label"),c(39,"Nanoseconds"),l(),s(40,"input",1),_(),C("ngModelChange",function(r){return x(i.nanoseconds,r)||(i.nanoseconds=r),r}),l()(),s(41,"mat-form-field")(42,"mat-label"),c(43,"Locale"),l(),s(44,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.locale,r)||(i.locale=r),r}),s(45,"mat-option",3),c(46,"Browser default"),l(),G(47,Js,2,2,"mat-option",3,K),l()(),s(49,"mat-form-field")(50,"mat-label"),c(51,"Style"),l(),s(52,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.style,r)||(i.style=r),r}),s(53,"mat-option",3),c(54,"Browser default"),l(),s(55,"mat-option",3),c(56,"long"),l(),s(57,"mat-option",3),c(58,"short"),l(),s(59,"mat-option",3),c(60,"narrow"),l(),s(61,"mat-option",3),c(62,"digital"),l()()()(),s(63,"p"),c(64),me(65,"intlDuration"),l()),t&2&&(d(4),v("ngModel",i.years),y(),d(4),v("ngModel",i.months),y(),d(4),v("ngModel",i.weeks),y(),d(4),v("ngModel",i.days),y(),d(4),v("ngModel",i.hours),y(),d(4),v("ngModel",i.minutes),y(),d(4),v("ngModel",i.seconds),y(),d(4),v("ngModel",i.milliseconds),y(),d(4),v("ngModel",i.microseconds),y(),d(4),v("ngModel",i.nanoseconds),y(),d(4),v("ngModel",i.locale),y(),d(),f("value",void 0),d(2),q(i.languages),d(5),v("ngModel",i.style),y(),d(),f("value",void 0),d(2),f("value","long"),d(2),f("value","short"),d(2),f("value","narrow"),d(2),f("value","digital"),d(3),je(" ",Me(65,19,i.value(),i.options()),`
`))},dependencies:[fe,ke,Ge,ue,le,de,Pe,pe,$,Q,Wr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return a})();function el(a,n){if(a&1&&(s(0,"mat-option",2),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}function tl(a,n){if(a&1&&(s(0,"mat-option",2),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}var po=(()=>{class a{constructor(){this.languages=ge,this.selectedLanguage=g("de-DE"),this.languageDisplay=g(void 0),this.locale=g(void 0),this.options=F(()=>({locale:this.locale(),languageDisplay:this.languageDisplay()}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-language"]],decls:28,vars:11,consts:[[1,"fields-container"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Language to transform"),l(),s(4,"mat-select",1),_(),C("ngModelChange",function(r){return x(i.selectedLanguage,r)||(i.selectedLanguage=r),r}),G(5,el,2,2,"mat-option",2,K),l()(),s(7,"mat-form-field")(8,"mat-label"),c(9,"Locale"),l(),s(10,"mat-select",1),_(),C("ngModelChange",function(r){return x(i.locale,r)||(i.locale=r),r}),s(11,"mat-option",2),c(12,"Browser default"),l(),G(13,tl,2,2,"mat-option",2,K),l()(),s(15,"mat-form-field")(16,"mat-label"),c(17,"Language display"),l(),s(18,"mat-select",1),_(),C("ngModelChange",function(r){return x(i.languageDisplay,r)||(i.languageDisplay=r),r}),s(19,"mat-option",2),c(20,"Browser default"),l(),s(21,"mat-option",2),c(22,"dialect"),l(),s(23,"mat-option",2),c(24,"standard"),l()()()(),s(25,"p"),c(26),me(27,"intlLanguage"),l()),t&2&&(d(4),v("ngModel",i.selectedLanguage),y(),d(),q(i.languages),d(5),v("ngModel",i.locale),y(),d(),f("value",void 0),d(2),q(i.languages),d(5),v("ngModel",i.languageDisplay),y(),d(),f("value",void 0),d(2),f("value","dialect"),d(2),f("value","standard"),d(3),T(Me(27,8,i.selectedLanguage(),i.options())))},dependencies:[fe,ue,le,de,pe,$,Q,jr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return a})();var mn=["Pizza","Lasagne","Gnocchi","Spaghetti","Pesto"];function nl(a,n){if(a&1&&(s(0,"mat-option",2),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}function il(a,n){if(a&1&&(s(0,"mat-option",2),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}var ho=(()=>{class a{constructor(){this.languages=ge,this.list=mn,this.selectedItems=g([mn[0],mn[2],mn[3]]),this.locale=g(void 0),this.type=g(void 0),this.style=g(void 0),this.options=F(()=>({locale:this.locale(),type:this.type(),style:this.style()}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-list"]],decls:42,vars:17,consts:[[1,"fields-container"],["multiple","",3,"ngModelChange","ngModel"],[3,"value"],[3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"List items"),l(),s(4,"mat-select",1),_(),C("ngModelChange",function(r){return x(i.selectedItems,r)||(i.selectedItems=r),r}),G(5,nl,2,2,"mat-option",2,K),l()(),s(7,"mat-form-field")(8,"mat-label"),c(9,"Locale"),l(),s(10,"mat-select",3),_(),C("ngModelChange",function(r){return x(i.locale,r)||(i.locale=r),r}),s(11,"mat-option",2),c(12,"Browser default"),l(),G(13,il,2,2,"mat-option",2,K),l()(),s(15,"mat-form-field")(16,"mat-label"),c(17,"Type"),l(),s(18,"mat-select",3),_(),C("ngModelChange",function(r){return x(i.type,r)||(i.type=r),r}),s(19,"mat-option",2),c(20,"Browser default"),l(),s(21,"mat-option",2),c(22,"conjunction"),l(),s(23,"mat-option",2),c(24,"disjunction"),l(),s(25,"mat-option",2),c(26,"unit"),l()()(),s(27,"mat-form-field")(28,"mat-label"),c(29,"Style"),l(),s(30,"mat-select",3),_(),C("ngModelChange",function(r){return x(i.style,r)||(i.style=r),r}),s(31,"mat-option",2),c(32,"Browser default"),l(),s(33,"mat-option",2),c(34,"long"),l(),s(35,"mat-option",2),c(36,"short"),l(),s(37,"mat-option",2),c(38,"narrow"),l()()()(),s(39,"p"),c(40),me(41,"intlList"),l()),t&2&&(d(4),v("ngModel",i.selectedItems),y(),d(),q(i.list),d(5),v("ngModel",i.locale),y(),d(),f("value",void 0),d(2),q(i.languages),d(5),v("ngModel",i.type),y(),d(),f("value",void 0),d(2),f("value","conjunction"),d(2),f("value","disjunction"),d(2),f("value","unit"),d(5),v("ngModel",i.style),y(),d(),f("value",void 0),d(2),f("value","long"),d(2),f("value","short"),d(2),f("value","narrow"),d(3),T(Me(41,14,i.selectedItems(),i.options())))},dependencies:[fe,ue,le,de,pe,$,Q,Gr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return a})();function al(a,n){if(a&1&&(s(0,"mat-option",3),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}var go=(()=>{class a{constructor(){this.enteredNumber=g("0.24"),this.languages=ge,this.locale=g(void 0),this.notation=g(void 0),this.signDisplay=g(void 0),this.minimumIntegerDigits=g(void 0),this.minimumFractionDigits=g(void 0),this.maximumFractionDigits=g(void 0),this.minimumSignificantDigits=g(void 0),this.maximumSignificantDigits=g(void 0),this.options=F(()=>({locale:this.locale(),notation:this.notation(),signDisplay:this.signDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-percent"]],decls:76,vars:25,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),l(),s(4,"input",1),_(),C("ngModelChange",function(r){return x(i.enteredNumber,r)||(i.enteredNumber=r),r}),l()(),s(5,"mat-form-field")(6,"mat-label"),c(7,"Locale"),l(),s(8,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.locale,r)||(i.locale=r),r}),s(9,"mat-option",3),c(10,"Browser default"),l(),G(11,al,2,2,"mat-option",3,K),l()(),s(13,"mat-form-field")(14,"mat-label"),c(15,"Notation"),l(),s(16,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.notation,r)||(i.notation=r),r}),s(17,"mat-option",3),c(18,"Browser default"),l(),s(19,"mat-option",3),c(20,"standard"),l(),s(21,"mat-option",3),c(22,"scientific"),l(),s(23,"mat-option",3),c(24,"engineering"),l(),s(25,"mat-option",3),c(26,"compact"),l()()(),s(27,"mat-form-field")(28,"mat-label"),c(29,"Sign display"),l(),s(30,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.signDisplay,r)||(i.signDisplay=r),r}),s(31,"mat-option",3),c(32,"Browser default"),l(),s(33,"mat-option",3),c(34,"auto"),l(),s(35,"mat-option",3),c(36,"always"),l(),s(37,"mat-option",3),c(38,"exceptZero"),l(),s(39,"mat-option",3),c(40,"negative"),l(),s(41,"mat-option",3),c(42,"never"),l()()(),s(43,"mat-form-field")(44,"mat-label"),c(45,"Minimum integer digits"),l(),s(46,"input",4),_(),C("ngModelChange",function(r){return x(i.minimumIntegerDigits,r)||(i.minimumIntegerDigits=r),r}),l(),s(47,"mat-error"),c(48,"Please enter a number from 1 to 21"),l()(),s(49,"mat-form-field")(50,"mat-label"),c(51,"Minimum fraction digits"),l(),s(52,"input",5),_(),C("ngModelChange",function(r){return x(i.minimumFractionDigits,r)||(i.minimumFractionDigits=r),r}),l(),s(53,"mat-error"),c(54,"Please enter a number from 0 to 20"),l()(),s(55,"mat-form-field")(56,"mat-label"),c(57,"Maximum fraction digits"),l(),s(58,"input",5),_(),C("ngModelChange",function(r){return x(i.maximumFractionDigits,r)||(i.maximumFractionDigits=r),r}),l(),s(59,"mat-error"),c(60,"Please enter a number from 0 to 20"),l()(),s(61,"mat-form-field")(62,"mat-label"),c(63,"Minimum significant digits"),l(),s(64,"input",4),_(),C("ngModelChange",function(r){return x(i.minimumSignificantDigits,r)||(i.minimumSignificantDigits=r),r}),l(),s(65,"mat-error"),c(66,"Please enter a number from 1 to 21"),l()(),s(67,"mat-form-field")(68,"mat-label"),c(69,"Maximum significant digits"),l(),s(70,"input",4),_(),C("ngModelChange",function(r){return x(i.maximumSignificantDigits,r)||(i.maximumSignificantDigits=r),r}),l(),s(71,"mat-error"),c(72,"Please enter a number from 1 to 21"),l()()(),s(73,"p"),c(74),me(75,"intlPercent"),l()),t&2&&(d(4),v("ngModel",i.enteredNumber),y(),d(4),v("ngModel",i.locale),y(),d(),f("value",void 0),d(2),q(i.languages),d(5),v("ngModel",i.notation),y(),d(),f("value",void 0),d(2),f("value","standard"),d(2),f("value","scientific"),d(2),f("value","engineering"),d(2),f("value","compact"),d(5),v("ngModel",i.signDisplay),y(),d(),f("value",void 0),d(2),f("value","auto"),d(2),f("value","always"),d(2),f("value","exceptZero"),d(2),f("value","negative"),d(2),f("value","never"),d(5),v("ngModel",i.minimumIntegerDigits),y(),d(6),v("ngModel",i.minimumFractionDigits),y(),d(6),v("ngModel",i.maximumFractionDigits),y(),d(6),v("ngModel",i.minimumSignificantDigits),y(),d(6),v("ngModel",i.maximumSignificantDigits),y(),d(4),je(" ",Me(75,22,i.enteredNumber(),i.options()),`
`))},dependencies:[fe,ke,Ge,ue,st,ot,le,de,Pe,pe,$,Q,lt,Yr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return a})();var zi="mdc-tab-indicator--active",bo="mdc-tab-indicator--no-transition",Wi=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(i=>i.elementRef.nativeElement===n),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let i=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},rl=(()=>{class a{_elementRef=u(z);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(zi);return}let i=t.getBoundingClientRect(),o=e.width/i.width,r=e.left-i.left;t.classList.add(bo),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(bo),t.classList.add(zi),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(zi)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",O]}})}return a})();var _o={passive:!0},ol=650,sl=100;function ll(a){let n=a+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(n)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(n)?n:""}var dl=(()=>{class a{_elementRef=u(z);_changeDetectorRef=u(Ie);_viewportRuler=u(xt);_dir=u(rt,{optional:!0});_ngZone=u(J);_platform=u(Te);_sharedResizeObserver=u(Bn);_injector=u(Le);_renderer=u(xe);_animationsDisabled=at();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new R;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new R;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new X;indexFocused=new X;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),_o),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),_o))}ngAfterContentInit(){let e=this._dir?this._dir.change:qe("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Qi(32),re(this._destroyed)),i=this._viewportRuler.change(150).pipe(re(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new xa(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ht(o,{injector:this._injector}),et(e,i,t,this._items.changes,this._itemsResized()).pipe(re(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?un:this._items.changes.pipe(Ye(this._items),kt(e=>new Mt(t=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(o=>t.next(o));return e.forEach(o=>i.observe(o.elementRef.nativeElement)),()=>{i.disconnect()}}))),ea(1),We(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Qe(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:r}=t.elementRef.nativeElement,m,p;this._getLayoutDirection()=="ltr"?(m=o,p=m+r):(p=this._tabListInner.nativeElement.offsetWidth-o,m=p-r);let S=this.scrollDistance,h=this.scrollDistance+i;m<S?this.scrollDistance-=S-m:p>h&&(this.scrollDistance+=Math.min(p-h,m-S))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,i=e-t>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Ki(ol,sl).pipe(re(et(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:o}=this._scrollHeader(e);(o===0||o>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||a)};static \u0275dir=V({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",O],selectedIndex:[2,"selectedIndex","selectedIndex",It]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})();var cl=new k("MAT_TABS_CONFIG");var Hi=(()=>{class a extends dl{_focusedItem=g(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new Ui(!1);stretchTabs=!0;animationDuration="";_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=g(!1);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=u(cl,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new Wi(this._items),this._items.changes.pipe(Ye(null),re(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Ye(null),re(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let t=0;t<e.length;t++)if(e[t].active){this.selectedIndex=t,this.tabPanel&&(this.tabPanel._activeTabId=e[t].id),this._focusedItem.set(e[t]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(e){return this._keyManager?.activeItem===e}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){let e=["tabListContainer"],t=["tabList"],i=["tabListInner"],o=["nextPaginator"],r=["previousPaginator"];return I({type:a,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(S,h,w){if(S&1&&Et(w,ji,5),S&2){let E;L(E=B())&&(h._items=E)}},viewQuery:function(S,h){if(S&1&&Ze(e,7)(t,7)(i,7)(o,5)(r,5),S&2){let w;L(w=B())&&(h._tabListContainer=w.first),L(w=B())&&(h._tabList=w.first),L(w=B())&&(h._tabListInner=w.first),L(w=B())&&(h._nextPaginator=w.first),L(w=B())&&(h._previousPaginator=w.first)}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(S,h){S&2&&(se("role",h._getRole()),li("--%NS%mat-tab-header-animation-duration",h.animationDuration),Y("mat-mdc-tab-header-pagination-controls-enabled",h._showPaginationControls)("mat-mdc-tab-header-rtl",h._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",h.stretchTabs)("mat-primary",h.color!=="warn"&&h.color!=="accent")("mat-accent",h.color==="accent")("mat-warn",h.color==="warn")("_mat-animation-noopable",h._animationsDisabled))},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",O],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",O],animationDuration:[2,"animationDuration","animationDuration",ll],backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",O],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[we],ngContentSelectors:["*"],decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(S,h){S&1&&(Ae(),s(0,"div",5,0),U("click",function(){return h._handlePaginatorClick("before")})("mousedown",function(E){return h._handlePaginatorPress("before",E)})("touchend",function(){return h._stopInterval()}),ve(2,"div",6),l(),s(3,"div",7,1),U("keydown",function(E){return h._handleKeydown(E)}),s(5,"div",8,2),U("cdkObserveContent",function(){return h._onContentChanges()}),s(7,"div",9,3),Z(9),l()()(),s(10,"div",10,4),U("mousedown",function(E){return h._handlePaginatorPress("after",E)})("click",function(){return h._handlePaginatorClick("after")})("touchend",function(){return h._stopInterval()}),ve(12,"div",6),l()),S&2&&(Y("mat-mdc-tab-header-pagination-disabled",h._disableScrollBefore),f("matRippleDisabled",h._disableScrollBefore||h.disableRipple),d(10),Y("mat-mdc-tab-header-pagination-disabled",h._disableScrollAfter),f("matRippleDisabled",h._disableScrollAfter||h.disableRipple))},dependencies:[Xt,_a],styles:[`.mdc-tab {
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
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
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
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
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
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
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
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})})()}return a})(),ji=(()=>{class a extends rl{_tabNavBar=u(Hi);elementRef=u(z);_focusMonitor=u(ga);_destroyed=new R;_isActive=!1;_tabIndex=F(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=g(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=u(Oe).getId("mat-tab-link-");constructor(){super(),u(it).load(wn);let e=u(Ca,{optional:!0}),t=u(new Nt("tabindex"),{optional:!0});this.rippleConfig=e||{},this.tabIndex=t==null?0:parseInt(t)||0,at()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(re(this._destroyed)).subscribe(i=>{this.fitInkBarToContent=i})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===32&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){return I({type:a,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(i,o){i&1&&U("focus",function(){return o._handleFocus()})("keydown",function(m){return o._handleKeydown(m)}),i&2&&(se("aria-controls",o._getAriaControls())("aria-current",o._getAriaCurrent())("aria-disabled",o.disabled)("aria-selected",o._getAriaSelected())("id",o.id)("tabIndex",o._tabIndex())("role",o._getRole()),Y("mat-mdc-tab-disabled",o.disabled)("mdc-tab--active",o.active))},inputs:{active:[2,"active","active",O],disabled:[2,"disabled","disabled",O],disableRipple:[2,"disableRipple","disableRipple",O],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:It(t)],id:"id"},exportAs:["matTabLink"],features:[we],ngContentSelectors:["*"],decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(i,o){i&1&&(Ae(),ve(0,"span",0)(1,"div",1),s(2,"span",2)(3,"span",3),Z(4),l()()),i&2&&(d(),f("matRippleTrigger",o.elementRef.nativeElement)("matRippleDisabled",o.rippleDisabled))},dependencies:[Xt],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
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
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
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
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
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
`],encapsulation:2})})()}return a})(),yo=(()=>{class a{id=u(Oe).getId("mat-tab-nav-panel-");_activeTabId;static \u0275fac=function(t){return new(t||a)};static \u0275cmp=(function(){return I({type:a,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-mdc-tab-nav-panel"],hostVars:2,hostBindings:function(i,o){i&2&&se("aria-labelledby",o._activeTabId)("id",o.id)},inputs:{id:"id"},exportAs:["matTabNavPanel"],ngContentSelectors:["*"],decls:1,vars:0,template:function(i,o){i&1&&(Ae(),Z(0))},encapsulation:2})})()}return a})();var vo=(()=>{class a{static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-pipes"]],features:[ie([{provide:Wn,useValue:{subscriptSizing:"dynamic"}}])],decls:35,vars:11,consts:[["dateActive","routerLinkActive"],["decimalActive","routerLinkActive"],["percentActive","routerLinkActive"],["currencyActive","routerLinkActive"],["unitActive","routerLinkActive"],["languageActive","routerLinkActive"],["countryActive","routerLinkActive"],["listActive","routerLinkActive"],["relativeTimeActive","routerLinkActive"],["durationActive","routerLinkActive"],["tabPanel",""],["mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","","routerLink","date","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","decimal","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","percent","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","currency","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","unit","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","language","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","country","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","list","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","relative-time","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","duration","routerLinkActive","",3,"active"],[1,"panel-container"]],template:function(t,i){if(t&1&&(s(0,"nav",11)(1,"a",12,0),c(3," Date "),l(),s(4,"a",13,1),c(6," Decimal "),l(),s(7,"a",14,2),c(9," Percent "),l(),s(10,"a",15,3),c(12,"Currency"),l(),s(13,"a",16,4),c(15," Unit "),l(),s(16,"a",17,5),c(18,"Language"),l(),s(19,"a",18,6),c(21," Country "),l(),s(22,"a",19,7),c(24," List "),l(),s(25,"a",20,8),c(27,"Relative Time"),l(),s(28,"a",21,9),c(30," Duration "),l()(),ve(31,"mat-tab-nav-panel",null,10),s(33,"div",22),ve(34,"router-outlet"),l()),t&2){let o=ne(2),r=ne(5),m=ne(8),p=ne(11),S=ne(14),h=ne(17),w=ne(20),E=ne(23),M=ne(26),A=ne(29),ae=ne(32);f("tabPanel",ae),d(),f("active",o.isActive),d(3),f("active",r.isActive),d(3),f("active",m.isActive),d(3),f("active",p.isActive),d(3),f("active",S.isActive),d(3),f("active",h.isActive),d(3),f("active",w.isActive),d(3),f("active",E.isActive),d(3),f("active",M.isActive),d(3),f("active",A.isActive)}},dependencies:[wa,Ma,Sa,Hi,ji,yo],styles:[".panel-container[_ngcontent-%COMP%]{padding:16px}"]})}}return a})();function ml(a,n){if(a&1&&(s(0,"mat-option",5),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}var xo=(()=>{class a{constructor(){this.selectedDate=g(ni(new Date(new Date().getTime()-6e4))),this.languages=ge,this.numeric=g(void 0),this.style=g(void 0),this.locale=g(void 0),this.options=F(()=>({locale:this.locale(),numeric:this.numeric(),style:this.style()}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-relative-time"]],decls:42,vars:16,consts:[["picker",""],[1,"fields-container"],["matInput","","placeholder","Choose a date","type","datetime-local",3,"ngModelChange","ngModel"],["mat-icon-button","","matIconSuffix","",3,"click"],[3,"ngModelChange","ngModel"],[3,"value"]],template:function(t,i){if(t&1){let o=bt();s(0,"div",1)(1,"mat-form-field")(2,"mat-label"),c(3,"Date"),l(),s(4,"input",2,0),_(),C("ngModelChange",function(m){return Ce(o),x(i.selectedDate,m)||(i.selectedDate=m),Se(m)}),l(),s(6,"button",3),U("click",function(){Ce(o);let m=ne(5);return Se(m.showPicker())}),s(7,"mat-icon"),c(8,"today"),l()()(),s(9,"mat-form-field")(10,"mat-label"),c(11,"Locale"),l(),s(12,"mat-select",4),_(),C("ngModelChange",function(m){return Ce(o),x(i.locale,m)||(i.locale=m),Se(m)}),s(13,"mat-option",5),c(14,"Browser default"),l(),G(15,ml,2,2,"mat-option",5,K),l()(),s(17,"mat-form-field")(18,"mat-label"),c(19,"Numeric"),l(),s(20,"mat-select",4),_(),C("ngModelChange",function(m){return Ce(o),x(i.numeric,m)||(i.numeric=m),Se(m)}),s(21,"mat-option",5),c(22,"Browser default"),l(),s(23,"mat-option",5),c(24,"auto"),l(),s(25,"mat-option",5),c(26,"always"),l()()(),s(27,"mat-form-field")(28,"mat-label"),c(29,"Style"),l(),s(30,"mat-select",4),_(),C("ngModelChange",function(m){return Ce(o),x(i.style,m)||(i.style=m),Se(m)}),s(31,"mat-option",5),c(32,"Browser default"),l(),s(33,"mat-option",5),c(34,"long"),l(),s(35,"mat-option",5),c(36,"short"),l(),s(37,"mat-option",5),c(38,"narrow"),l()()()(),s(39,"p"),c(40),me(41,"intlRelativeTime"),l()}t&2&&(d(4),v("ngModel",i.selectedDate),y(),d(8),v("ngModel",i.locale),y(),d(),f("value",void 0),d(2),q(i.languages),d(5),v("ngModel",i.numeric),y(),d(),f("value",void 0),d(2),f("value","auto"),d(2),f("value","always"),d(5),v("ngModel",i.style),y(),d(),f("value",void 0),d(2),f("value","long"),d(2),f("value","short"),d(2),f("value","narrow"),d(3),T(Me(41,13,i.selectedDate(),i.options())))},dependencies:[fe,ke,ue,le,de,Pe,Mn,ti,pe,$,Q,rn,Xr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:center;margin-bottom:16px}"]})}}return a})();var Co=["acre","bit","byte","celsius","centimeter","day","degree","fahrenheit","fluid-ounce","foot","gallon","gigabit","gigabyte","gram","hectare","hour","inch","kilobit","kilobyte","kilogram","kilometer","liter","megabit","megabyte","meter","mile","mile-scandinavian","milliliter","millimeter","millisecond","minute","month","ounce","percent","petabyte","pound","second","stone","terabit","terabyte","week","yardv","year"];function ul(a,n){if(a&1&&(s(0,"mat-option",3),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}function fl(a,n){if(a&1&&(s(0,"mat-option",3),c(1),l()),a&2){let e=n.$implicit;f("value",e),d(),T(e)}}var So=(()=>{class a{constructor(){this.enteredNumber=g("1"),this.selectedUnit=g("hour"),this.languages=ge,this.units=Co,this.locale=g(void 0),this.notation=g(void 0),this.signDisplay=g(void 0),this.unitDisplay=g(void 0),this.minimumIntegerDigits=g(void 0),this.minimumFractionDigits=g(void 0),this.maximumFractionDigits=g(void 0),this.minimumSignificantDigits=g(void 0),this.maximumSignificantDigits=g(void 0),this.options=F(()=>({locale:this.locale(),notation:this.notation(),signDisplay:this.signDisplay(),unitDisplay:this.unitDisplay(),minimumIntegerDigits:this.minimumIntegerDigits()??void 0,minimumFractionDigits:this.minimumFractionDigits()??void 0,maximumFractionDigits:this.maximumFractionDigits()??void 0,minimumSignificantDigits:this.minimumSignificantDigits()??void 0,maximumSignificantDigits:this.maximumSignificantDigits()??void 0}))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-unit"]],decls:94,vars:32,consts:[[1,"fields-container"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[3,"value"],["matInput","","max","21","min","1","type","number",3,"ngModelChange","ngModel"],["matInput","","max","20","min","0","type","number",3,"ngModelChange","ngModel"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"mat-form-field")(2,"mat-label"),c(3,"Number"),l(),s(4,"input",1),_(),C("ngModelChange",function(r){return x(i.enteredNumber,r)||(i.enteredNumber=r),r}),l()(),s(5,"mat-form-field")(6,"mat-label"),c(7,"Unit"),l(),s(8,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.selectedUnit,r)||(i.selectedUnit=r),r}),G(9,ul,2,2,"mat-option",3,K),l()(),s(11,"mat-form-field")(12,"mat-label"),c(13,"Locale"),l(),s(14,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.locale,r)||(i.locale=r),r}),s(15,"mat-option",3),c(16,"Browser default"),l(),G(17,fl,2,2,"mat-option",3,K),l()(),s(19,"mat-form-field")(20,"mat-label"),c(21,"Unit display"),l(),s(22,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.unitDisplay,r)||(i.unitDisplay=r),r}),s(23,"mat-option",3),c(24,"Browser default"),l(),s(25,"mat-option",3),c(26,"narrow"),l(),s(27,"mat-option",3),c(28,"short"),l(),s(29,"mat-option",3),c(30,"long"),l()()(),s(31,"mat-form-field")(32,"mat-label"),c(33,"Notation"),l(),s(34,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.notation,r)||(i.notation=r),r}),s(35,"mat-option",3),c(36,"Browser default"),l(),s(37,"mat-option",3),c(38,"standard"),l(),s(39,"mat-option",3),c(40,"scientific"),l(),s(41,"mat-option",3),c(42,"engineering"),l(),s(43,"mat-option",3),c(44,"compact"),l()()(),s(45,"mat-form-field")(46,"mat-label"),c(47,"Sign display"),l(),s(48,"mat-select",2),_(),C("ngModelChange",function(r){return x(i.signDisplay,r)||(i.signDisplay=r),r}),s(49,"mat-option",3),c(50,"Browser default"),l(),s(51,"mat-option",3),c(52,"auto"),l(),s(53,"mat-option",3),c(54,"always"),l(),s(55,"mat-option",3),c(56,"exceptZero"),l(),s(57,"mat-option",3),c(58,"negative"),l(),s(59,"mat-option",3),c(60,"never"),l()()(),s(61,"mat-form-field")(62,"mat-label"),c(63,"Minimum integer digits"),l(),s(64,"input",4),_(),C("ngModelChange",function(r){return x(i.minimumIntegerDigits,r)||(i.minimumIntegerDigits=r),r}),l(),s(65,"mat-error"),c(66,"Please enter a number from 1 to 21"),l()(),s(67,"mat-form-field")(68,"mat-label"),c(69,"Minimum fraction digits"),l(),s(70,"input",5),_(),C("ngModelChange",function(r){return x(i.minimumFractionDigits,r)||(i.minimumFractionDigits=r),r}),l(),s(71,"mat-error"),c(72,"Please enter a number from 0 to 20"),l()(),s(73,"mat-form-field")(74,"mat-label"),c(75,"Maximum fraction digits"),l(),s(76,"input",5),_(),C("ngModelChange",function(r){return x(i.maximumFractionDigits,r)||(i.maximumFractionDigits=r),r}),l(),s(77,"mat-error"),c(78,"Please enter a number from 0 to 20"),l()(),s(79,"mat-form-field")(80,"mat-label"),c(81,"Minimum significant digits"),l(),s(82,"input",4),_(),C("ngModelChange",function(r){return x(i.minimumSignificantDigits,r)||(i.minimumSignificantDigits=r),r}),l(),s(83,"mat-error"),c(84,"Please enter a number from 1 to 21"),l()(),s(85,"mat-form-field")(86,"mat-label"),c(87,"Maximum significant digits"),l(),s(88,"input",4),_(),C("ngModelChange",function(r){return x(i.maximumSignificantDigits,r)||(i.maximumSignificantDigits=r),r}),l(),s(89,"mat-error"),c(90,"Please enter a number from 1 to 21"),l()()(),s(91,"p"),c(92),me(93,"intlUnit"),l()),t&2&&(d(4),v("ngModel",i.enteredNumber),y(),d(4),v("ngModel",i.selectedUnit),y(),d(),q(i.units),d(5),v("ngModel",i.locale),y(),d(),f("value",void 0),d(2),q(i.languages),d(5),v("ngModel",i.unitDisplay),y(),d(),f("value",void 0),d(2),f("value","narrow"),d(2),f("value","short"),d(2),f("value","long"),d(5),v("ngModel",i.notation),y(),d(),f("value",void 0),d(2),f("value","standard"),d(2),f("value","scientific"),d(2),f("value","engineering"),d(2),f("value","compact"),d(5),v("ngModel",i.signDisplay),y(),d(),f("value",void 0),d(2),f("value","auto"),d(2),f("value","always"),d(2),f("value","exceptZero"),d(2),f("value","negative"),d(2),f("value","never"),d(5),v("ngModel",i.minimumIntegerDigits),y(),d(6),v("ngModel",i.minimumFractionDigits),y(),d(6),v("ngModel",i.maximumFractionDigits),y(),d(6),v("ngModel",i.minimumSignificantDigits),y(),d(6),v("ngModel",i.maximumSignificantDigits),y(),d(4),je(" ",Sn(93,28,i.enteredNumber(),i.selectedUnit(),i.options()),`
`))},dependencies:[fe,ke,Ge,ue,st,ot,le,de,Pe,pe,$,Q,lt,Qr],styles:[".fields-container[_ngcontent-%COMP%]{display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start;margin-bottom:16px}.fields-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:250px}"]})}}return a})();var pl=[{path:"",component:vo,children:[{path:"date",component:mo},{path:"decimal",component:uo},{path:"percent",component:go},{path:"currency",component:io},{path:"unit",component:So},{path:"language",component:po},{path:"country",component:Jr},{path:"list",component:ho},{path:"relative-time",component:xo},{path:"duration",component:fo},{path:"",redirectTo:"date",pathMatch:"full"}]}],Gb=pl;export{Gb as default};
