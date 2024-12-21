import {AbstractElement} from "../../visualizing/elements.ts";
import {CartService} from "../service/cartService.ts";
import {PositionItem} from "../items/positionItems.ts";
import {basePath} from "../../navigation/routing.ts";

export class CartPositionElement extends AbstractElement {
    private readonly cartService: CartService;

    private item: PositionItem | null = null;

    constructor(
        _positionItem: PositionItem,
        _cartService: CartService,
        _parent: AbstractElement) {
        super();
        this.parent = _parent
        this.cartService = _cartService;
        this.item = _positionItem;
    }

    private addPosition() {
        this.setState(() => {
            if (this.item != null) {
                this.item = this.cartService.addPosition(this.item.position);
            }
        });
    }

    private removePosition() {
        this.setState(() => {
            if (this.item != null) {
                this.item = this.cartService.removePosition(this.item.position);
            }
        })
    }

    public render(): HTMLElement | null {
        return this.getElement();
    }

    private getElement(): HTMLElement | null {
        if (this.item == null) return null;

        const element = AbstractElement.createElement(this.getCartElementHtml(this.item));
        const addButton = element.getElementsByClassName("add")[0];
        addButton.addEventListener("click", () => {this.addPosition()})
        const removeButton = element.getElementsByClassName("remove")[0];
        removeButton.addEventListener("click", () => {this.removePosition()})
        return element;
    }

    private getCartElementHtml(item: PositionItem): string {
        return `
        <li class="cart__wrapper__list-item">
            <img src="${item.position.imageUrl}" alt="4">
            <h3>${item.position.name}</h3>
            <p>${item.position.price}$</p>
            <button class="pressable white-light remove">
                <img src="${basePath}assets/icons/minus-light.svg" alt="add to cart">
            </button>
            <span>${item.quantity}</span>
            <button class="pressable white-light add">
                <img src="${basePath}assets/icons/plus-light.svg" alt="add to cart">
            </button>
        </li>`;
    }
}

export class CartPositionListElement extends AbstractElement {
    public constructor() {
        super();
    }

    public render(): HTMLElement | null {
        return AbstractElement.createElement(this.getElementHtml());
    }

    private getElementHtml(): string {
        return `<ul class="cart__wrapper__list" id="cart-positions-list"></ul>`;
    }
}