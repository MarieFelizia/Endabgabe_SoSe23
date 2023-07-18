"use strict";
var Ice;
(function (Ice) {
    let counter = 0;
    window.addEventListener("DOMContentLoaded", () => {
        window.addEventListener("keydown", (event) => {
            if (event.key === "1") {
                increaseCounter1();
            }
            else if (event.key === "2") {
                increaseCounter2();
            }
            else if (event.key === "3") {
                increaseCounter3();
            }
        });
    });
    function increaseCounter1() {
        counter += 3;
        updateCounter();
    }
    function increaseCounter2() {
        counter += 1;
        updateCounter();
    }
    function increaseCounter3() {
        counter += 4;
        updateCounter();
    }
    function updateCounter() {
        let counterElement = document.querySelector("#Einnahme");
        if (counterElement) {
            counterElement.textContent = `Einnahmen: ${counter} Euro`;
        }
    }
})(Ice || (Ice = {}));
//# sourceMappingURL=preis.js.map