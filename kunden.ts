namespace Ice {

    export let chosenIceCream: string = ""
    

    export class Kunden {
        position: Vector;
        velocity: Vector;
        size: number;
        reachedSeat: boolean;
        stopped: boolean;
        stopTimer: number;
       

        constructor(_size: number, _position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(30, 100);

            this.velocity = new Vector(30, 0);
            this.size = _size;
            this.reachedSeat = false;
            this.stopped = false;
            this.stopTimer = 0;
            
        }

        move(_timeslice: number): void {
            if (!this.reachedSeat) {
                if (!this.stopped) {
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

                if (this.position.x >= 250 && this.position.x <= 450 && this.position.y >= 460 && this.position.y <= 540) {
                    this.reachedSeat = true;
                    this.stopTimer = 0;
                }
            } else {
                this.stopTimer += _timeslice;
                if (this.stopTimer >= 10) {
                    this.reachedSeat = false;
                    this.stopped = false;
                } else {
                    this.stopped = true;
                }
            }
        }

        

        draw(): void {
            if (!this.reachedSeat || this.stopped) {
              crc2.beginPath();
              crc2.arc(this.position.x, this.position.y, 40, 0, 2 * Math.PI);
              crc2.fillStyle = "yellow";
              crc2.fill();
          
              crc2.beginPath();
              crc2.arc(this.position.x - 15, this.position.y - 20, 8, 0, 2 * Math.PI);
              crc2.arc(this.position.x + 15, this.position.y - 20, 8, 0, 2 * Math.PI);
              crc2.fillStyle = "black";
              crc2.fill();
          
              if (!this.reachedSeat) {
                crc2.beginPath();
                crc2.moveTo(this.position.x - 20, this.position.y + 10); // Start point of the mouth
                crc2.lineTo(this.position.x + 20, this.position.y + 10); // End point of the mouth
                crc2.lineWidth = 5;
                crc2.strokeStyle = "black";
                crc2.stroke();
              } else {
                crc2.beginPath();
                crc2.arc(this.position.x, this.position.y + 10, 20, 0, Math.PI, false); // Draw a smile (half circle)
                crc2.lineWidth = 5;
                crc2.strokeStyle = "black";
                crc2.stroke();
              }
          
              if (this.reachedSeat && chosenIceCream !== "") {
                crc2.fillStyle = "black";
                crc2.font = "10px Courier New";
                crc2.textAlign = "center";
                crc2.fillText(chosenIceCream, this.position.x, this.position.y + 60);
              }
            }
          }
          

          
          
    }
}