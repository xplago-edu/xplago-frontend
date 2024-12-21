import {PositionItem} from "../items/positionItems.ts";

export class CartStorage {
    private readonly cartPositionItemsKey: string = "cartPositionItems"

    public getPositionItems(): PositionItem[] {
        const data = localStorage.getItem(this.cartPositionItemsKey);
        if (data == null) return [];
        return JSON.parse(data);
    }

    public setPositionItems(items: PositionItem[]): void {
        const data = JSON.stringify(items);
        localStorage.setItem(this.cartPositionItemsKey, data);
    }
}