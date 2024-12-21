import {CartService} from "./cart/service/cartService.ts";
import {PositionStorage} from "./positions/storage/positionStorage.ts";

export const cartService = new CartService();
export const positionsStorage = new PositionStorage();