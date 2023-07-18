namespace Ice {

    export class Vector {
        x: number;
        y: number;

        // x und y Koordinaten mit übergebenen Werten setzen 
        public constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        // x und y Koordinaten mit übergebenen Werten setzen 
        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        // x und y Koordinaten mit übergebenen Faktor skalieren 
        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        // x und y Koordinaten mit entsprechenden Werten addieren 
        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

    };
};

