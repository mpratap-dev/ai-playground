(this["webpackJsonpgato-chat"]=this["webpackJsonpgato-chat"]||[]).push([[0],{250:function(e,t,n){},251:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},352:function(e,t,n){"use strict";n.r(t);var a=n(79),c=n.n(a),s=n(244),r=n.n(s),i=(n(250),n(21)),o=(n(251),n.p+"static/media/down-arrow.39bd4e27.svg"),u=n.p+"static/media/man.28ec5b21.png",d=n(40),l=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("span",{className:"logo",children:"AI Playground"}),Object(d.jsxs)("ul",{className:"menu",children:[Object(d.jsx)("li",{className:"menu__items",children:Object(d.jsx)("a",{className:"menu__links",href:"https://ai.google/education/",children:"Learn AI"})}),Object(d.jsx)("li",{className:"menu__items",children:Object(d.jsx)("a",{className:"menu__links",href:"https://blog.google/technology/ai/",children:"Docs"})}),Object(d.jsx)("li",{className:"menu__items",children:Object(d.jsxs)("a",{className:"menu__links",href:"/",children:[Object(d.jsx)("img",{height:"25",width:"25",src:u,className:"user-img",alt:"user-img"}),"Account",Object(d.jsx)("img",{src:o,alt:"options",height:"10",width:"10",className:"ml-2"})]})})]})]})},b=n(20),j=(n(253),n.p+"static/media/plus.82727587.svg"),h=n.p+"static/media/close.84c5eb04.svg",m=n.p+"static/media/reload.2640bb29.svg",p=n(0),O=n(1),f=n(4),v=n(5),g=c.a.createContext(),x=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props,t=e.dispatchTab,n=e.tabState,a=e.children;return Object(d.jsx)(g.Provider,{value:{dispatchTab:t,tabState:n},children:a})}}]),n}(a.PureComponent),N="SET_TABS",y="ADD_TAB",T="REMOVE_TAB",w="APPLY_CODE",_=function(e){var t=e.tabs,n=e.setTabs,c=e.activeTab,s=e.setActiveTab,r=Object(a.useState)(!1),o=Object(i.a)(r,2),u=o[0],l=o[1],p=Object(a.useContext)(g).dispatchTab,O=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=O.current.children[t.length-1];null===e||void 0===e||e.scrollIntoView()}),[t]),Object(d.jsxs)("div",{className:"tabs--row",children:[Object(d.jsx)("div",{className:"tabs--container",ref:O,children:Array.isArray(t)&&t.map((function(e,a){var r=e.id,i=e.name;return Object(d.jsxs)("span",{className:"tab--links ".concat(c===r?"active":""),onClick:function(){return function(e){return s(e)}(r)},children:[i,!!a&&Object(d.jsx)("button",{className:"close-btn",onClick:function(e){return function(e,a,r){var i=t[r-1];e.stopPropagation(),n(t.filter((function(e){return e.id!==a}))),c===a&&s(null===i||void 0===i?void 0:i.id)}(e,r,a)},children:Object(d.jsx)("img",{src:h,alt:"close",width:"8",height:"8"})})]},"tab_".concat(r))}))}),Object(d.jsx)("button",{className:"add-tab",onClick:function(){var e,a=null===(e=t[t.length-1])||void 0===e?void 0:e.id;n([].concat(Object(b.a)(t),[{name:"newScript".concat(a+1,".js"),id:a+1,code:"/* This is an empty tab.*/"}])),s(a+1)},children:Object(d.jsx)("img",{src:j,alt:"add_tab",height:"10",width:"10"})}),Object(d.jsxs)("button",{className:"apply-btn",onClick:function(){p(function(e){return{type:N,payload:e}}(t)),l(!0),setTimeout((function(){l(!1)}),2e3)},children:[Object(d.jsx)("img",{src:m,alt:"sync",height:"13",width:"13",className:"reload-icon"}),Object(d.jsx)("span",{className:"ml-2",children:"Apply changes"})]}),Object(d.jsx)("span",{className:"snackbar ".concat(u?"show":""),children:"Code Applied"})]})},C=(n(254),n(245)),S=function(e){var t=e.setTabs,n=e.tabs,a=e.id,c=n.find((function(e){return e.id===a})).code;return Object(d.jsx)(C.a,{language:"javascript",theme:"vs-dark",value:c,options:{selectOnLineNumbers:!0,fontSize:14,lineHeight:30,automaticLayout:!0,renderLineHighlight:!1,minimap:{enabled:!1}},onChange:function(e){t(n.map((function(t){var n=t.name,c=t.id,s=t.code;return{name:n,id:c,code:a===c?e:s}})))},editorDidMount:function(e){return e.focus()}})},k=function(e){var t=e.activeTab,n=e.tabs,a=e.setTabs;return Object(d.jsx)("div",{className:"tab--content",children:Array.isArray(n)&&n.map((function(e){var c=e.id;return Object(d.jsx)("div",{className:"editor-container ".concat(t!==c?"d-none":""),children:Object(d.jsx)(S,{setTabs:a,tabs:n,id:c})},"tab-content_".concat(c))}))})},A=function(){var e=Object(a.useState)([{id:0,name:"script.js",code:"function name (param) {return param;}"}]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),r=Object(i.a)(s,2),o=r[0],u=r[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{tabs:n,setTabs:c,setActiveTab:u,activeTab:o}),Object(d.jsx)(k,{tabs:n,activeTab:o,setTabs:c})]})},P=(n(347),n(12)),E=n.n(P),I=n(229);function D(){return F.apply(this,arguments)}function F(){return(F=Object(I.a)(E.a.mark((function e(){var t,n,a,c=arguments;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n)});case 4:return a=e.sent,e.t0=a.status,e.next=8,a.text();case 8:return e.t1=e.sent,e.abrupt("return",{status:e.t0,text:e.t1});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e){var t=e.chats,n=e.setChats,c=Object(a.useState)(""),s=Object(i.a)(c,2),r=s[0],o=s[1],u=Object(a.useContext)(g).tabState.tabs,l=function(){var e=Object(I.a)(E.a.mark((function e(){var a,c,s,i,d,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.find((function(e){return!e.id})),c={code:"(".concat(a.code,")('").concat(encodeURIComponent(r),"')")},o(""),e.next=5,D("https://shrouded-oasis-94153.herokuapp.com/",c);case 5:s=e.sent,i=s.status,d=s.text,200===i?(l=t.map((function(e){var n=e.id,a=e.sender,c=e.message,s=e.status;return{id:n,sender:a,message:n===t.length-1&&"bot"===a?decodeURI(d):c,status:n===t.length-1&&"bot"===a?"done":s}})),n(l)):n(t.filter((function(e){return"pending"!==e.status})));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=t[(null===t||void 0===t?void 0:t.length)-1];"pending"===(null===e||void 0===e?void 0:e.status)&&l()}),[t]),Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),n([].concat(Object(b.a)(t),[{id:t.length,sender:"user",message:r,status:"done"},{id:t.length+1,sender:"bot",message:"...",status:"pending"}]))},children:Object(d.jsx)("input",{type:"text",className:"chat-input",onChange:function(e){var t=e.target;return o(t.value)},value:r,placeholder:"Type a message and press Enter [ \u23ce ] to send"})})},R=n.p+"static/media/bot.bd17c634.svg",B=function(e){var t=e.chats,n=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e,a=(null===n||void 0===n||null===(e=n.current)||void 0===e?void 0:e.children)[t.length-1];null===a||void 0===a||a.scrollIntoView({behavior:"smooth"})}),[t]),Object(d.jsx)("div",{className:"chat--screen ".concat(t.length?"":"empty-chat"),ref:n,children:t.length?t.map((function(e,t){var n=e.sender,a=e.message,c=e.status;return Object(d.jsxs)("div",{className:"chat--row ".concat(n),children:[Object(d.jsx)("img",{src:"bot"===n?R:u,className:"chat--img",alt:"user_image"}),Object(d.jsx)("p",{className:"chat--bubble ".concat("pending"===c?"pending":""),children:"pending"!==c?a:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"dots"}),Object(d.jsx)("span",{className:"dots"}),Object(d.jsx)("span",{className:"dots"})]})})]},"message_".concat(t))})):Object(d.jsx)("span",{className:"no-message",children:"No messages here yet"})})},J=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(d.jsx)("div",{className:"col-8 mx-auto chatbox-container",children:Object(d.jsxs)("div",{className:"chat-wrapper",children:[Object(d.jsx)(B,{chats:n}),Object(d.jsx)(L,{chats:n,setChats:c})]})})},M=n(169),V={tabs:[{name:"script.js",id:0,code:"function name (param) {return param;}"}]},H=function(e,t){var n,a,c=t.type,s=t.payload;switch(c){case N:return Object(M.a)(Object(M.a)({},e),{},{tabs:s});case y:var r=null===(n=e.tabs[(null===(a=e.tabs)||void 0===a?void 0:a.length)-1])||void 0===n?void 0:n.id;return Object(M.a)(Object(M.a)({},e),{},{tabs:[].concat(Object(b.a)(e.tabs),[{name:"newScript".concat(r+1,".js"),id:r+1,code:"/* This is an empty tab.*/"}])});case T:return Object(M.a)(Object(M.a)({},e),{},{tabs:e.tabs.filter((function(e){return e.id!==s}))});case w:return Object(M.a)(Object(M.a)({},e),{},{tabs:e.tabs.map((function(e){var t=e.name,n=e.id,a=e.code;return{name:t,id:n,code:s.id===n?s.code:a}}))});default:return e}};n(348),n(349),n(350);var U=function(){var e=Object(a.useReducer)(H,V),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l,{}),Object(d.jsx)(x,{tabState:n,dispatchTab:c,children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-5 border-right",children:Object(d.jsx)(A,{})}),Object(d.jsx)("div",{className:"col-7",children:Object(d.jsx)(J,{})})]})})]})},z=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,370)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(U,{})}),document.getElementById("root")),z()}},[[352,1,2]]]);
//# sourceMappingURL=main.605095e2.chunk.js.map