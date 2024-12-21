var m=Object.defineProperty;var c=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>c(s,typeof e!="symbol"?e+"":e,t);import{A as i,b as a,p,c as d,u}from"./cartListRender-BlRkTI2X.js";class h extends i{constructor(t,n,r){super();l(this,"positionInfo");l(this,"cartService");l(this,"item",null);this.parent=r,this.positionInfo=t,this.cartService=n,this.item=n.getItemByPosition(t)}addPosition(){this.setState(()=>{this.item=this.cartService.addPosition(this.positionInfo)})}removePosition(){this.setState(()=>{this.item=this.cartService.removePosition(this.positionInfo)})}render(){return this.item!=null?this.getCartElement():this.getPlainElement()}getPlainElement(){const t=i.createElement(this.getPlainElementHtml(this.positionInfo));return t.getElementsByTagName("button")[0].addEventListener("click",()=>{this.addPosition()}),t}getCartElement(){if(this.item==null)return null;const t=i.createElement(this.getCartElementHtml(this.item));return t.getElementsByClassName("add")[0].addEventListener("click",()=>{this.addPosition()}),t.getElementsByClassName("remove")[0].addEventListener("click",()=>{this.removePosition()}),t}getPlainElementHtml(t){return`
        <li class="popular__wrapper__grid-list-item">
            <img src="${t.imageUrl}" alt="4">
            <h3>${t.name}</h3>
            <span>${t.price}$</span>
            <button class="pressable white-light add">
                <img src="${a}assets/icons/plus-light.svg" alt="add to cart">
            </button>
        </li>`}getCartElementHtml(t){return`
        <li class="popular__wrapper__grid-list-item cart">
            <img src="${t.position.imageUrl}" alt="4">
            <h3>${t.position.name}</h3>
            <button class="pressable white-light remove">
                <img src="${a}assets/icons/minus-light.svg" alt="add to cart">
            </button>
            <span>${t.quantity}</span>
            <button class="pressable white-light add">
                <img src="${a}assets/icons/plus-light.svg" alt="add to cart">
            </button>
        </li>`}}class g extends i{constructor(){super()}render(){return i.createElement(this.getElementHtml())}getElementHtml(){return`
        <ul class="popular__wrapper__grid-list" id="popular-positions-list"></ul>`}}const E=p.getPublicPositions(),o=document.getElementsByClassName("popular__wrapper")[0];if(o){const s=new g;for(const e of E)s.addChild(new h(e,d,s));s.renderAll(o)}class v extends i{constructor(t){super();l(this,"user");this.user=t}render(){return i.createElement(this.getHtml(this.user))}getHtml(t){return`
        <div>
            <img src="${t.picture.large}" alt="profile"> 
            <div>
                <h3>${t.name.first} ${t.name.last}</h3>
                <span>${t.gender}</span>
                <p>${t.email}</p>
                <p>${t.phone}</p>
            </div>       
        </div>`}}(async function(){await new Promise(r=>setTimeout(()=>r(""),4e3));const e=await u.getUser(),t=document.getElementsByClassName("loading")[0],n=document.getElementsByClassName("user__wrapper")[0];t&&n&&(t.style.display="none",n.style.display="flex",e!=null&&new v(e).renderAll(n))})();
