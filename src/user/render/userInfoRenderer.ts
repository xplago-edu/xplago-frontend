import {userFetchService} from "../../singletons.ts";
import {UserInfoElement} from "../elements/userInfoElement.ts";

(async function main() {
    await new Promise(resolve => setTimeout(() => resolve(""), 4000))

    const user = await userFetchService.getUser();

    const userLoading = document.getElementsByClassName("loading")[0] as HTMLElement;
    const userWrapper = document.getElementsByClassName("user__wrapper")[0] as HTMLElement;

    if (userLoading && userWrapper) {
        userLoading.style.display = "none";

        userWrapper.style.display = "flex";

        if (user != null) {
            const userInfo = new UserInfoElement(user);
            userInfo.renderAll(userWrapper)
        }
    }
})()