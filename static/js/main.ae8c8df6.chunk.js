(this["webpackJsonpshaping-your-path"]=this["webpackJsonpshaping-your-path"]||[]).push([[0],[,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=(a(15),a(8)),i=a(2),s=a(1),u=a(7),m=a.n(u),h=function(e,t,a){return new s.a(e).toAbs().scale(t,a).encode()},f=(a(3),function(e){var t=e.data,a=e.scaleX,r=e.scaleY,o=Object(n.useState)(h(t,a,r)),u=Object(i.a)(o,2),f=u[0],p=u[1],d=Object(n.useState)(!1),x=Object(i.a)(d,2),g=x[0],v=x[1];return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"visual"},c.a.createElement("svg",{width:"480px",height:"600px"},c.a.createElement("g",{transform:"translate(100)"},c.a.createElement("path",{fill:"none",stroke:"black",d:f}),g?function(e){var t=new s.a(e).toAbs().commands;return t.map((function(e,a,n){var r=e.type,o=e.x,i=e.y,u=(e.x1,e.y1,e.x2,e.y2,function(e){return e||n[a-1].x}),h=function(e){return e||n[a-1].y},f={x:u(o),y:h(i)};return c.a.createElement(m.a,{axis:function(e){switch(e){case s.a.HORIZ_LINE_TO:return"x";case s.a.VERT_LINE_TO:return"y";default:return"both"}}(r),defaultClassNameDragging:"dragging",position:{x:f.x,y:f.y},positionOffset:{x:-f.x,y:-f.y},onDrag:function(e,n){var c=a,r=n.x,o=n.y,i=t.map((function(e,t){return t===c?Object(l.a)({},e,{x:r,y:o}):e})),u=Object(s.b)(i);p(u)}},c.a.createElement("circle",{fill:"blue",stroke:"black",opacity:"0.5",r:5,cx:u(o),cy:h(i)}))}))}(f):null))),c.a.createElement("div",{className:"actions"},c.a.createElement("button",{className:"button",onClick:function(){return v(!g)}},g?"hide points":"show points"),c.a.createElement("textarea",{class:"textarea",rows:10,value:f,onChange:function(e){return p(e.target.value)},placeholder:"enter path data :)"})))}),p=(a(21),a(16),"M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411"),d=16,x=16;var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header is-flex"},c.a.createElement("h1",{className:"title"},"Shaping Your Path")),c.a.createElement(f,{data:p,scaleX:d,scaleY:x}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.ae8c8df6.chunk.js.map