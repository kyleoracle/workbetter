/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","knockout","ojs/ojknockout","ojs/ojmessaging"],function(a,f,b){a.Cb=function(){};a.Cb.Bv="invalidComponentTracker";a.Cb.pR="ojoptionchange";a.Cb.Bl="messagesShown";a.Cb.An="messagesHidden";a.Cb.zn="disabled";a.Cb.Kv="readOnly";a.Cb.Bo=function(d,c,e,g,f){e={};f=f.call()[a.Cb.Bv];var k;if(d===a.Cb.zn||d===a.Cb.Kv)return k=f&&f.peek()||null,null!==k&&b.isWriteableObservable(f)&&k.Bo.call(k,g,d,c)&&f.valueHasMutated(),e[d]=c,e};a.Cb._init=function(b,a){var e={};e[b]=a;return e};
a.Cb.S$=function(b,c,e,g){g=g.call();var f;b===a.Cb.Bv&&(f=g[b]?!0:!1)&&a.Cb.Xja(b,g,c,e);return{}};a.Cb.raa=function(d,c,e,g){c=f(c);g=g.call()[d];d===a.Cb.Bv&&c&&(c.off(a.Cb.pR,a.Cb.B1),g&&b.isWriteableObservable(g)&&(d=g.peek(),d.rL.call(d,e)&&g.valueHasMutated()))};a.Cb.B1=function(d,c){var e=d.data.sP,g,f=d.data.O,k=c.option,l=c.value;(k===a.Cb.Bl||k===a.Cb.An)&&e&&b.isWriteableObservable(e)&&(g=e.peek())&&g.Bo.call(g,f,k,l)&&e.valueHasMutated()};a.Cb.Xja=function(d,c,e,g){d=c[d];var h,k;e=f(e);
if(b.isObservable(d))k=d.peek(),null==k&&(k=new a.Jb,d(k));else throw Error("Binding attribute "+a.Cb.Bv+" should be bound to a ko observable.");null!==k&&(b.isWriteableObservable(d)&&(c=g.call(g,"option",a.Cb.Bl),h=g.call(g,"option",a.Cb.An),k.Bo.call(k,g,a.Cb.Bl,c),k.Bo.call(k,g,a.Cb.An,h),d.valueHasMutated()),g={sP:d,O:g},e.on(a.Cb.pR,g,a.Cb.B1))};a.ia.Me().Oe({"for":"editableValue",attributes:[a.Cb.Bv,a.Cb.zn,a.Cb.Kv],init:a.Cb._init,update:a.Cb.Bo,afterCreate:a.Cb.S$,beforeDestroy:a.Cb.raa});
a.Jb=function(){this.Init()};o_("InvalidComponentTracker",a.Jb,a);a.b.ga(a.Jb,a.b,"oj.InvalidComponentTracker");a.Jb.Bl="messagesShown";a.Jb.An="messagesHidden";a.Jb.zn="disabled";a.Jb.Kv="readOnly";a.Jb.prototype.Init=function(){a.Jb.r.Init.call(this);this.nu=[];this.fo=[];this.Gt=[];this.invalidHidden=this.invalidShown=!1};a.Jb.prototype.M2=function(){var b=null,a=this,e=this.BD;this.invalidShown&&(b=this.aJ());setTimeout(function(){(b=e===a.BD?b||a.aJ():a.aJ())&&b.call(b,"Focus")},1);return b?
!0:!1};a.b.g("InvalidComponentTracker.prototype.focusOnFirstInvalid",{M2:a.Jb.prototype.M2});a.Jb.prototype.showMessages=function(){var b,a,e;if(this.invalidHidden)for(a=this.Gt.length,e=0;e<a;e++)this.Gt[e]&&(b=this.nu[e].call(b,"showMessages"))};a.b.g("InvalidComponentTracker.prototype.showMessages",{showMessages:a.Jb.prototype.showMessages});a.Jb.prototype.aJ=function(){for(var b,a=0,e=this.fo.length,a=0;a<e;a++)if(b=this.fo[a])return this.nu[a];return null};a.Jb.prototype.rL=function(b){var a=
-1,e=!1;f.each(this.nu,function(e,f){0>a&&f===b&&(a=e)});0<=a&&(this.nu.splice(a,1),this.fo.splice(a,1),this.Gt.splice(a,1),this.QM(),e=!0);return e};a.Jb.prototype.Bo=function(b,c,e){var g=b.call(b,"isValid"),h=-1,k=!0,l;f.each(this.nu,function(a,c){0>h&&c===b&&(h=a)});switch(c){case a.Jb.Bl:case a.Jb.An:l=!1;e&&(0>h&&(h=this.nu.push(b)-1,this.jha(h,l)),!g&&a.Jb.fK(e)&&(l=!0,c===a.Jb.Bl&&(e=b.call(b,"option",a.Jb.zn),g=b.call(b,"option",a.Jb.Kv),l=e||g?!1:!0)),k=this.ly(c,h||0,l),this.QM(),k&&(void 0===
this.BD&&(this.BD=0),this.BD++));break;case a.Jb.zn:case a.Jb.Kv:k=!1,e&&(k=this.ly(a.Jb.Bl,h||0,!1),k=this.ly(a.Jb.An,h||0,!1)||k,this.QM())}return k};a.Jb.prototype.jha=function(b,c){void 0===this.fo[b]&&this.ly(a.Jb.Bl,b,c);void 0===this.Gt[b]&&this.ly(a.Jb.An,b,c)};a.Jb.prototype.QM=function(){this.invalidShown=0<=this.fo.indexOf(!0);this.invalidHidden=0<=this.Gt.indexOf(!0)};a.Jb.prototype.ly=function(b,c,e){var g=!1;b=b===a.Jb.Bl?this.fo:b===a.Jb.An?this.Gt:[];0<=c&&void 0!==b[c]?(g=b[c]!==
e?!0:!1)&&b.splice(c,1,e):(b.push(e),g=!0);return g};a.Jb.fK=function(b){return!a.X.isValid(b)}});