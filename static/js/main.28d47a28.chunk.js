(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),c=n(6),r=n.n(c),o=(n(18),n(4)),u=n(3),i=function(e){var t=l.a.createElement("img",{src:"https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png",alt:"logo"});return l.a.createElement("div",{className:"header"},t,l.a.createElement("h3",null,"My Notes"))},m=n(2),E=n(7),s=n(8),d=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),c=n[0],r=n[1],o=function(e){var t=e.target,n=t.name,a=t.value;r(function(e){return Object(E.a)({},e,Object(m.a)({},n,a))})};return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",null,l.a.createElement("input",{value:c.title,type:"text",placeholder:"Title",name:"title",onChange:o}),l.a.createElement("p",null,l.a.createElement("textarea",{value:c.content,name:"content",placeholder:"Write your note...",onChange:o})),l.a.createElement("button",{type:"button",onClick:function(t){c.title?e.onAdd(c):alert("please give a title.."),r({title:"",content:""}),t.preventDefault()}},l.a.createElement(s.a,{size:35}))))},f=n(9),p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"note"},l.a.createElement("div",{className:"note-title"},l.a.createElement("h1",null,e.title)),l.a.createElement("div",null,l.a.createElement("p",null,e.content)),l.a.createElement("button",{type:"button",onClick:function(){return e.onDelete(e.id)}},l.a.createElement(f.a,{size:20}))))},g=function(e){return l.a.createElement("div",{className:"count"},l.a.createElement("h4",null,"Notes: ",e.count))},b=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=function(e){c(function(t){return Object(o.a)(t.filter(function(t,n){return n!=e}))})};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,null),l.a.createElement(g,{count:n.length}),l.a.createElement(d,{onAdd:function(e){c(function(t){return[].concat(Object(o.a)(t),[e])})}}),n.map(function(e,t){return l.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:r})}))},v=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,21)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null))),v()}},[[10,3,2]]]);
//# sourceMappingURL=main.28d47a28.chunk.js.map