import {CartService} from "./cart/service/cartService.ts";
import {PositionStorage} from "./positions/storage/positionStorage.ts";
import {UserFetchService} from "./user/service/userFetchService.ts";

export const cartService = new CartService();
export const positionsStorage = new PositionStorage();
export const userFetchService = new UserFetchService();