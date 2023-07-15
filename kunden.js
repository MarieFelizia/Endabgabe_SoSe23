"use strict";
var Ice;
(function (Ice) {
    class Kunden {
        position;
        velocity;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Ice.Vector(30, 100);
            this.velocity = new Ice.Vector(30, 0); //start 
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new Ice.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Ice.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Ice.crc2.canvas.height;
            if (this.position.x > Ice.crc2.canvas.width)
                this.position.x -= Ice.crc2.canvas.width;
            if (this.position.y > Ice.crc2.canvas.height)
                this.position.y -= Ice.crc2.canvas.height;
        }
        draw() {
            // Smiley zeichnen
            Ice.crc2.beginPath();
            Ice.crc2.arc(this.position.x, this.position.y, 40, 0, 2 * Math.PI);
            Ice.crc2.fillStyle = "yellow";
            Ice.crc2.fill();
            // Augen zeichnen
            Ice.crc2.beginPath();
            Ice.crc2.arc(this.position.x - 15, this.position.y - 20, 8, 0, 2 * Math.PI);
            Ice.crc2.arc(this.position.x + 15, this.position.y - 20, 8, 0, 2 * Math.PI);
            Ice.crc2.fillStyle = "black";
            Ice.crc2.fill();
            // Mund zeichnen
            Ice.crc2.beginPath();
            Ice.crc2.arc(this.position.x, this.position.y + 10, 20, 0.2 * Math.PI, 0.8 * Math.PI);
            Ice.crc2.lineWidth = 5;
            Ice.crc2.strokeStyle = "black";
            Ice.crc2.stroke();
        }
    }
    Ice.Kunden = Kunden;
})(Ice || (Ice = {}));
//# sourceMappingURL=kunden.js.map