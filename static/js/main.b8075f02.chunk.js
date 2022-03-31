(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{76:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),i=t(28),o=t.n(i),a=t(13),s=t(7),l=t(8),d=t(18),u=t(6),j=t(29),p=t(30),b=t(20),h=t.n(b),x="https://api.coinpaprika.com/v1";function f(){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(h.a.mark((function n(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(x,"/coins")).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return(m=Object(p.a)(h.a.mark((function n(e){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(x,"/coins/").concat(e)).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(h.a.mark((function n(e){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("".concat(x,"/tickers/").concat(e)).then((function(n){return n.json()})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var y,k,w=t(1),C=s.c.ul(y||(y=Object(l.a)([""]))),L=s.c.li(k||(k=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 10px 20px;\n  color: ",";\n  margin-bottom: 10px;\n  border-radius: 15px;\n  border: 2px solid ",";\n  span:first-child {\n    font-size: 15px;\n    margin-bottom: 10px;\n    /* color: ","; */\n  }\n  span:last-child {\n    font-size: 25px;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor}),(function(n){return n.theme.accentColor}));var I=function(n){var e=n.coinId,t=Object(a.useQuery)(["price",e],(function(){return g(e)}),{refetchInterval:5e3}),c=t.isLoading,r=t.data;return Object(w.jsx)("div",{children:c?"Loading prices...":Object(w.jsxs)(C,{children:[Object(w.jsxs)(L,{children:[Object(w.jsx)("span",{children:"Market Cap"}),Object(w.jsxs)("span",{children:["$",null===r||void 0===r?void 0:r.quotes.USD.market_cap.toLocaleString()]})]}),Object(w.jsxs)(L,{children:[Object(w.jsx)("span",{children:"All Time High (Price)"}),Object(w.jsxs)("span",{children:["$",null===r||void 0===r?void 0:r.quotes.USD.ath_price.toFixed(3)]})]}),Object(w.jsxs)(L,{children:[Object(w.jsx)("span",{children:"All Time High (Date)"}),Object(w.jsx)("span",{children:null===r||void 0===r?void 0:r.quotes.USD.ath_date.toLocaleLowerCase()})]})]})})},S=t(49),q=t.n(S);var _,z,T,D,Q,M,P,U,A,H,F,$=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(x,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:5e3}),c=t.isLoading,r=t.data;return Object(w.jsx)("div",{children:c?"Loading chart...":Object(w.jsx)(q.a,{type:"candlestick",series:[{data:null===r||void 0===r?void 0:r.map((function(n){return{x:n.time_close,y:[n.open,n.high,n.low,n.close]}}))}],options:{theme:{mode:"dark"},chart:{type:"candlestick",height:800,background:"transparent",toolbar:{show:!1}},grid:{show:!1},xaxis:{type:"datetime",labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1}}})})},E=s.c.h1(_||(_=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),R=s.c.div(z||(z=Object(l.a)(["\n  padding: 20px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),B=s.c.header(T||(T=Object(l.a)(["\n  height: 120px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),J=s.c.div(D||(D=Object(l.a)(["\n  button {\n    background: ",";\n    border: 0;\n    border-radius: 10px;\n  }\n"])),(function(n){return n.theme.accentColor})),G=s.c.img(Q||(Q=Object(l.a)(["\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n  transform: translateY(-5px);\n"]))),Y=s.c.span(M||(M=Object(l.a)(["\n  display: block;\n  text-align: center;\n"]))),K=s.c.p(P||(P=Object(l.a)(["\n  margin: 10px 0px;\n  text-align: right;\n  font-size: 13px;\n  span {\n    color: ",";\n  }\n"])),(function(n){return n.theme.accentColor})),N=s.c.div(U||(U=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 25px;\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),V=s.c.div(A||(A=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),W=s.c.div(H||(H=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),X=s.c.span(F||(F=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var Z,nn,en,tn,cn,rn,on,an=function(){var n=Object(u.h)().coinId,e=Object(u.g)().state,t=Object(u.i)("/:coinId/price"),c=Object(u.i)("/:coinId/chart"),r=Object(a.useQuery)(["info",n],(function(){return function(n){return m.apply(this,arguments)}(n)})),i=r.isLoading,o=r.data,s=Object(a.useQuery)(["tickers",n],(function(){return g(n)}),{refetchInterval:3e3}),l=s.isLoading,p=s.data,b=i||l,h=Object(u.f)();return Object(w.jsxs)(R,{children:[Object(w.jsx)(j.a,{children:Object(w.jsx)("title",{children:null!==e&&void 0!==e&&e.name?e.name:b?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(w.jsx)(J,{onClick:function(){h.push("/")},children:Object(w.jsx)("button",{children:"Go Home"})}),Object(w.jsxs)(B,{children:[Object(w.jsx)(G,{src:"https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/".concat(null===p||void 0===p?void 0:p.name.toLowerCase().split(" ").join("-"),".png")}),Object(w.jsx)(E,{children:null!==e&&void 0!==e&&e.name?e.name:b?"Loading...":null===o||void 0===o?void 0:o.name})]}),b?Object(w.jsx)(Y,{children:"Loading..."}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(K,{children:[Object(w.jsx)("span",{children:"Last Updated "}),null===p||void 0===p?void 0:p.last_updated.substring(0,10)]}),Object(w.jsxs)(N,{children:[Object(w.jsxs)(V,{children:[Object(w.jsx)("span",{children:"Rank:"}),Object(w.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(w.jsxs)(V,{children:[Object(w.jsx)("span",{children:"Symbol:"}),Object(w.jsxs)("span",{children:["$",null===o||void 0===o?void 0:o.symbol]})]}),Object(w.jsxs)(V,{children:[Object(w.jsx)("span",{children:"Price:"}),Object(w.jsxs)("span",{children:["$",null===p||void 0===p?void 0:p.quotes.USD.price.toFixed(3)," (",null===p||void 0===p?void 0:p.quotes.USD.percent_change_24h,"%)"]})]})]}),Object(w.jsxs)(N,{children:[Object(w.jsxs)(V,{children:[Object(w.jsx)("span",{children:"Total Suply:"}),Object(w.jsx)("span",{children:null===p||void 0===p?void 0:p.total_supply.toLocaleString()})]}),Object(w.jsxs)(V,{children:[Object(w.jsx)("span",{children:"Max Supply:"}),Object(w.jsx)("span",{children:null===p||void 0===p?void 0:p.max_supply})]})]}),Object(w.jsxs)(W,{children:[Object(w.jsx)(X,{isActive:null!==c,children:Object(w.jsx)(d.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(w.jsx)(X,{isActive:null!==t,children:Object(w.jsx)(d.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(w.jsxs)(u.c,{children:[Object(w.jsx)(u.a,{path:"/:coinId/price",children:Object(w.jsx)(I,{coinId:n})}),Object(w.jsx)(u.a,{path:"/:coinId/chart",children:Object(w.jsx)($,{coinId:n})})]})]})]})},sn=s.c.div(Z||(Z=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),ln=s.c.header(nn||(nn=Object(l.a)(["\n  position: sticky;\n  top: 0;\n  height: 150px;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.theme.bgColor})),dn=s.c.ul(en||(en=Object(l.a)([""]))),un=s.c.li(tn||(tn=Object(l.a)(["\n  background-color: white;\n  color: ",";\n  margin-bottom: 10px;\n  border-radius: 15px;\n  a {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in-out;\n  }\n  &:hover {\n    a div {\n      color: ",";\n    }\n  }\n  a div {\n    display: flex;\n    align-items: center;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),jn=s.c.h1(cn||(cn=Object(l.a)(["\n  font-size: 38px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),pn=s.c.span(rn||(rn=Object(l.a)(["\n  display: block;\n  text-align: center;\n"]))),bn=s.c.img(on||(on=Object(l.a)(["\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n"])));var hn=function(){var n=Object(a.useQuery)("allCoins",f),e=n.isLoading,t=n.data;return Object(w.jsxs)(sn,{children:[Object(w.jsx)(j.a,{children:Object(w.jsx)("title",{children:"\ucf54\uc778"})}),Object(w.jsx)(ln,{children:Object(w.jsx)(jn,{children:"Top 100 Crypto Coins"})}),e?Object(w.jsx)(pn,{children:"Loading..."}):Object(w.jsx)(dn,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(w.jsx)(un,{children:Object(w.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(bn,{src:"https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/".concat(n.name.toLowerCase().split(" ").join("-"),".png")}),n.name," \u2192"]}),Object(w.jsxs)("p",{children:["Rank ",n.rank]})]})},n.id)}))})]})};var xn,fn=function(){return Object(w.jsx)(d.a,{basename:"/crypto_tracker",children:Object(w.jsxs)(u.c,{children:[Object(w.jsx)(u.a,{path:"/:coinId",children:Object(w.jsx)(an,{})}),Object(w.jsx)(u.a,{path:"/",children:Object(w.jsx)(hn,{})})]})})},On=t(51),mn=Object(s.b)(xn||(xn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color: ",";\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var gn=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(mn,{}),Object(w.jsx)(fn,{}),Object(w.jsx)(On.ReactQueryDevtools,{initialIsOpen:!0})]})},vn=new a.QueryClient;o.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(a.QueryClientProvider,{client:vn,children:Object(w.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#fbc531"},children:Object(w.jsx)(gn,{})})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.b8075f02.chunk.js.map