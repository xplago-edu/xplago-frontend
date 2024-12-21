const initTime = Date.now();

addEventListener("load", _ => {
    const loadingTime = Date.now() - initTime;
    setLoadingTime(loadingTime);
});

function setLoadingTime(time: number) {
    const element = getLoadingTimeContentElement();
    if (element != null) {
        element.textContent = "Site was loaded by " + time + " ms";
    }
}

function getLoadingTimeContentElement(): HTMLElement | null {
    return document.getElementById("loading-time-box-content");
}