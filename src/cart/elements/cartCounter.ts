import {AbstractElement} from "../../visualizing/elements.ts";
import {CartService} from "../service/cartService.ts";

export class CartCounter extends AbstractElement {
    private readonly cartService: CartService;
    private count: number;

    public constructor(
        _cartService: CartService
    ) {
        super();
        this.cartService = _cartService;
        this.count = this.cartService.getPositionsCount();

        this.cartService.registerOnCountChangeCallback(count => this.onCountChange(count));
    }

    private onCountChange(count: number) {
        this.setState(() => {
            this.count = count;
        })
    }

    render(): HTMLElement | null {
        return AbstractElement.createElement(this.getElementHtml(this.count));
    }

    private getElementHtml(count: number): string {
        return `<span>${count}</span>`;
    }
}