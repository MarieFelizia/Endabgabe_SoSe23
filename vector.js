"use strict";
var Ice;
(function (Ice) {
    class Vector {
        x;
        y;
        // x und y Koordinaten mit übergebenen Werten setzen 
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        // x und y Koordinaten mit übergebenen Werten setzen 
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        // x und y Koordinaten mit übergebenen Faktor skalieren 
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        // x und y Koordinaten mit entsprechenden Werten addieren 
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Ice.Vector = Vector;
    ;
})(Ice || (Ice = {}));
;
//# sourceMappingURL=vector.js.map