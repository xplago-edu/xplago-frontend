var p=Object.defineProperty;var g=(n,t,e)=>t in n?p(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var o=(n,t,e)=>g(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const l="/xplago-frontend/";class a{}o(a,"Home",{name:"home",ref:l}),o(a,"Shop",{name:"shop",ref:l+"shop/index.html"}),o(a,"Sale",{name:"sale",ref:l+"sale/index.html"}),o(a,"Blog",{name:"blog",ref:l+"blog/index.html"});function f(n){if(C(n)){const t=E(n);if(t!=null)return t.classList.add("active"),!0;console.error("Cannot find link element by "+n)}return!1}function E(n){return document.getElementById("navigation-"+n.name)}function C(n){return window.location.pathname.includes(n.ref)}class P{constructor(t){o(this,"successor",null);this.action=t}execute(){var e;const t=this.action();return t||(((e=this.successor)==null?void 0:e.execute())??!1)}}class v{constructor(){o(this,"startElement",null);o(this,"currentElement",null)}add(t){return this.addElement(new P(()=>f(t)))}addElement(t){return this.startElement==null||this.currentElement==null?(this.startElement=t,this.currentElement=t):(this.currentElement.successor=t,this.currentElement=t),this}execute(){if(this.startElement==null)throw new Error("Chain is empty");return this.startElement.execute()}}new v().add(a.Shop).add(a.Sale).add(a.Blog).add(a.Home).execute();const y=Date.now();addEventListener("load",n=>{const t=Date.now()-y;I(t)});function I(n){const t=b();t!=null&&(t.textContent="Site was loaded by "+n+" ms")}function b(){return document.getElementById("loading-time-box-content")}function S(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,n=>(+n^crypto.getRandomValues(new Uint8Array(1))[0]&15>>+n/4).toString(16))}class c{constructor(){o(this,"elementId");o(this,"parent",null);o(this,"children",[]);o(this,"isComposeElement",!1);o(this,"parentElement",null);this.elementId=S()}renderAll(t){this.parentElement=t,t.appendChild(this.compose())}addChild(t){return t.parent=this,this.children.push(t),this}compose(){var e;if(!this.isComposeElement)this.isComposeElement=!0;else{const i=document.documentElement.querySelectorAll(`[elementId="${this.elementId}"]`);(e=i[0].parentElement)==null||e.removeChild(i[0])}const t=this.render();if(t==null)return null;t.setAttribute("elementId",this.elementId);for(const i of this.children)t.appendChild(i.render());return t}setState(t){t(),this.reRender()}reRender(){this.isComposeElement&&this.parentElement!=null&&this.renderAll(this.parentElement),this.parent!=null&&this.parent.reRender()}static createElement(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}}class w extends c{constructor(e,i,s){super();o(this,"positionInfo");o(this,"cartService");o(this,"item",null);this.parent=s,this.positionInfo=e,this.cartService=i,this.item=i.getItemByPosition(e)}addPosition(){this.setState(()=>{this.item=this.cartService.addPosition(this.positionInfo)})}removePosition(){this.setState(()=>{this.item=this.cartService.removePosition(this.positionInfo)})}render(){return this.item!=null?this.getCartElement():this.getPlainElement()}getPlainElement(){const e=c.createElement(this.getPlainElementHtml(this.positionInfo));return e.getElementsByTagName("button")[0].addEventListener("click",()=>{this.addPosition()}),e}getCartElement(){if(this.item==null)return null;const e=c.createElement(this.getCartElementHtml(this.item));return e.getElementsByClassName("add")[0].addEventListener("click",()=>{this.addPosition()}),e.getElementsByClassName("remove")[0].addEventListener("click",()=>{this.removePosition()}),e}getPlainElementHtml(e){return`
        <li class="popular__wrapper__grid-list-item">
            <img src="${e.imageUrl}" alt="4">
            <h3>${e.name}</h3>
            <span>${e.price}$</span>
            <button class="pressable white-light add">
                <img src="${l}assets/icons/plus-light.svg" alt="add to cart">
            </button>
        </li>`}getCartElementHtml(e){return`
        <li class="popular__wrapper__grid-list-item cart">
            <img src="${e.position.imageUrl}" alt="4">
            <h3>${e.position.name}</h3>
            <button class="pressable white-light remove">
                <img src="${l}assets/icons/minus-light.svg" alt="add to cart">
            </button>
            <span>${e.quantity}</span>
            <button class="pressable white-light add">
                <img src="${l}assets/icons/plus-light.svg" alt="add to cart">
            </button>
        </li>`}}class B extends c{constructor(){super()}render(){return c.createElement(this.getElementHtml())}getElementHtml(){return`
        <ul class="popular__wrapper__grid-list" id="popular-positions-list"></ul>`}}class L{constructor(){o(this,"cartPositionItemsKey","cartPositionItems")}getPositionItems(){const t=localStorage.getItem(this.cartPositionItemsKey);return t==null?[]:JSON.parse(t)}setPositionItems(t){const e=JSON.stringify(t);localStorage.setItem(this.cartPositionItemsKey,e)}}class x{constructor(){o(this,"storage",new L);o(this,"countCallbacks",[])}addPosition(t){const e=this.storage.getPositionItems();let i=null;for(const s of e)s.position.id==t.id&&(s.quantity+=1,i=s);return i==null&&(i={position:t,quantity:1},e.push(i)),this.storage.setPositionItems(e),this.onCountChange(),i}removePosition(t){const e=this.storage.getPositionItems();let i=null;for(let s=0;s<e.length;s++){const r=e[s];r.position.id==t.id&&(r.quantity-=1,r.quantity==0?e.splice(s,1):i=r)}return this.storage.setPositionItems(e),this.onCountChange(),i}getItemByPosition(t){const e=this.storage.getPositionItems();let i=null;for(const s of e)s.position.id==t.id&&(i=s);return i}getPositionsCount(){return this.storage.getPositionItems().length}registerOnCountChangeCallback(t){this.countCallbacks.push(t)}onCountChange(){const t=this.getPositionsCount();for(const e of this.countCallbacks)e(t)}}class H{getPublicPositions(){return[{id:"1",name:"Jeans Jacket",price:199,imageUrl:l+"/assets/promo/7.avif"},{id:"2",name:"Shirt",price:99,imageUrl:l+"/assets/promo/6.avif"},{id:"3",name:"Gray Sweater",price:169,imageUrl:l+"/assets/promo/5.avif"},{id:"4",name:"Cardigan",price:199,imageUrl:l+"/assets/promo/4.avif"},{id:"5",name:"Coat",price:499,imageUrl:l+"/assets/promo/3.avif"},{id:"6",name:"Blazer",price:299,imageUrl:l+"/assets/promo/2.avif"}]}}const h=new x,_=new H,$=_.getPublicPositions(),A=document.getElementsByClassName("popular__wrapper")[0],u=new B;for(const n of $)u.addChild(new w(n,h,u));u.renderAll(A);class O extends c{constructor(e){super();o(this,"cartService");o(this,"count");this.cartService=e,this.count=this.cartService.getPositionsCount(),this.cartService.registerOnCountChangeCallback(i=>this.onCountChange(i))}onCountChange(e){this.setState(()=>{this.count=e})}render(){return c.createElement(this.getElementHtml(this.count))}getElementHtml(e){return`<span>${e}</span>`}}const d=document.getElementById("cart-counter-button");d!=null&&new O(h).renderAll(d);
