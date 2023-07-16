namespace Ice {

    
    interface Vector {
        x: number;
        y: number;
    }

    export function drawSorte1(_position: Vector) {
        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("1. gemischter Eisbecher mit Sahne", _position.x + 100, _position.y + 10);
        
        crc2.beginPath();
        crc2.strokeStyle = "grey"; // Farbe der Umrandung
        crc2.lineWidth = 2;
        crc2.rect(_position.x, _position.y, 200, 100); // Kasten um den Streuselbereich zeichnen
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 80, _position.y + 50, 20, 0, 2 * Math.PI); // Vollständiger Kreis
        crc2.fillStyle = "#d0e8f2"; // Farbe des Kreises
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 120, _position.y + 50, 20, 0, 2 * Math.PI); // Vollständiger Kreis
        crc2.fillStyle = "#cfffe5"; // Farbe des Kreises
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 100, _position.y + 30, 20, 0, 2 * Math.PI); // Vollständiger Kreis
        crc2.fillStyle = "#fac9d3"; // Farbe des Kreises
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 100, _position.y + 60, 40, 0, Math.PI, false); // Halbkreis mit umgekehrter Richtung (im Uhrzeigersinn)
        crc2.fillStyle = "grey"; // Farbe des Halbkreises
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.strokeStyle = "white"; // Farbe der Schlangenlinie
        crc2.lineWidth = 3;
        let amplitude = 20; // Amplitude der Schlangenlinie
        let frequency = 0.2; // Frequenz der Schlangenlinie
        let startX = _position.x + 60; // Start-X-Position der Linie
        let startY = _position.y + 40; // Start-Y-Position der Linie
    
        crc2.moveTo(startX, startY); // Startpunkt der Linie
    
        for (let x = startX; x < startX + 80; x += 2) {
            let y = startY + amplitude * Math.sin(frequency * (x - startX)); // Berechnung der Y-Position anhand der Sinus-Funktion
            crc2.lineTo(x, y); // Linie zum aktuellen Punkt zeichnen
        }
    
        crc2.stroke();
        crc2.closePath();


    }

    export function drawSorte2(_position: Vector) {

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("2. Kirscheis in der Waffel", _position.x + 100, _position.y + 10);
        
        crc2.beginPath();
        crc2.strokeStyle = "grey"; // Farbe der Umrandung
        crc2.lineWidth = 2;
        crc2.rect(_position.x, _position.y, 200, 100); // Kasten um den Streuselbereich zeichnen
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 100, _position.y + 45, 20, 0, 2 * Math.PI); // Vollständiger Kreis
        crc2.fillStyle = "#720004"; // Farbe des Kreises
        crc2.fill();
        crc2.closePath();

        let triangleHeight = 60; // Höhe des Dreiecks (ungefähr die Hälfte des Kastens)
        let triangleWidth = 80; // Breite des Dreiecks (ungefähr die Hälfte des Kastens)
    
        crc2.beginPath();
        crc2.moveTo(_position.x + 100, _position.y + 100); // Startpunkt unten in der Mitte
        crc2.lineTo(_position.x + 120 - triangleWidth / 2, _position.y + triangleHeight); // Linie zur linken Ecke
        crc2.lineTo(_position.x + 80 + triangleWidth / 2, _position.y + triangleHeight); // Linie zur rechten Ecke
        crc2.fillStyle = "#d2b48c"; // Farbe des Dreiecks (hellbraun)
        crc2.fill();
        crc2.closePath();
        
        }
    

    

    export function drawSorte3(_position: Vector) {

        crc2.fillStyle = "black";
        crc2.font = "10px Courier New";
        crc2.textAlign = "center";
        crc2.fillText("3. Bananasplit", _position.x + 100, _position.y + 10);

        crc2.beginPath();
        crc2.strokeStyle = "grey"; // Farbe der Umrandung
        crc2.lineWidth = 2;
        crc2.rect(_position.x, _position.y, 200, 100); // Kasten um den Streuselbereich zeichnen
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 80, _position.y + 50, 20, 0, 2 * Math.PI); // Vollständiger Kreis
        crc2.fillStyle = "#fffdd0"; // Farbe des Kreises
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 120, _position.y + 50, 20, 0, 2 * Math.PI); // Vollständiger Kreis
        crc2.fillStyle = "#fffdd0"; // Farbe des Kreises
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.fillStyle = "yellow"; // Farbe der Füllung
        crc2.ellipse(_position.x + 100, _position.y + 40, 35, 10, Math.PI / 1, 0, 2 * Math.PI); // Ellipse zeichnen (Banane)
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 100, _position.y + 60, 40, 0, Math.PI, false); // Halbkreis mit umgekehrter Richtung (im Uhrzeigersinn)
        crc2.fillStyle = "grey"; // Farbe des Halbkreises
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.strokeStyle = "#5b3a29"; // Farbe der Schlangenlinie
        crc2.lineWidth = 3;
        let amplitude = 15; // Amplitude der Schlangenlinie
        let frequency = 0.2; // Frequenz der Schlangenlinie
        let startX = _position.x + 60; // Start-X-Position der Linie
        let startY = _position.y + 45; // Start-Y-Position der Linie
    
        crc2.moveTo(startX, startY); // Startpunkt der Linie
    
        for (let x = startX; x < startX + 80; x += 2) {
            let y = startY + amplitude * Math.sin(frequency * (x - startX)); // Berechnung der Y-Position anhand der Sinus-Funktion
            crc2.lineTo(x, y); // Linie zum aktuellen Punkt zeichnen
        }
    
        crc2.stroke();
        crc2.closePath();

    
    }





}