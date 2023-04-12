function t(t){return String(t).padStart(2,"0")}({start(){const o=Date.now();setInterval((()=>{const n=Date.now()-o,{hours:r,minutes:s,seconds:e}=function(o){const n=1e3,r=60*n,s=60*r,e=24*s,a=(Math.floor(o/e),t(Math.floor(o%e/s))),u=t(Math.floor(o%e%s/r)),c=t(Math.floor(o%e%s%r/n));return{hours:a,minutes:u,seconds:c}}(n)}),1e3)}}).start();
//# sourceMappingURL=02-timer.f45bd891.js.map
