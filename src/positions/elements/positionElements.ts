import {AbstractElement} from "../../visualizing/elements.ts";
import {PositionInfo} from "../storage/positionData.ts";
import {basePath} from "../../navigation/routing.ts";
import {CartService} from "../../cart/service/cartService.ts";
import {PositionItem} from "../../cart/items/positionItems.ts";

export class PopularPositionElement extends AbstractElement {
    private readonly positionInfo: PositionInfo;

    private readonly cartService: CartService;

    private item: PositionItem | null = null;

    constructor(
        _positionInfo: PositionInfo,
        _cartService: CartService,
        _parent: AbstractElement) {
        super();
        this.parent = _parent
        this.positionInfo = _positionInfo;
        this.cartService = _cartService;
        this.item = _cartService.getItemByPosition(_positionInfo);
    }

    private addPosition() {
        this.setState(() => {
            this.item = this.cartService.addPosition(this.positionInfo);
        });
    }

    private removePosition() {
        this.setState(() => {
            this.item = this.cartService.removePosition(this.positionInfo);
        })
    }

    public render(): HTMLElement | null {
        if (this.item != null) {
            return this.getCartElement();
        } else {
            return this.getPlainElement();
        }
    }

    private getPlainElement(): HTMLElement {
        const element = AbstractElement.createElement(this.getPlainElementHtml(this.positionInfo));
        const addButton = element.getElementsByTagName("button")[0];
        addButton.addEventListener("click", () => {this.addPosition()})
        return element;
    }

    private getCartElement(): HTMLElement | null {
        if (this.item == null) return null;

        const element = AbstractElement.createElement(this.getCartElementHtml(this.item));
        const addButton = element.getElementsByClassName("add")[0];
        addButton.addEventListener("click", () => {this.addPosition()})
        const removeButton = element.getElementsByClassName("remove")[0];
        removeButton.addEventListener("click", () => {this.removePosition()})
        return element;
    }

    private getPlainElementHtml(position: PositionInfo): string {
        const html = `
        <li class="popular__wrapper__grid-list-item">
            <img src="${position.imageUrl}" alt="4">
            <h3>${position.name}</h3>
            <span>${position.price}$</span>
            <button class="pressable white-light add">
                <img src="${basePath}assets/icons/plus-light.svg" alt="add to cart">
            </button>
        </li>`;
        return html;
    }

    private getCartElementHtml(item: PositionItem): string {
        const html = `
        <li class="popular__wrapper__grid-list-item cart">
            <img src="${item.position.imageUrl}" alt="4">
            <h3>${item.position.name}</h3>
            <button class="pressable white-light remove">
                <img src="${basePath}assets/icons/minus-light.svg" alt="add to cart">
            </button>
            <span>${item.quantity}</span>
            <button class="pressable white-light add">
                <img src="${basePath}assets/icons/plus-light.svg" alt="add to cart">
            </button>
        </li>`;
        return html;
    }
}

export class PositionListElement extends AbstractElement {
    public constructor() {
        super();
    }

    public render(): HTMLElement | null {
        return AbstractElement.createElement(this.getElementHtml());
    }

    private getElementHtml(): string {
        const html = `
        <ul class="popular__wrapper__grid-list" id="popular-positions-list"></ul>`;
        return html;
    }
}