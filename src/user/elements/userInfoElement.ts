import {AbstractElement} from "../../visualizing/elements.ts";
import {UserInfo} from "../models/user.ts";

export class UserInfoElement extends AbstractElement {
    private readonly user: UserInfo;

    constructor(_user: UserInfo) {
        super();
        this.user = _user;
    }

    render(): HTMLElement | null {
        return AbstractElement.createElement(this.getHtml(this.user));
    }

    public getHtml(user: UserInfo) {
        return `
        <div>
            <img src="${user.picture.large}" alt="profile"> 
            <div>
                <h3>${user.name.first} ${user.name.last}</h3>
                <span>${user.gender}</span>
                <p>${user.email}</p>
                <p>${user.phone}</p>
            </div>       
        </div>`
    }
}