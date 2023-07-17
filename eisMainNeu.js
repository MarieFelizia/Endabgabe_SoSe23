"use strict";
var Ice;
(function (Ice) {
    window.addEventListener("load", handleLoad);
    let kundenArray = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Ice.crc2 = canvas.getContext("2d");
        drawBackground();
        Ice.imageData = Ice.crc2.getImageData(0, 0, 800, 600);
        createKundi();
        window.setInterval(moveKundi, 10);
        choseIceCream();
        window.addEventListener("keydown", handleKeyDown1);
        window.addEventListener("keydown", handleKeyDown2);
        window.addEventListener("keydown", handleKeyDown3);
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
    //warum funktioniert das hier mit dem Liveserver aber nicht mit githuib??
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
                    }
                }
            }
            kunde.draw();
        }
        requestAnimationFrame(moveKundi);
    }
    function choseIceCream() {
        const randomChoice = Math.floor(Math.random() * 3) + 1;
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
    function drawBackground() {
        let gradient = Ice.crc2.createLinearGradient(0, 0, 0, Ice.crc2.canvas.height);
        gradient.addColorStop(1, "#c8c6c4");
        Ice.crc2.fillStyle = gradient;
        Ice.crc2.fillRect(0, 0, Ice.crc2.canvas.width, Ice.crc2.canvas.height);
        drawIcePurple({ x: 25, y: 25 });
        drawIceYellow({ x: 150, y: 25 });
        drawIceBlue({ x: 275, y: 25 });
        drawIcePink({ x: 400, y: 25 });
        drawIceBrown({ x: 25, y: 150 });
        drawIceWhite({ x: 150, y: 150 });
        drawIceMint({ x: 275, y: 150 });
        drawIceRed({ x: 400, y: 150 });
        drawChoclate({ x: 25, y: 275 });
        drawStrawberry({ x: 150, y: 275 });
        drawCream({ x: 275, y: 275 });
        drawSprinkles({ x: 400, y: 275 });
        drawSeat({ x: 250, y: 500 });
        drawTable({ x: 25, y: 400 });
        Ice.drawSorte1({ x: 550, y: 25 });
        Ice.drawSorte2({ x: 550, y: 150 });
        Ice.drawSorte3({ x: 550, y: 275 });
        Ice.imageData = Ice.crc2.getImageData(0, 0, Ice.crc2.canvas.width, Ice.crc2.canvas.height);
    }
    ;
    function drawIcePurple(_position) {
        Ice.crc2.beginPath();
        Ice.crc2.fillStyle = "#d0c7e3";
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Blaubeer Eis", _position.x + 50, _position.y + 20);
    }
    function drawIceYellow(_position) {
        Ice.crc2.beginPath();
        Ice.crc2.fillStyle = "#fef7b5";
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Bananen Eis", _position.x + 50, _position.y + 20);
    }
    function drawIceBlue(_position) {
        Ice.crc2.beginPath();
        Ice.crc2.fillStyle = "#d0e8f2";
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Bubblegum Eis", _position.x + 50, _position.y + 20);
    }
    function drawIcePink(_position) {
        Ice.crc2.beginPath();
        Ice.crc2.fillStyle = "#fac9d3";
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Erdbeer Eis", _position.x + 50, _position.y + 20);
    }
    function drawIceBrown(_position) {
        Ice.crc2.beginPath();
        Ice.crc2.fillStyle = "#5b3a29";
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Schoko Eis", _position.x + 50, _position.y + 20);
    }
    function drawIceWhite(_position) {
        Ice.crc2.beginPath();
        Ice.crc2.fillStyle = "#fffdd0";
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Vanille Eis", _position.x + 50, _position.y + 20);
    }
    function drawIceMint(_position) {
        Ice.crc2.beginPath();
        Ice.crc2.fillStyle = "#cfffe5";
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Minz Eis", _position.x + 50, _position.y + 20);
    }
    function drawIceRed(_position) {
        Ice.crc2.beginPath();
        Ice.crc2.fillStyle = "#720004";
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Kirsch Eis", _position.x + 50, _position.y + 20);
    }
    function drawChoclate(_position) {
        const gradient = Ice.crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
        gradient.addColorStop(0, "#8B4513"); // Dunkle Schokoladenfarbe
        gradient.addColorStop(0.5, "#D2691E"); // Helle Schokoladenfarbe
        gradient.addColorStop(1, "#8B4513"); // Dunkle Schokoladenfarbe
        Ice.crc2.fillStyle = gradient;
        Ice.crc2.beginPath();
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Schokosoße", _position.x + 50, _position.y + 20);
    }
    function drawStrawberry(_position) {
        const gradient = Ice.crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
        gradient.addColorStop(0, "#dc0900"); // Dunkle Schokoladenfarbe
        gradient.addColorStop(0.5, "#ff5348"); // Helle Schokoladenfarbe
        gradient.addColorStop(1, "#dc0900"); // Dunkle Schokoladenfarbe
        Ice.crc2.fillStyle = gradient;
        Ice.crc2.beginPath();
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Erdbeersoße", _position.x + 50, _position.y + 20);
    }
    function drawSprinkles(_position) {
        let sprinkleColors = ["red", "blue", "green", "yellow", "purple"]; // Array mit Farben für die Streusel
        let sprinkleWidth = 2; // Breite der Streusel
        let sprinkleHeight = 10; // Höhe der Streusel
        Ice.crc2.beginPath();
        Ice.crc2.strokeStyle = "grey"; // Farbe der Umrandung
        Ice.crc2.lineWidth = 2;
        Ice.crc2.rect(_position.x, _position.y, 100, 100); // Kasten um den Streuselbereich zeichnen
        Ice.crc2.stroke();
        Ice.crc2.closePath();
        for (let i = 0; i < 100; i++) { // Anzahl der Streusel anpassen
            const sprinkleColor = sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)]; // Zufällige Farbe auswählen
            const sprinkleX = _position.x + Math.random() * (100 - sprinkleWidth); // Zufällige X-Position innerhalb des Rechtecks
            const sprinkleY = _position.y + Math.random() * (100 - sprinkleHeight); // Zufällige Y-Position innerhalb des Rechtecks
            const sprinkleRotation = Math.random() * Math.PI * 2; // Zufällige Rotation (im Bogenmaß) generieren
            Ice.crc2.save(); // Aktuellen Zustand des Canvas-Kontexts speichern
            Ice.crc2.translate(sprinkleX + sprinkleWidth / 2, sprinkleY + sprinkleHeight / 2); // Zu Position des Streusels verschieben
            Ice.crc2.rotate(sprinkleRotation); // Rotation anwenden
            Ice.crc2.fillStyle = sprinkleColor;
            Ice.crc2.fillRect(-sprinkleWidth / 2, -sprinkleHeight / 2, sprinkleWidth, sprinkleHeight); // Streusel zeichnen
            Ice.crc2.restore(); // Ursprünglichen Zustand des Canvas-Kontexts wiederherstellen
        }
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New ";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Streusel", _position.x + 50, _position.y + 20);
    }
    function drawCream(_position) {
        const gradient = Ice.crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
        gradient.addColorStop(0, "#d5b895");
        gradient.addColorStop(0.5, "#e8dcb5");
        gradient.addColorStop(1, "#d5b895");
        Ice.crc2.fillStyle = gradient;
        Ice.crc2.beginPath();
        Ice.crc2.fillRect(_position.x, _position.y, 100, 100);
        Ice.crc2.closePath();
        Ice.crc2.fillStyle = "black";
        Ice.crc2.font = "10px Courier New";
        Ice.crc2.textAlign = "center";
        Ice.crc2.fillText("Sahne", _position.x + 50, _position.y + 20);
    }
    function drawSeat(_position) {
        Ice.crc2.beginPath();
        Ice.crc2.arc(_position.x, _position.y, 50, 0, 2 * Math.PI);
        Ice.crc2.fillStyle = "grey";
        Ice.crc2.fill();
        Ice.crc2.closePath();
    }
    function drawTable(_position) {
        Ice.crc2.beginPath();
        Ice.crc2.fillStyle = "grey";
        Ice.crc2.fillRect(_position.x, _position.y, 475, 40);
        Ice.crc2.closePath();
    }
    function handleKeyDown1(event) {
        if (event.key === "1") {
            1;
            Ice.drawSorte1({ x: 400, y: 250 });
            console.log("Sorte 1");
        }
    }
    function handleKeyDown2(event) {
        if (event.key === "2") {
            1;
            Ice.drawSorte2({ x: 400, y: 250 });
            console.log("Sorte 2");
        }
    }
    function handleKeyDown3(event) {
        if (event.key === "3") {
            1;
            Ice.drawSorte3({ x: 400, y: 250 });
            console.log("Sorte 3");
        }
    }
})(Ice || (Ice = {}));
//# sourceMappingURL=eisMainNeu.js.map