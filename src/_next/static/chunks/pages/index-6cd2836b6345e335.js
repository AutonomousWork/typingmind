(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{11533:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(10363);t(12697),t(64687),t(70046),t(70046),t(88795);var i=t(17064),u=function(e){var n=new i({max:parseInt(e.uniqueTokenPerInterval||500,10),ttl:parseInt(e.interval||6e4,10)});return{check:function(e,t,r){return new Promise(function(i,u){var a=n.get(r)||[0];0===a[0]&&n.set(r,a),a[0]+=1;var o=a[0],c=o>=parseInt(t,10);return e&&(e.setHeader("X-RateLimit-Limit",t),e.setHeader("X-RateLimit-Remaining",c?0:t-o)),c?u():i()})}}};t(27891),t(70046),u({interval:6e4,uniqueTokenPerInterval:1e3}),u({interval:36e5,uniqueTokenPerInterval:1e4});var a=r.Z},75557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(11533)}])}},function(e){e.O(0,[774,970,391,838,738,396,317,365,251,660,817,648,265,845,509,665,653,909,219,961,835,130,473,342,758,273,233,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);