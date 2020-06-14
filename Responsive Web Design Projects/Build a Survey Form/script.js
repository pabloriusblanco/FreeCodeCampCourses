window.onload = function () {
    init();
};

function init() {
    const header = document.getElementById("mainHeader");
    const form = document.getElementById("main");
    header.classList.add("slide-in-blurred-right");
    setTimeout(() => {
        form.classList.add("fade-in");
    }, 1000);
}