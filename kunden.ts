namespace Ice {


    export class Kunden {
        position: Vector;
        velocity: Vector;
        size: number;


        constructor(_size: number, _position?: Vector) {

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(30, 100);

            this.velocity = new Vector(30, 0); //start 

            this.size = _size;
        }

        move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
        draw(): void {
            // Smiley zeichnen
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 40, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();

            // Augen zeichnen
            crc2.beginPath();
            crc2.arc(this.position.x - 15, this.position.y - 20, 8, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 15, this.position.y - 20, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();

            // Mund zeichnen
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y + 10, 20, 0.2 * Math.PI, 0.8 * Math.PI);
            crc2.lineWidth = 5;
            crc2.strokeStyle = "black";
            crc2.stroke();
        }
    }
}

