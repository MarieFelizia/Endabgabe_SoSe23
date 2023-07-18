"use strict";
/*
Name: <Marie Eckl>
Matrikelnummer: <272409>
Semester: <MKB2>
Datum: <18.07.2023>
Quellen: <Github Jirka, Developer Mozilla, ChatGPT, Aufgabe(n) aus EIA1, Code Pia Schwer aus Semester>

*/
var Ice;
(function (Ice) {
    window.addEventListener("load", handleLoad);
    let kundenArray = [];
    window.addEventListener("keydown", handleKeyDown1);
    window.addEventListener("keydown", handleKeyDown2);
    window.addEventListener("keydown", handleKeyDown3);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Ice.crc2 = canvas.getContext("2d");
        Ice.drawBackground();
        Ice.imageData = Ice.crc2.getImageData(0, 0, 800, 600);
        createKundi();
        window.setInterval(moveKundi, 10);
        choseIceCream();
    }
    ;
    function createKundi() {
        let startX = 0; // Start-X-Position des ersten Smileys
        let startY = 500; // Start-Y-Position aller Smileys
        let spacing = 300; // Abstand zwischen den Smileys
        for (let i = 0; i < 1; i++) {
            let position = new Ice.Vector(startX + i * spacing, startY);
            let kunden = new Ice.Kunden(0.5, position);
            kundenArray.push(kunden);
        }
    }
    function moveKundi() {
        Ice.crc2.clearRect(0, 0, 1000, 600);
        Ice.crc2.putImageData(Ice.imageData, 0, 0);
        for (let kunde of kundenArray) {
            if (!kunde.reachedSeat) {
                kunde.move(1 / 600);
                if (kunde.position.x >= Ice.crc2.canvas.width) {
                    kunde.position.x = -50; // Move the customer outside the canvas on the left side
                }
            }
            else {
                if (!kunde.stopped) {
                    kunde.velocity = new Ice.Vector(20, 0);
                    kunde.stopped = true;
                }
                kunde.stopTimer += 1 / 600; // Increase stop timer by 1/60th of a second (assuming 60 FPS)
                if (kunde.stopTimer >= 10) { // Check if 10 seconds have passed
                    if (kunde.position.x <= Ice.crc2.canvas.width + 1000) {
                        kunde.position.x += 1; // Move the customer towards the right side
                    }
                    else {
                        kunde.reachedSeat = false;
                        kunde.stopped = false;
                        kunde.position.x = 10; // Move the customer outside the canvas on the left side
                        choseIceCream();
                    }
                }
            }
            kunde.draw();
        }
        requestAnimationFrame(moveKundi);
    }
    function choseIceCream() {
        let randomChoice = Math.floor(Math.random() * 3) + 1;
        switch (randomChoice) {
            case 1:
                Ice.chosenIceCream = "Ich hätte gerne einen gemischten Eisbecher mit Sahne";
                break;
            case 2:
                Ice.chosenIceCream = "Ich hätte gerne ein Kirscheis in der Waffel";
                break;
            case 3:
                Ice.chosenIceCream = "Ich hätte gerne einen Bananasplit";
                break;
        }
    }
    function handleKeyDown1(event) {
        if (event.key === "1") {
            Ice.drawSorte1({ x: 400, y: 250 });
            console.log("Hier ist ein gemischter Eisbecher.");
        }
    }
    function handleKeyDown2(event) {
        if (event.key === "2") {
            Ice.drawSorte2({ x: 400, y: 250 });
            console.log("Hier ist ein Kirscheis in der Waffel.");
        }
    }
    function handleKeyDown3(event) {
        if (event.key === "3") {
            Ice.drawSorte3({ x: 400, y: 250 });
            console.log("Hier ist ein Bananasplit.");
        }
    }
})(Ice || (Ice = {}));
;
//# sourceMappingURL=eisMainNeu.js.map