import {cartService} from "../../singletons.ts";
import {CartPositionElement, CartPositionListElement} from "../elements/cartElement.ts";

const items = cartService.getItems();

const cartWrapper = document.getElementsByClassName("cart__wrapper")[0] as HTMLElement;

const list = new CartPositionListElement()

for (const item of items) {
    list.addChild(new CartPositionElement(
        item,
        cartService,
        list
    ));
}

list.renderAll(cartWrapper);