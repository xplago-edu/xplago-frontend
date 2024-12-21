import {UserInfo} from "../models/user.ts";

export class UserFetchService {
    private url = "https://randomuser.me/api/";

    constructor() {}

    async getUser(): Promise<UserInfo | null> {
        const response = await fetch(this.url);
        if (!response.ok) return null;
        return (await response.json()).results[0];
    }
}
