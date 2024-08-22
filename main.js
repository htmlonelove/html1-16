const headers = Array.from(document.querySelectorAll(".accordion__header"));
const burger = document.querySelector(".header__burger");

headers.forEach((header) => {
    header.addEventListener("click", accordionHandler);
});

function accordionHandler(e) {
    let currentHeader = e.target.closest(".accordion__item");
    let currentCaption = currentHeader.querySelector(".accordion__caption");
    currentHeader.classList.toggle("is-active");
    if (currentHeader.classList.contains("is-active")) {
        currentCaption.textContent = "свернуть"
    } else {
        currentCaption.textContent = "подробнее"
    };
}

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
    burger.classList.toggle("active");
}