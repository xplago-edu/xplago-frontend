import {PopularPositionElement, PositionListElement} from "../elements/positionElements.ts";
import {cartService, positionsStorage} from "../../singletons.ts";

const positions = positionsStorage.getPublicPositions();

const popularWrapper = document.getElementsByClassName("popular__wrapper")[0] as HTMLElement;

if (popularWrapper) {
    const list = new PositionListElement()

    for (const position of positions) {
        list.addChild(new PopularPositionElement(
            position,
            cartService,
            list
        ));
    }

    list.renderAll(popularWrapper);
}