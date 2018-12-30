(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,n,t){e.exports=t(330)},327:function(e,n,t){},330:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(11),i=t.n(c),u=t(38),o=t(29),l=t(18),f=t(30),s=function(e){var n=e.href,t=e.children;return a.a.createElement("a",{href:n,target:"_blank",rel:"nofollow noopener noreferrer"},t)},m=t(83),d=t(331),g=t(146),h=t(333),p=t(148),b=t.n(p),y=t(149),E=t.n(y),v=t(150),x=t.n(v);function O(e){var n,t,r,a=e.items,c=e.nameSearch,i=e.qualityRangeStart,u=e.qualityRangeEnd;return a.filter(function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.every(function(n){return n(e)})}}(function(e,n){var t=n.toLowerCase();return function(n){return n[e].toLowerCase().includes(t)}}("name",c),(n="quality",t=i,r=u,function(e){return e[n]>=t&&e[n]<=r})))}var j=t(334),w="ITEMS_FETCH",S="ITEMS_ADD",q="ITEMS_NAME_SEARCH",k="ITEMS_QUALITY_FILTER",A=function(e){return{type:S,items:e}},C=Object(u.b)(function(e){return{value:e.nameSearch}},function(e){return{onChange:function(n){return e(function(e){return{type:q,query:e,meta:{debounce:{time:200}}}}(n))}}})(function(e){var n=e.value,t=e.onChange;return a.a.createElement(j.a,{placeholder:"Name",value:n,prefix:a.a.createElement(l.a,{type:"search",style:{color:""===n?"rgba(0,0,0,.25)":"#1890ff"}}),suffix:""===n?null:a.a.createElement(l.a,{type:"close",style:{color:"rgba(0,0,0,.25)"},onClick:function(){return t("")}}),onClick:function(e){return e.stopPropagation()},onChange:function(e){return t(e.target.value)}})}),I=t(79),R=t(49),M=t(82),T=t(332);function D(e,n,t){return[e].concat(Object(M.a)(t),[n]).reduce(function(t,r){return Object(R.a)({},t,Object(I.a)({},r,r===e||r===n?"".concat(r):a.a.createElement(a.a.Fragment,null)))},{})}var N=Object(u.b)(function(e){return{marks:e.items.reduce(function(e,n){var t=n.quality;return t in e?e:[].concat(Object(M.a)(e),[t])},[]),min:e.qualityMin,max:e.qualityMax,rangeStart:e.qualityRangeStart,rangeEnd:e.qualityRangeEnd}},function(e){return{onChange:function(n){return e(function(e,n){return{type:k,rangeStart:e,rangeEnd:n,meta:{debounce:{time:200}}}}.apply(void 0,Object(M.a)(n)))}}})(function(e){var n=e.min,t=e.max,r=e.marks,c=e.rangeStart,i=e.rangeEnd,u=e.onChange;return a.a.createElement(T.a,Object.assign({range:!0,defaultValue:[c,i],marks:D(n,t,r)},{min:n,max:t,onChange:u}))});function _(){var e=Object(o.a)(["\n  width: 20rem;\n  padding: 0.5rem 1rem;\n  background: white;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n"]);return _=function(){return e},e}function L(){var e=Object(o.a)(["\n  font-style: normal;\n  background: #ffc069;\n"]);return L=function(){return e},e}function B(){var e=Object(o.a)(["\n  border-bottom: 1px dotted;\n  cursor: help;\n"]);return B=function(){return e},e}var G=d.a.Column,F={STANDARD:"Standard",CONJURED:"Conjured",BACKSTAGE_PASS:"Backstage pass",LEGENDARY:"Legendary"},H={STANDARD:"#000",CONJURED:"#52c41a",BACKSTAGE_PASS:"#1890ff",LEGENDARY:"#ff7a45"},J=[[0,2],[2,5],[5,10],[10,20],[20,1/0]],P=Object.keys(H),Y=f.a.span(B()),K=f.a.em(L()),U=f.a.div(_()),W=Object(u.b)(function(e){return{items:O(e),loading:e.fetchingItems,nameSearch:e.nameSearch,qualityMin:e.qualityMin,qualityMax:e.qualityMax}})(function(e){var n=e.items,t=e.loading,r=e.nameSearch,c=e.qualityMin,i=e.qualityMax;return a.a.createElement(d.a,{dataSource:n,loading:t,pagination:!1,rowKey:"id"},a.a.createElement(G,{title:a.a.createElement(C,null),key:"name",dataIndex:"name",render:function(e){return a.a.createElement(b.a,{searchWords:[r],textToHighlight:e,highlightTag:function(e){var n=e.children;return a.a.createElement(K,null,n)},autoEscape:!0})},sorter:function(e,n){return e.name.localeCompare(n.name)}}),a.a.createElement(G,{title:"Price",key:"sellIn",dataIndex:"sellIn",align:"right",render:function(e,n){return"LEGENDARY"===n.type?a.a.createElement(g.a,{title:x()(e,{fractionDigits:0,symbols:{grouping:" "}})},a.a.createElement(Y,null,E()(e,{decimals:1,separator:""}))):e},sorter:function(e,n){return e.sellIn-n.sellIn},filters:J.map(function(e){var n=Object(m.a)(e,2),t=n[0],r=n[1];return{value:"".concat(t,":").concat(r),text:r===1/0?"Higher than ".concat(t):"".concat(t," to ").concat(r)}}),onFilter:function(e,n){var t=n.sellIn,r=e.split(":"),a=Object(m.a)(r,2),c=a[0],i=a[1];return t>=c&&t<=i}}),a.a.createElement(G,{title:"Quality",key:"quality",dataIndex:"quality",align:"right",render:function(e){return a.a.createElement(h.a,{type:"circle",percent:100*(e-c)/i,format:function(){return e},width:48})},sorter:function(e,n){return e.quality-n.quality},filterDropdown:function(){return a.a.createElement(U,null,a.a.createElement(N,null))}}),a.a.createElement(G,{title:"Type",key:"type",dataIndex:"type",align:"center",render:function(e){return a.a.createElement("span",{style:{color:H[e]}},F[e])},sorter:function(e,n){return P.indexOf(e.type)-P.indexOf(n.type)},filters:Object.entries(F).map(function(e){var n=Object(m.a)(e,2);return{value:n[0],text:n[1]}}),onFilter:function(e,n){return n.type===e}}))});function z(){var e=Object(o.a)(["\n  ","\n  text-align: center;\n"]);return z=function(){return e},e}function Q(){var e=Object(o.a)(["\n  ","\n  padding: ",";\n  box-sizing: border-box;\n  min-height: calc(100vh - 2 * ",");\n  background: #fff;\n"]);return Q=function(){return e},e}function V(){var e=Object(o.a)(["\n  ","\n  ","\n  padding: 0 ",";\n"]);return V=function(){return e},e}function $(){var e=Object(o.a)(["\n  height: ",";\n  line-height: ",";\n  background: #001529;\n  color: #fff;\n"]);return $=function(){return e},e}function X(){var e=Object(o.a)(["\n  box-sizing: border-box;\n  background: #e9e9e9;\n  min-height: 100vh;\n"]);return X=function(){return e},e}var Z=a.a.createElement(s,{href:"https://github.com/amercier"},"Alex Mercier"),ee=a.a.createElement(s,{href:"https://brennus-analytics.com/"},"Brennus Analytics"),ne=f.a.div(X()),te="\n  width: 100%;\n  max-width: 60rem;\n  margin: 0 auto;\n",re="\n  height: ".concat("4rem",";\n  line-height: ").concat("4rem",";\n"),ae=f.a.div($(),"4rem","4rem"),ce=f.a.div(V(),te,re,"4rem"),ie=f.a.div(Q(),te,"4rem","4rem"),ue=f.a.div(z(),re),oe=function(){return a.a.createElement(ne,null,a.a.createElement(ae,null,a.a.createElement(ce,null,a.a.createElement(l.a,{type:"home"})," Gilded Rose Inn - Administration")),a.a.createElement(ie,null,a.a.createElement(W,null)),a.a.createElement(ue,null,"Created by ",Z," for ",ee,"."))},le=t(64),fe=t(164),se=t.n(fe),me=t(166),de={items:[],nameSearch:"",qualityMin:0,qualityMax:100,qualityRangeStart:0,qualityRangeEnd:100};var ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case w:return Object(R.a)({},e,{fetchingItems:!0});case S:return Object(R.a)({},e,{items:n.items,fetchingItems:!1});case q:return Object(R.a)({},e,{nameSearch:n.query});case k:return Object(R.a)({},e,{qualityRangeStart:n.rangeStart,qualityRangeEnd:n.rangeEnd});default:return e}},he=t(41),pe=t.n(he),be=t(39),ye=t(165),Ee="".concat("/api","/items/"),ve=pe.a.mark(je);function xe(){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(ye.a)(pe.a.mark(function e(){var n;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(Ee);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function je(){var e;return pe.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(be.b)(xe,{});case 2:return e=n.sent,n.next=5,Object(be.c)(A(e));case 5:case"end":return n.stop()}},ve,this)}var we=pe.a.mark(Se);function Se(){return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.a)([Object(be.d)(w,je)]);case 2:case"end":return e.stop()}},we,this)}var qe=se()(),ke=Object(me.a)(),Ae=Object(le.c)(ge,void 0,Object(le.a)(qe,ke));ke.run(Se),Ae.dispatch({type:w});var Ce=Ae;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(327);i.a.render(a.a.createElement(u.a,{store:Ce},a.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[169,2,1]]]);
//# sourceMappingURL=main.d7e280cc.chunk.js.map