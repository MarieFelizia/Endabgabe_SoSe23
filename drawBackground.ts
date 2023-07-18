namespace Ice {

    interface Vector {
        x: number;
        y: number
    }

    export function drawBackground() {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.6, "#c8c6c4");
        gradient.addColorStop(1, "#b4b4b4" )

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

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

        drawSorte1({ x: 550, y: 25 });
        drawSorte2({ x: 550, y: 150 });
        drawSorte3({ x: 550, y: 275 });

        imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    };

 //zuerst ein Rechteck zeichnen und das mit Farbe füllen, dann mithilfe von dem Canvas Text Element Text hinzufügen
    
 function drawIcePurple(_position: Vector) {
        crc2.beginPath();
        crc2.fillStyle = "#d0c7e3";
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Blaubeer Eis", _position.x + 50, _position.y + 20);

    };

    function drawIceYellow(_position: Vector) {
        crc2.beginPath();
        crc2.fillStyle = "#fef7b5";
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Bananen Eis", _position.x + 50, _position.y + 20);

    };

    function drawIceBlue(_position: Vector) {
        crc2.beginPath();
        crc2.fillStyle = "#d0e8f2";
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Bubblegum Eis", _position.x + 50, _position.y + 20);
    };

    function drawIcePink(_position: Vector) {
        crc2.beginPath();
        crc2.fillStyle = "#fac9d3";
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Erdbeer Eis", _position.x + 50, _position.y + 20);
    };

    function drawIceBrown(_position: Vector) {
        crc2.beginPath();
        crc2.fillStyle = "#5b3a29";
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Schoko Eis", _position.x + 50, _position.y + 20);
    };

    function drawIceWhite(_position: Vector) {
        crc2.beginPath();
        crc2.fillStyle = "#fffdd0";
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Vanille Eis", _position.x + 50, _position.y + 20);
    };

    function drawIceMint(_position: Vector) {
        crc2.beginPath();
        crc2.fillStyle = "#cfffe5";
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Minz Eis", _position.x + 50, _position.y + 20);
    };


    function drawIceRed(_position: Vector) {
        crc2.beginPath();
        crc2.fillStyle = "#720004";
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Kirsch Eis", _position.x + 50, _position.y + 20);
    };

    function drawChoclate(_position: Vector) {
        const gradient = crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
        gradient.addColorStop(0, "#8B4513"); // Dunkles Braun
        gradient.addColorStop(0.5, "#D2691E"); // Helles Braun
        gradient.addColorStop(1, "#8B4513"); // Dunkles Braun

        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Schokosoße", _position.x + 50, _position.y + 20);
    };

    function drawStrawberry(_position: Vector) {
        const gradient = crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
        gradient.addColorStop(0, "#dc0900"); // Dunkles Rot
        gradient.addColorStop(0.5, "#ff5348"); // Helles Rot
        gradient.addColorStop(1, "#dc0900"); // Dunkles Rot 

        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Erdbeersoße", _position.x + 50, _position.y + 20);
    };

    function drawSprinkles(_position: Vector) {
        let sprinkleColors = ["red", "blue", "green", "yellow", "purple"]; // Array mit Farben für die Streusel

        let sprinkleWidth = 2; // Breite der Streusel
        let sprinkleHeight = 10; // Höhe der Streusel

        crc2.beginPath();
        crc2.strokeStyle = "grey"; // Farbe der Umrandung
        crc2.lineWidth = 2;
        crc2.rect(_position.x, _position.y, 100, 100); // Kasten um den Streuselbereich zeichnen
        crc2.stroke();
        crc2.closePath();

        for (let i = 0; i < 100; i++) { // Anzahl der Streusel anpassen
            const sprinkleColor = sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)]; // Zufällige Farbe auswählen

            const sprinkleX = _position.x + Math.random() * (100 - sprinkleWidth); // Zufällige X-Position innerhalb des Rechtecks festlegen
            const sprinkleY = _position.y + Math.random() * (100 - sprinkleHeight); // Zufällige Y-Position innerhalb des Rechtecks festlegen
            const sprinkleRotation = Math.random() * Math.PI * 2; // Zufällige Rotation festlegen

            crc2.save(); // Aktuellen Zustand des Canvas-Kontexts speichern
            crc2.translate(sprinkleX + sprinkleWidth / 2, sprinkleY + sprinkleHeight / 2); // Zu Position des Streusels verschieben
            crc2.rotate(sprinkleRotation); // Rotation anwenden
            crc2.fillStyle = sprinkleColor;
            crc2.fillRect(-sprinkleWidth / 2, -sprinkleHeight / 2, sprinkleWidth, sprinkleHeight); // Streusel zeichnen
            crc2.restore(); // Ursprünglichen Zustand des Canvas-Kontexts wiederherstellen
        }

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New ";
        crc2.textAlign = "center";
        crc2.fillText("Streusel", _position.x + 50, _position.y + 20);
    };

    function drawCream(_position: Vector) {
        const gradient = crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
        gradient.addColorStop(0, "#d5b895");
        gradient.addColorStop(0.5, "#e8dcb5");
        gradient.addColorStop(1, "#d5b895");

        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.fillRect(_position.x, _position.y, 100, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("Sahne", _position.x + 50, _position.y + 20);
    };

    function drawSeat(_position: Vector) {
        crc2.beginPath();
        crc2.arc(_position.x, _position.y, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.closePath();
    };

    function drawTable(_position: Vector) {
        crc2.beginPath();
        crc2.fillStyle = "grey";
        crc2.fillRect(_position.x, _position.y, 475, 40);
        crc2.closePath();
    };
};