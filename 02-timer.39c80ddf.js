!function(){function n(n){return String(n).padStart(2,"0")}(function(){var t=Date.now();setInterval((function(){var o=function(t){var o=1e3,r=60*o,a=60*r,e=24*a,u=(Math.floor(t/e),n(Math.floor(t%e/a))),f=n(Math.floor(t%e%a/r)),s=n(Math.floor(t%e%a%r/o));return{hours:u,minutes:f,seconds:s}}(Date.now()-t);o.hours,o.minutes,o.seconds}),1e3)})()}();
//# sourceMappingURL=02-timer.39c80ddf.js.map
