"use strict";
var Ice;
(function (Ice) {
    Ice.chosenIceCream = "";
    class Kunden {
        position;
        velocity;
        size;
        reachedSeat;
        stopped;
        stopTimer;
        constructor(_size, _position) {
            if (_position) //überprüfen ob position übergeben wurde
                this.position = _position; // wenn ja, position auf übergebenen wert setzen 
            else
                this.position = new Ice.Vector(30, 100); // wenn nicht, dann setzen wir position auf standartwert
            this.velocity = new Ice.Vector(30, 0); // Geschwindigkeit
            this.size = _size; // Größe des Übergebenen werts
            this.reachedSeat = false; // festlegen, dass Sitzplatz noch nicht erreicht wurde
            this.stopped = false; // festlegen, dass das Objekt nicht angehalten ist 
            this.stopTimer = 0; // Timer auf 0 setzen 
        }
        move(_timeslice) {
            if (!this.reachedSeat) { // ist Smiley angehalten
                if (!this.stopped) { // Versatz berechnen mit Geschwindigkeit und Zeitschritt
                    let offset = new Ice.Vector(this.velocity.x, this.velocity.y);
                    offset.scale(_timeslice);
                    this.position.add(offset); // Aktualisieren Position
                    // liegt Position außerhalb des Canvas
                    if (this.position.x < 0)
                        this.position.x += Ice.crc2.canvas.width;
                    if (this.position.y < 0)
                        this.position.y += Ice.crc2.canvas.height;
                    if (this.position.x > Ice.crc2.canvas.width)
                        this.position.x -= Ice.crc2.canvas.width;
                    if (this.position.y > Ice.crc2.canvas.height)
                        this.position.y -= Ice.crc2.canvas.height;
                }
                // überprüfen ob Smiley angehalten hat
                if (this.position.x >= 250 && this.position.x <= 450 && this.position.y >= 460 && this.position.y <= 540) {
                    this.reachedSeat = true; // Smiley hat Platz erreicht und angehalten
                    this.stopTimer = 0;
                }
            }
            else { // ist genug zeit vergangen, sodass Smiley weiter kann 
                this.stopTimer += _timeslice;
                if (this.stopTimer >= 10) { // Smiley kann weitergehen 
                    this.reachedSeat = false;
                    this.stopped = false;
                }
                else {
                    this.stopped = true; // Smiley hält an 
                }
            }
        }
        draw() {
            if (!this.reachedSeat || this.stopped) { // wenn Smiley an Sitz angekommen ist und stoppt
                Ice.crc2.beginPath();
                Ice.crc2.arc(this.position.x, this.position.y, 40, 0, 2 * Math.PI);
                Ice.crc2.fillStyle = "yellow";
                Ice.crc2.fill();
                Ice.crc2.beginPath();
                Ice.crc2.arc(this.position.x - 15, this.position.y - 20, 8, 0, 2 * Math.PI);
                Ice.crc2.arc(this.position.x + 15, this.position.y - 20, 8, 0, 2 * Math.PI);
                Ice.crc2.fillStyle = "black";
                Ice.crc2.fill();
                if (!this.reachedSeat) { // bis Smiley am Platz ist
                    Ice.crc2.beginPath();
                    Ice.crc2.moveTo(this.position.x - 20, this.position.y + 10); // Startpunkt Mund
                    Ice.crc2.lineTo(this.position.x + 20, this.position.y + 10); // Endpunkt Mund
                    Ice.crc2.lineWidth = 5;
                    Ice.crc2.strokeStyle = "black";
                    Ice.crc2.stroke();
                }
                else { // wenn smiley am Platz ist
                    Ice.crc2.beginPath();
                    Ice.crc2.arc(this.position.x, this.position.y + 10, 20, 0, Math.PI, false); // Glücklichen Smiley zeichnen 
                    Ice.crc2.lineWidth = 5;
                    Ice.crc2.strokeStyle = "black";
                    Ice.crc2.stroke();
                }
                if (this.reachedSeat && Ice.chosenIceCream !== "") { // wenn Smiley am Platz ist und Eis ausgesucht hat 
                    Ice.crc2.fillStyle = "black";
                    Ice.crc2.font = "10px Courier New";
                    Ice.crc2.textAlign = "center";
                    Ice.crc2.fillText(Ice.chosenIceCream, this.position.x, this.position.y + 60);
                }
            }
        }
    }
    Ice.Kunden = Kunden;
})(Ice || (Ice = {}));
//# sourceMappingURL=kunden.js.map