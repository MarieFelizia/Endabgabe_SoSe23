namespace Eisdealer {

    interface Vector {
        x: number; 
        y: number; 
    }; 

    window.addEventListener("load", handleLoad); 
    let crc2: CanvasRenderingContext2D; 

    function handleLoad (_event: Event): void {
        let canvas: HTMLCanvasElement = document.querySelector("canvas")!; 
        crc2 = canvas.getContext("2d")!; 

        drawBackground(); 
        drawIcePurple({x:50, y:50}); 
        drawIceYellow({x:400, y:50}); 
        drawIceBlue({x:50, y:250}); 
        drawIcePink({x:400, y: 250}); 
        drawChoclate({x:50, y:450});
        drawStrawberry({x:225, y:450});
        drawCream({x:400, y:450});
        drawSprinkles({x:575, y:450});
        
       
    }

    function drawBackground() {
        let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0, crc2.canvas.height); 
        gradient.addColorStop(1, "#c8c6c4");
        
        crc2.fillStyle = gradient; 
        crc2.fillRect (0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawIcePurple(_position: Vector) {
        crc2.beginPath(); 
        crc2.fillStyle = "#d0c7e3"; 
        crc2.fillRect(_position.x, _position.y,300, 150); 
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "15px Courier New"; 
        crc2.textAlign = "center"; 
        crc2.fillText("Blaubeer Eis", _position.x + 140, _position.y + 40); 

    }

    function drawIceYellow(_position: Vector) {
        crc2.beginPath(); 
        crc2.fillStyle = "#fef7b5"; 
        crc2.fillRect(_position.x, _position.y,300,150); 
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "15px Courier New"; 
        crc2.textAlign = "center"; 
        crc2.fillText("Zitronen Eis", _position.x + 140, _position.y + 40);

    }

    function drawIceBlue(_position: Vector) {
        crc2.beginPath(); 
        crc2.fillStyle = "#d0e8f2"; 
        crc2.fillRect(_position.x, _position.y,300,150); 
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "15px Courier New"; 
        crc2.textAlign = "center"; 
        crc2.fillText("Bubblegum Eis", _position.x + 140, _position.y + 40);
    }

    function drawIcePink(_position: Vector) {
        crc2.beginPath(); 
        crc2.fillStyle = "#fac9d3"; 
        crc2.fillRect(_position.x, _position.y,300,150); 
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "15px Courier New"; 
        crc2.textAlign = "center"; 
        crc2.fillText("Erdbeer Eis", _position.x + 140, _position.y + 40);

    }

    function drawChoclate(_position: Vector) {
        const gradient = crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
        gradient.addColorStop(0, "#8B4513"); // Dunkle Schokoladenfarbe
        gradient.addColorStop(0.5, "#D2691E"); // Helle Schokoladenfarbe
        gradient.addColorStop(1, "#8B4513"); // Dunkle Schokoladenfarbe
      
        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.fillRect(_position.x, _position.y, 125, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "15px Courier New"; 
        crc2.textAlign = "center"; 
        crc2.fillText("Schokosoße", _position.x + 60, _position.y + 20);
      }
      

      function drawStrawberry(_position: Vector) {
        const gradient = crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
        gradient.addColorStop(0, "#dc0900"); // Dunkle Schokoladenfarbe
        gradient.addColorStop(0.5, "#ff5348"); // Helle Schokoladenfarbe
        gradient.addColorStop(1, "#dc0900"); // Dunkle Schokoladenfarbe
      
        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.fillRect(_position.x, _position.y, 125, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "15px Courier New"; 
        crc2.textAlign = "center"; 
        crc2.fillText("Erdbeersoße", _position.x + 60, _position.y + 20);
      }

      function drawSprinkles(_position: Vector ) {
        const sprinkleColors = ["red", "blue", "green", "yellow", "purple"]; // Array mit Farben für die Streusel
        
        const sprinkleWidth = 2; // Breite der Streusel
        const sprinkleHeight = 10; // Höhe der Streusel
      
        crc2.beginPath();
        crc2.strokeStyle = "grey"; // Farbe der Umrandung
        crc2.lineWidth = 2;
        crc2.rect(_position.x, _position.y, 125, 100); // Kasten um den Streuselbereich zeichnen
        crc2.stroke();
        crc2.closePath();
        
        for (let i = 0; i < 200; i++) { // Anzahl der Streusel anpassen
          const sprinkleColor = sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)]; // Zufällige Farbe auswählen
        
          const sprinkleX = _position.x + Math.random() * (125 - sprinkleWidth); // Zufällige X-Position innerhalb des Rechtecks
          const sprinkleY = _position.y + Math.random() * (100 - sprinkleHeight); // Zufällige Y-Position innerhalb des Rechtecks
          const sprinkleRotation = Math.random() * Math.PI * 2; // Zufällige Rotation (im Bogenmaß) generieren
      
          crc2.save(); // Aktuellen Zustand des Canvas-Kontexts speichern
          crc2.translate(sprinkleX + sprinkleWidth / 2, sprinkleY + sprinkleHeight / 2); // Zu Position des Streusels verschieben
          crc2.rotate(sprinkleRotation); // Rotation anwenden
          crc2.fillStyle = sprinkleColor;
          crc2.fillRect(-sprinkleWidth / 2, -sprinkleHeight / 2, sprinkleWidth, sprinkleHeight); // Streusel zeichnen
          crc2.restore(); // Ursprünglichen Zustand des Canvas-Kontexts wiederherstellen
        }

        crc2.fillStyle = "black";
        crc2.font = "15px Courier New"; 
        crc2.textAlign = "center"; 
        crc2.fillText("Streusel", _position.x + 60, _position.y + 20);
      }
      
      function drawCream(_position: Vector) {
        const gradient = crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
        gradient.addColorStop(0, "#d5b895"); 
        gradient.addColorStop(0.5, "#e8dcb5"); 
        gradient.addColorStop(1, "#d5b895"); 
      
        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.fillRect(_position.x, _position.y, 125, 100);
        crc2.closePath();

        crc2.fillStyle = "black";
        crc2.font = "15px Courier New"; 
        crc2.textAlign = "center"; 
        crc2.fillText("Sahne", _position.x + 60, _position.y + 20);
      }

}
