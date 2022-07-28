import{g as y,h as p,o as F,b,w as A,a as v,K as g,j as c,L as S,M as x,m as E,k as D,z as $,G as U,B as P,P as h}from"./index.3f094b51.js";const I=c("div",null,[c("input",{type:"checkbox",checked:"checked",class:"checkbox checkbox-xs"}),c("span",{class:"label-text text-sm"},"\u521B\u5EFA\u5E10\u6237\u5373\u8868\u793A\u60A8\u540C\u610F\u6211\u4EEC\u7684\u6761\u6B3E\u548C\u9690\u79C1")],-1),M=y({__name:"SignupForm",props:{email:null,password:null,name:null},emits:["update:email","update:password","update:name"],setup(a,{emit:m}){const n=p("");return(t,e)=>{const s=S,r=x;return F(),b(r,{"form-label":"\u6CE8\u518C","btn-name":"\u6CE8\u518C"},{default:A(()=>[v(s,{data:a.name,"onUpdate:data":e[0]||(e[0]=u=>g(name)?name.value=u:null),placeholder:"\u7528\u6237\u540D",reg:/^\S{1,10}$/,type:"text","data-tip":"\u7528\u6237\u540D\u957F\u5EA6\u57281-10",value:a.name,onInput:e[1]||(e[1]=u=>t.$emit("update:name",u.target.value))},null,8,["data","value"]),v(s,{data:a.email,"onUpdate:data":e[2]||(e[2]=u=>g(email)?email.value=u:null),placeholder:"\u90AE\u7BB1",reg:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,type:"email","data-tip":"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",value:a.email,onInput:e[3]||(e[3]=u=>t.$emit("update:email",u.target.value))},null,8,["data","reg","value"]),v(s,{data:a.password,"onUpdate:data":e[4]||(e[4]=u=>g(password)?password.value=u:null),placeholder:"\u5BC6\u7801",type:"password",reg:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,"data-tip":"\u5BC6\u7801\u81F3\u5C11\u5305\u542B \u6570\u5B57\u548C\u82F1\u6587,\u957F\u5EA66-20",value:a.password,onInput:e[5]||(e[5]=u=>t.$emit("update:password",u.target.value))},null,8,["data","reg","value"]),v(s,{data:n.value,"onUpdate:data":e[6]||(e[6]=u=>n.value=u),dataConfirm:a.password,"onUpdate:dataConfirm":e[7]||(e[7]=u=>g(password)?password.value=u:null),placeholder:"\u786E\u8BA4\u5BC6\u7801",type:"password","data-tip":"\u8BF7\u518D\u6B21\u786E\u8BA4\u5BC6\u7801"},null,8,["data","dataConfirm"]),I]),_:1})}}}),B=p(null),C=p(!1),j=a=>{if(!a)throw new Error(`url is ${a!=null?a:null}`);return{error:B,signup:async(n,t,e)=>{if(!(n||t||e))throw new Error(`email is ${n!=null?n:null}, password is ${t!=null?t:null}, name is ${e!=null?e:null},`);let s,r,u;try{const o=await fetch(a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:t,name:e})});if(o.status!==200&&o.status!==201){const i=await o.json();throw new Error("\u521B\u5EFA\u7528\u6237\u5931\u8D25!",i.message)}const l=await o.json(),f=24*60*60*1e3;return u=new Date(new Date().getTime()+f).toString(),s=l.userId,r=l.token,B.value=null,C.value=!1,{userId:s,token:r,expiryDate:u}}catch(o){B.value=o.message,C.value=!1}},isPending:C}},R=y({__name:"Signup",setup(a){const m=p(""),n=p(""),t=p(""),s=j("https://book-reading-record.up.railway.app/auth/signup"),r=E(s,"signup"),u=E(s,"error"),o=U(),l=P(),f=async()=>{l.value.isPending=!0;const i=await r.value(m.value,n.value,t.value);if(i)h(l.value,i);else throw new Error(`result is ${i}`);if(!u.value)o.push("/");else throw new Error(`result is ${u.value}`);l.value.isPending=!1};return(i,d)=>{const k=M;return F(),b(k,{email:m.value,"onUpdate:email":d[0]||(d[0]=w=>m.value=w),password:n.value,"onUpdate:password":d[1]||(d[1]=w=>n.value=w),name:t.value,"onUpdate:name":d[2]||(d[2]=w=>t.value=w),novalidate:"",onSubmit:D(f,["prevent"]),class:"form",isPending:l.value.isPending},null,8,["email","password","name","onSubmit","isPending"])}}});typeof $=="function"&&$(R);export{R as default};
