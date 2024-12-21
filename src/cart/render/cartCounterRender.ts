import {cartService} from "../../singletons.ts";
import {CartCounter} from "../elements/cartCounter.ts";

const cartCounterButton = document.getElementById("cart-counter-button");

if (cartCounterButton != null) {
    const cartCounter = new CartCounter(
        cartService
    )

    cartCounter.renderAll(cartCounterButton);
}