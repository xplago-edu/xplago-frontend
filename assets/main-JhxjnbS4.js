var m=Object.defineProperty;var c=(e,s,t)=>s in e?m(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var l=(e,s,t)=>c(e,typeof s!="symbol"?s+"":s,t);import{A as n,b as o,p as d,c as p}from"./cartListRender-BlRkTI2X.js";import"./userInfoRenderer-B-mnku-o.js";class h extends n{constructor(t,i,r){super();l(this,"positionInfo");l(this,"cartService");l(this,"item",null);this.parent=r,this.positionInfo=t,this.cartService=i,this.item=i.getItemByPosition(t)}addPosition(){this.setState(()=>{this.item=this.cartService.addPosition(this.positionInfo)})}removePosition(){this.setState(()=>{this.item=this.cartService.removePosition(this.positionInfo)})}render(){return this.item!=null?this.getCartElement():this.getPlainElement()}getPlainElement(){const t=n.createElement(this.getPlainElementHtml(this.positionInfo));return t.getElementsByTagName("button")[0].addEventListener("click",()=>{this.addPosition()}),t}getCartElement(){if(this.item==null)return null;const t=n.createElement(this.getCartElementHtml(this.item));return t.getElementsByClassName("add")[0].addEventListener("click",()=>{this.addPosition()}),t.getElementsByClassName("remove")[0].addEventListener("click",()=>{this.removePosition()}),t}getPlainElementHtml(t){return`
        <li class="popular__wrapper__grid-list-item">
            <img src="${t.imageUrl}" alt="4">
            <h3>${t.name}</h3>
            <span>${t.price}$</span>
            <button class="pressable white-light add">
                <img src="${o}assets/icons/plus-light.svg" alt="add to cart">
            </button>
        </li>`}getCartElementHtml(t){return`
        <li class="popular__wrapper__grid-list-item cart">
            <img src="${t.position.imageUrl}" alt="4">
            <h3>${t.position.name}</h3>
            <button class="pressable white-light remove">
                <img src="${o}assets/icons/minus-light.svg" alt="add to cart">
            </button>
            <span>${t.quantity}</span>
            <button class="pressable white-light add">
                <img src="${o}assets/icons/plus-light.svg" alt="add to cart">
            </button>
        </li>`}}class u extends n{constructor(){super()}render(){return n.createElement(this.getElementHtml())}getElementHtml(){return`
        <ul class="popular__wrapper__grid-list" id="popular-positions-list"></ul>`}}const g=d.getPublicPositions(),a=document.getElementsByClassName("popular__wrapper")[0];if(a){const e=new u;for(const s of g)e.addChild(new h(s,p,e));e.renderAll(a)}
