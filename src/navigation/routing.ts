const basePath = import.meta.env.BASE_URL;

export type RouteInfo = {
    name: string,
    ref: string,
}

export class Routes {
    static Home: RouteInfo = {name: "home", ref: basePath}
    static Shop: RouteInfo = {name: "shop", ref: basePath + "shop/index.html"}
    static Sale: RouteInfo = {name: "sale", ref: basePath + "sale/index.html"}
    static Blog: RouteInfo = {name: "blog", ref: basePath + "blog/index.html"}
}