var l=Object.defineProperty;var o=(s,t,e)=>t in s?l(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var a=(s,t,e)=>o(s,typeof t!="symbol"?t+"":t,e);import{A as i,u as m}from"./cartListRender-BlRkTI2X.js";class c extends i{constructor(e){super();a(this,"user");this.user=e}render(){return i.createElement(this.getHtml(this.user))}getHtml(e){return`
        <div>
            <img src="${e.picture.large}" alt="profile"> 
            <div>
                <h3>${e.name.first} ${e.name.last}</h3>
                <span>${e.gender}</span>
                <p>${e.email}</p>
                <p>${e.phone}</p>
            </div>       
        </div>`}}(async function(){await new Promise(r=>setTimeout(()=>r(""),4e3));const t=await m.getUser(),e=document.getElementsByClassName("loading")[0],n=document.getElementsByClassName("user__wrapper")[0];e&&n&&(e.style.display="none",n.style.display="flex",t!=null&&new c(t).renderAll(n))})();
