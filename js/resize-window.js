window.addEventListener("load", () => {
    const wWidth = 1024;
    const wHeight = 768;

    if (window.innerWidth >= wWidth && window.innerHeight >= wHeight) {
        window.resizeTo(wWidth, wHeight); 
    } else {
        window.open('index.html', '_blank', `width=${wWidth},height=${wHeight}`);
    }
});
