import{I as u,A as c,J as i,K as p,p as n,h,L as l}from"./index.1b68d483.js";import{a as f}from"./assign.8ac48471.js";const v=u({baseUrl:"https://express-aliyun-backend-jaiygpwyhp.cn-shanghai.fcapp.run/",options:{immediate:!0,timeout:3e4,async beforeFetch({options:e}){var a;const t=c();if(!t.value.token)throw new Error(`Error happened in useFetch, token is ${(a=t.value.token)!=null?a:null}, baseUrl is https://express-aliyun-backend-jaiygpwyhp.cn-shanghai.fcapp.run/`);return e.headers.Authorization=`Bearer ${t.value.token}`,{options:e}},async afterFetch({data:e,response:t}){if(t.status!==200){const a=await e.json();throw new Error("Failed to fetch dates. "+a.message)}return{data:e,response:t}},async onFetchError({data:e,error:t}){return{data:e,error:t}}}}),g=i("favs",()=>{const e=p();n(e,"deletePost");const t=n(e,"UpdatePost"),a=h([]);return{gets:async(s=1)=>{const r=await v(`fav/${s}`).json();n(r,"error");const o=n(r,"data");if(o.value.posts.length)f(a.value,o.value.posts);else throw new Error("\u6CA1\u6709\u66F4\u591A\u7684\u6570\u636E\u4E86!")},favs:a,unfav:async s=>{await t.value(s),l(a.value,r=>r._id===s._id)}}});export{g as u};
