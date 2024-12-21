import {cartService} from "../../singletons.ts";
import {CartCounter} from "../elements/cartCounter.ts";

const cartCounterLink = document.getElementById("cart-counter-button");

if (cartCounterLink) {
    const cartCounter = new CartCounter(
        cartService
    )

    cartCounter.renderAll(cartCounterLink);
}