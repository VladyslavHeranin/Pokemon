(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{4:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),i=s.n(c),a=s(16),r=s.n(a),l=(s(4),s(6)),j=s.n(l),o=s(17),m=s(3),p=function(e){var t=e.item,s=e.idItem,c=t.types.map((function(e,t){return Object(n.jsx)("p",{className:"item__type",children:e.type.name},t)}));return Object(n.jsxs)("div",{onClick:function(){return s(t.id)},className:"item",children:[Object(n.jsx)("div",{className:"img",children:Object(n.jsx)("img",{src:t.sprites.front_default,alt:t.id,className:"img__profile"})}),Object(n.jsxs)("div",{children:[" ",t.name]}),Object(n.jsx)("div",{className:"types",children:c})]})},d=function(e){var t=e.profile,s=t.types.map((function(e,t){return Object(n.jsx)("span",{className:"types__items",children:e.type.name},t)})),c=0,i=t.stats.map((function(e,t){return Object(n.jsxs)("div",{className:"point__item",children:[Object(n.jsx)("p",{className:"type__name",children:e.stat.name}),Object(n.jsx)("p",{className:"types__profile",children:e.base_stat})]},t)}));return Object(n.jsxs)("div",{className:"profile_pokemon",children:[Object(n.jsx)("div",{className:"img",children:Object(n.jsx)("img",{className:"img__profile",src:t.sprites.front_default,alt:t.id})}),Object(n.jsx)("div",{className:"profile__name",children:Object(n.jsxs)("p",{children:[t.name," # ",t.id]})}),Object(n.jsxs)("div",{className:"point",children:[Object(n.jsxs)("div",{className:"point__item",children:[Object(n.jsx)("p",{className:"type__name",children:"types"}),Object(n.jsx)("p",{className:"types__profile",children:s})]}),i,Object(n.jsxs)("div",{className:"point__item",children:[Object(n.jsx)("p",{className:"type__name",children:"weight"}),Object(n.jsx)("p",{className:"types__profile",children:t.weight})]}),Object(n.jsxs)("div",{className:"point__item",children:[Object(n.jsx)("p",{className:"type__name",children:"total"}),Object(n.jsx)("p",{className:"types__profile",children:function(){for(var e=0;e<t.stats.length;e++)c+=t.stats[e].base_stat;return Math.floor((c+t.weight)/(t.stats.length+1))}()})]})]})]})},b=function(e){return Object(n.jsx)("div",{className:"button__block",children:Object(n.jsx)("button",{onClick:e.button,className:"button",children:"LODE MORE"})})},u=function(e){var t=e.loding,s=e.items,i=e.button,a=Object(c.useState)(),r=Object(m.a)(a,2),l=r[0],j=r[1],o=function(e){j(e)};return t?Object(n.jsx)("p",{children:"loding..."}):Object(n.jsxs)("div",{className:"items__block",children:[Object(n.jsxs)("div",{className:"items__button",children:[s.map((function(e){return Object(n.jsx)(p,{idItem:o,item:e},e.id)})),Object(n.jsx)(b,{button:i})]}),Object(n.jsx)("div",{className:"profile",children:s.map((function(e){if(l===e.id)return Object(n.jsx)(d,{profile:e},e.id)}))})]})},O=s(7),h=s.n(O),f=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),s=t[0],i=t[1],a=Object(c.useState)(!0),r=Object(m.a)(a,2),l=r[0],p=r[1],d=Object(c.useState)(9),b=Object(m.a)(d,2),O=b[0],f=b[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t,s,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,h()("https://pokeapi.co/api/v2/pokemon/?limit=".concat(O));case 3:s=e.sent,n=0;case 5:if(!(n<s.data.results.length)){e.next=13;break}return e.next=8,h()(s.data.results[n].url);case 8:c=e.sent,t.push(c.data);case 10:n++,e.next=5;break;case 13:i(t),p(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[O]),Object(n.jsx)("div",{children:Object(n.jsx)(u,{items:s,loding:l,button:function(){f(O+12)}})})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),i(e),a(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),_()}},[[42,1,2]]]);
//# sourceMappingURL=main.9d30c11c.chunk.js.map