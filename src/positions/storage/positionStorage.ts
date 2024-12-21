import "./positionData.ts";
import {PositionInfo} from "./positionData.ts";
import {basePath} from "../../navigation/routing.ts";

export class PositionStorage {
    public getPublicPositions(): PositionInfo[] {
        return [
            {
                id: "1",
                name: "Jeans Jacket",
                price: 199,
                imageUrl: basePath + "/assets/promo/7.avif",
            },
            {
                id: "2",
                name: "Shirt",
                price: 99,
                imageUrl: basePath + "/assets/promo/6.avif",
            },
            {
                id: "3",
                name: "Gray Sweater",
                price: 169,
                imageUrl: basePath + "/assets/promo/5.avif",
            },
            {
                id: "4",
                name: "Cardigan",
                price: 199,
                imageUrl: basePath + "/assets/promo/4.avif",
            },
            {
                id: "5",
                name: "Coat",
                price: 499,
                imageUrl: basePath + "/assets/promo/3.avif",
            },
            {
                id: "6",
                name: "Blazer",
                price: 299,
                imageUrl: basePath + "/assets/promo/2.avif",
            },
        ];
    }
}