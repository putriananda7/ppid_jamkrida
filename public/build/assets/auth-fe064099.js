import{r as d,I as k,i as s}from"./app-e73b3323.js";import{u as y}from"./response-f7badac1.js";import"./axios-620fc193.js";function I(){const o=d({}),n=k(),r=d(""),{successResponse:i,errorResponse:t,questionResponse:m}=y();async function f(a){try{await s.get("/sanctum/csrf-cookie");const u=await(await s.post("/api/login",a)).data.content.access_token;p(u),i("Anda telah masuk"),await c(),n.push("/admin")}catch(e){e.response.status===401&&(r.value=e.response.data.message,t(r.value)),e.response.status===422&&(r.value=e.response.data.errors),e.response.status===500&&t("Server In Trouble call your administrator")}}async function g(a){try{const u=await(await s.post("/api/register",a)).data.access_token;p(u),n.push("/")}catch(e){t(e.response.data.message)}}async function c(){try{const a=await s.get("/api/profile");o.value=await a.data}catch(a){o.value=null,l(),t(a.response.data.message)}}async function h(){if((await m("Anda yakin ingin keluar?")).isConfirmed)try{o.value="",await s.get("/api/logout"),l(),await i("Anda telah keluar"),await n.push("/login")}catch(e){t(e.response.data.message)}}async function w(a){try{await s.post("api/profile",a),await i("Data Telah Disimpan"),await c()}catch(e){t(e.response.data.message)}}function p(a){localStorage.setItem("access_token",a),s.defaults.headers.common.Authorization=`Bearer ${a}`}function l(){delete s.defaults.headers.common.Authorization,localStorage.removeItem("access_token")}return{auth:o,errors:r,doLogin:f,doLogout:h,doRegister:g,doUpdate:w,getAuth:c}}export{I as u};
