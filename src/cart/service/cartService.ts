import {CartStorage} from "../storage/cartStorage.ts";
import {PositionInfo} from "../../positions/storage/positionData.ts";
import {PositionItem} from "../items/positionItems.ts";

export class CartService {
    private storage: CartStorage = new CartStorage()
    private countCallbacks: ((count: number) => void)[] = [];

    public getItems(): PositionItem[] {
        return this.storage.getPositionItems();
    }

    public addPosition(position: PositionInfo): PositionItem {
        const items = this.storage.getPositionItems();

        let positionItem: PositionItem | null = null;

        for (const item of items) {
            if (item.position.id == position.id) {
                item.quantity += 1;
                positionItem = item;
            }
        }

        if (positionItem == null) {
            positionItem = {
                position: position,
                quantity: 1,
            };

            items.push(positionItem);
        }

        this.storage.setPositionItems(items);

        this.onCountChange()

        return positionItem;
    }

    public removePosition(position: PositionInfo): PositionItem | null {
        const items = this.storage.getPositionItems();

        let positionItem: PositionItem | null = null;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.position.id == position.id) {
                item.quantity -= 1;

                if (item.quantity == 0) {
                    items.splice(i, 1);
                } else {
                    positionItem = item;
                }
            }
        }

        this.storage.setPositionItems(items);

        this.onCountChange()

        return positionItem;
    }

    public getItemByPosition(position: PositionInfo): PositionItem | null {
        const items = this.storage.getPositionItems();
        let positionItem: PositionItem | null = null;
        for (const item of items) {
            if (item.position.id == position.id) {
                positionItem = item;
            }
        }
        return positionItem;
    }

    public getPositionsCount(): number {
        return this.storage.getPositionItems().length;
    }

    public registerOnCountChangeCallback(callback: (count: number) => void) {
        this.countCallbacks.push(callback);
    }

    private onCountChange() {
        const count = this.getPositionsCount();
        for (const callback of this.countCallbacks) {
            callback(count);
        }
    }
}