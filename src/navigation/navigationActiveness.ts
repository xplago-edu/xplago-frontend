import "./routing.ts";
import {RouteInfo, Routes} from "./routing.ts";

function setHeaderLinkActiveIfPathIncludesRoute(route: RouteInfo): boolean {
    if (isPathIncludesRoute(route)) {
        const element = getHeaderLinkByRoute(route);

        if (element != null) {
            element.classList.add("active");
            return true;
        } else {
            console.error("Cannot find link element by " + route)
        }
    }

    return false;
}

function getHeaderLinkByRoute(route: RouteInfo): HTMLElement | null {
    return document.getElementById("navigation-" + route.name)
}

function isPathIncludesRoute(route: RouteInfo) {
    const path: string = window.location.pathname;
    return path.includes(route.ref);
}

class ExecutionChainElement {
    public successor: ExecutionChainElement | null = null;

    constructor(private action: () => boolean) {}

    public execute(): boolean {
        const result = this.action();

        if (result) {
            return result;
        }

        return this.successor?.execute() ?? false;
    }
}

class ExecutionChainBuilder {
    private startElement: ExecutionChainElement | null = null;
    private currentElement: ExecutionChainElement | null = null;

    public add(route: RouteInfo): ExecutionChainBuilder {
        return this.addElement(
            new ExecutionChainElement(
                () => setHeaderLinkActiveIfPathIncludesRoute(route)));
    }

    private addElement(element: ExecutionChainElement): ExecutionChainBuilder {
        if (this.startElement == null || this.currentElement == null) {
            this.startElement = element;
            this.currentElement = element;
        } else {
            this.currentElement.successor = element;
            this.currentElement = element;
        }

        return this;
    }

    public execute(): boolean {
        if (this.startElement == null) {
            throw new Error("Chain is empty");
        }

        return this.startElement.execute();
    }
}

new ExecutionChainBuilder()
    .add(Routes.Shop)
    .add(Routes.Sale)
    .add(Routes.Blog)
    .add(Routes.Home)
    .execute();