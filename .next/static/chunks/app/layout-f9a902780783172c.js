(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8783:function(e){let t=!1,o={buttonText:"Drop Message",buttonActiveText:"Close",customCSS:""};function n(){let e=document.getElementById("message-gator-frame");e&&((t=!t)?(e.style.display="block",document.getElementById("cta-messsage-gator").innerHTML=o.buttonActiveText):(e.style.display="none",document.getElementById("cta-messsage-gator").innerHTML=o.buttonText))}e.exports={initMessageGator:e=>{if(!(userId=e.userId)){console.error("Message Gator: Please provide a valid userId");return}e?.buttonText&&(o.buttonText=e.buttonText),e?.buttonActiveText&&(o.buttonActiveText=e.buttonActiveText),e?.customCSS&&(o.customCSS=e.customCSS),function(e){if(!document.getElementById("cta-messsage-gator")){let t=[];e?.email&&t.push(`email=${encodeURIComponent(e?.email)}`),e?.name&&t.push(`name=${encodeURIComponent(e?.name)}`),e?.hideDetails&&t.push(`hideDetails=${encodeURIComponent(e?.hideDetails)}`);let r=t.join("&"),s=`https://mg.pushkaryadav.in/widget/${userId}${r?`?${r}`:""}`;console.log(s);let a=document.createElement("iframe");a.src=s,a.id="message-gator-frame",a.style.display="none",document.body.appendChild(a);let i=document.createElement("button");i.id="cta-messsage-gator",i.innerHTML=o.buttonText,i.addEventListener("click",n),document.body.appendChild(i),function(){let e=document.createElement("style");if(e.innerHTML=`
    #cta-messsage-gator{
      box-sizing: border-box;
      position: fixed;
      right: 1rem;
      bottom: 1rem;
      width: fit-content;
      padding: 0.5rem 0.8rem;
      font-size: 1.2rem;
      font-weight: 500;
      cursor: pointer;
      background-color: #fef08a;
      border: 4px solid #fef9c3; 
      border-radius: 2.5rem;
      color: #000;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      transition: 0.3s ease all;
    }
    #cta-messsage-gator:active{
      transform: scale(95%);
    }
    #message-gator-frame{
      width: 300px;
      height: 500px;
      max-height: 80vh;
      min-height: 200px;
      overflow-x: hidden;
      border-radius: 1.5rem;
      border: none;
      outline: 4px solid #fef9c3;
      position: fixed;
      right: 1rem;
      z-index: 9999;
      bottom: 5rem;
    }
    @media screen and (max-width: 1200px){
      #message-gator-frame{
        width: 250px;
        height: 400px;
      }
    }
    @media screen and (max-width: 450px){
      #message-gator-frame{
        width: 90%;
        height: 70vh;
        right: 5%;
      }
    }
  `,document.head.appendChild(e),o.customCSS){let e=document.createElement("style");e.innerHTML=o.customCSS,document.head.appendChild(e)}}()}}(e)}}},9387:function(e,t,o){Promise.resolve().then(o.t.bind(o,8877,23)),Promise.resolve().then(o.bind(o,1392)),Promise.resolve().then(o.t.bind(o,368,23))},1392:function(e,t,o){"use strict";o.r(t);var n=o(7437),r=o(2265),s=o(8783);t.default=function(){return(0,r.useEffect)(()=>{(0,s.initMessageGator)({userId:"8d5ca0c4-1c9f-451b-9dbd-a824017ca9f1",customCSS:"#cta-messsage-gator{background: #242b2e; color: #fff;border:none; border-radius: 25px; padding: 10px 20px; font-size: 16px; font-weight: 600; position: fixed; bottom: 20px; right: 20px; z-index: 9999; cursor: pointer;} #cta-messsage-gator:active{border:none;}",buttonText:"Drop a Message!"})},[]),(0,n.jsx)(n.Fragment,{})}},8877:function(){},368:function(e){e.exports={style:{fontFamily:"'__Karla_546b71', '__Karla_Fallback_546b71'",fontStyle:"normal"},className:"__className_546b71"}},622:function(e,t,o){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o(2265),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,s={},c=null,m=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)a.call(t,n)&&!d.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:m,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},7437:function(e,t,o){"use strict";e.exports=o(622)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=9387)}),_N_E=e.O()}]);