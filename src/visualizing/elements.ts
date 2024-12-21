import {uuid} from "../tools/uuid.ts";

export abstract class AbstractElement {
    protected elementId: string;
    public parent: AbstractElement | null = null;
    protected children: AbstractElement[] = [];
    private isComposeElement: boolean = false;
    private parentElement: HTMLElement | null = null;

    protected constructor() {
        this.elementId = uuid();
    }

    public abstract render(): HTMLElement | null;

    public renderAll(parent: HTMLElement): void {
        this.parentElement = parent;
        console.log(parent)
        const composeElement = this.compose();

        if (composeElement) {
            parent.appendChild(composeElement);
        }
    }

    public addChild(element: AbstractElement): AbstractElement {
        element.parent = this;
        this.children.push(element);

        return this;
    }

    protected compose(): HTMLElement | null {
        if (!this.isComposeElement) {
            this.isComposeElement = true;
        } else {
            const oldElementsList = document
                .documentElement
                .querySelectorAll(`[elementId="${this.elementId}"]`);

            oldElementsList[0].parentElement?.removeChild(oldElementsList[0]);
        }

        const element = this.render();
        if (element == null) return null;

        element.setAttribute("elementId", this.elementId);

        for (const child of this.children) {
            const childElement = child.render();
            if (childElement != null) {
                element.appendChild(childElement as Node);
            }
        }

        return element;
    }

    protected setState(action: () => void) {
        action();
        this.reRender();
    }

    private reRender() {
        if (this.isComposeElement && this.parentElement != null) {
            this.renderAll(this.parentElement);
        }

        if (this.parent != null) {
            this.parent.reRender();
        }
    }

    protected static createElement(html: string): HTMLElement {
        const container = document.createElement("div");
        container.innerHTML = html;
        return container.firstElementChild as HTMLElement;
    }
}