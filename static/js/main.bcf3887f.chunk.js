(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,i=n(3),a=n.n(i),r=n(6),o=n(4),c=n(5),l=n(8),u=n(7),b=n(1),h=n.n(b),j=n(17),d=n(0),m=function(t){var e=t.goods;return Object(d.jsx)("ul",{className:"list",children:e.map((function(t){return Object(d.jsx)("li",{className:"list__item",children:t.name},t.id)}))})},p=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t){return{name:t,id:Object(j.a)()}})));!function(t){t[t.none=0]="none",t[t.alphabet=1]="alphabet",t[t.length=2]="length"}(s||(s={}));var f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={isVisibleList:!1,isReversedList:!1,sortBy:s.none},t.start=function(){t.setState({isVisibleList:!0})},t.reverseList=function(){t.setState((function(t){return{isReversedList:!t.isReversedList}}))},t.sortBy=function(e){t.setState({sortBy:e})},t.resetOfList=function(){t.setState({sortBy:s.none,isReversedList:!1})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isVisibleList,i=e.sortBy,a=e.isReversedList,o=Object(r.a)(p);return o.sort((function(t,e){switch(i){case s.alphabet:return t.name.localeCompare(e.name);case s.length:return t.name.length-e.name.length;default:return 0}})),a&&o.reverse(),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"List of Goods"}),!n&&Object(d.jsx)("button",{className:"button",type:"button",onClick:this.start,children:"Start"}),n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"manipulation buttons",children:[Object(d.jsx)("button",{className:"manipulation buttons__button",type:"button",onClick:this.reverseList,children:"Reverse"}),Object(d.jsx)("button",{className:"manipulation buttons__button",type:"button",onClick:function(){return t.sortBy(s.alphabet)},children:"Sort alphabetically"}),Object(d.jsx)("button",{className:"manipulation buttons__button",type:"button",onClick:function(){return t.sortBy(s.length)},children:"Sort by length"}),Object(d.jsx)("button",{className:"manipulation buttons__button",type:"button",onClick:this.resetOfList,children:"Reset"})]}),n&&Object(d.jsx)(m,{goods:o})]})]})}}]),n}(h.a.Component),O=f;a.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bcf3887f.chunk.js.map