import{g as _,J as L,o as y,b as $,w as P,a as v,K as f,k as T,y as E,j as d,f as S,L as x,M as A,h as m,m as r,q as D,N as j,O as N,z as w,G as I,B as M,C as U,P as z,D as O}from"./index.3f094b51.js";const R=d("div",{class:"flex justify-between w-full"},[d("span",null,[d("input",{type:"checkbox",checked:"checked",name:"remember"}),S(" \u8BB0\u4F4F\u5BC6\u7801 ")]),d("a",{href:"#"},"\u5FD8\u8BB0\u5BC6\u7801?")],-1),V=_({__name:"LoginForm",props:{email:null,password:null,delay:null},emits:["login","update:email","update:password"],setup(o,{emit:u}){const s=L(()=>{u("login")},o.delay);return(i,e)=>{const t=x,n=A;return y(),$(n,{"form-label":"\u767B\u9646","btn-name":"\u767B\u9646",onSubmit:e[4]||(e[4]=T(a=>E(s)(a),["prevent"]))},{default:P(()=>[v(t,{data:o.email,"onUpdate:data":e[0]||(e[0]=a=>f(email)?email.value=a:null),placeholder:"\u90AE\u7BB1",reg:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,type:"email","data-tip":"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1",value:o.email,onInput:e[1]||(e[1]=a=>i.$emit("update:email",a.target.value))},null,8,["data","reg","value"]),v(t,{data:o.password,"onUpdate:data":e[2]||(e[2]=a=>f(password)?password.value=a:null),placeholder:"\u5BC6\u7801",type:"password",value:o.password,reg:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,"data-tip":"\u5BC6\u7801\u81F3\u5C11\u5305\u542B \u6570\u5B57\u548C\u82F1\u6587,\u957F\u5EA66-20",onInput:e[3]||(e[3]=a=>i.$emit("update:password",a.target.value))},null,8,["data","value","reg"]),R]),_:1})}}});let B={token:"",userId:"",name:"",expiryDate:""};const J=o=>{let u=m(null),s=m(!1);return{error:u,login:async(e,t)=>{if(u.value=null,s.value=!0,!(e||t))throw new Error(`email : ${e!=null?e:null}, password: ${t!=null?t:null}`);try{const n=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});if(n.status!==200&&n.status!==201){const a=await n.json();throw new Error(a.message)}return B=await n.json(),u.value=null,s.value=!1,B}catch(n){u.value=n.message,s.value=!1}},isPending:s}},Z=_({__name:"Login",setup(o){const u=m(""),s=m(""),i="https://book-reading-record.up.railway.app/auth/login",e=I(),t=M(),n=J(i),a=r(n,"error"),F=r(n,"login");let b=D();const h=j();r(h,"posts"),N(()=>{b.value=!0});const C=async()=>{t.value.isPending=!0;const c=U(),l=r(c,"open"),g=r(c,"close");l.value();const p=await F.value(u.value,s.value);if(!a.value)z(t.value,p),e.push("/");else{const k=O();r(k,"open").value(a.value),console.log(a.value)}g.value(),t.value.isPending=!1};return(c,l)=>{const g=V;return y(),$(g,{email:u.value,"onUpdate:email":l[0]||(l[0]=p=>u.value=p),password:s.value,"onUpdate:password":l[1]||(l[1]=p=>s.value=p),novalidate:"",delay:1e3,onLogin:C,class:"form",isPending:t.value.isPending},null,8,["email","password","isPending"])}}});typeof w=="function"&&w(Z);export{Z as default};
