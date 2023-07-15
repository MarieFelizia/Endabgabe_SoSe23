namespace Ice {

    interface Vector { 
      x: number; 
      y: number
    }
    window.addEventListener("load", handleLoad);
    
    export let imageData: ImageData; 
    
    let kundenArray: Kunden[] = [];
    
  
    export let crc2: CanvasRenderingContext2D;
  
    function handleLoad(_event: Event): void {
      let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
      crc2 = canvas.getContext("2d")!;
      
      drawBackground();
  
      imageData = crc2.getImageData(0,0,800,600);
    
      createKundi();
      window.setInterval(moveKundi, 10);
      choseIceCream(); 
  
      window.addEventListener("keydown", handleKeyDown1)
      window.addEventListener("keydown", handleKeyDown2)
      window.addEventListener("keydown", handleKeyDown3)
    };
  
    function createKundi(): void {
      let startX = 0; // Start-X-Position des ersten Smileys
      let startY = 500; // Start-Y-Position aller Smileys
      let spacing = 300; // Abstand zwischen den Smileys
    
      for (let i: number = 0; i < 1; i++) {
        let position: Ice.Vector = new Vector(startX + i * spacing, startY);
        let kunden: Kunden = new Kunden(0.5, position);
        kundenArray.push(kunden);
      }
    }
  
    function moveKundi(): void {
      crc2.clearRect(0, 0, 1000, 600);
      crc2.putImageData(imageData, 0, 0);
    
      for (let kunde of kundenArray) {
        if (!kunde.reachedSeat) {
          kunde.move(1 / 500);
        } else {
          if (!kunde.stopped) {
            kunde.velocity = new Vector(0, 0); // Setze die Geschwindigkeit auf Null, um den Smiley anzuhalten
            kunde.stopped = true;
          }
        }
        kunde.draw();
      }
    
      requestAnimationFrame(moveKundi);
    }
  
    function choseIceCream(): void {
      const randomChoice = Math.floor(Math.random() * 3) + 1;
  
      switch (randomChoice) {
        case 1:
          chosenIceCream = "Ich hätte gerne einen gemischten Eisbecher mit Sahne";
          break;
        case 2:
          chosenIceCream = "Ich hätte gerne ein Kirscheis in der Waffel";
          break;
        case 3:
          chosenIceCream = "Ich hätte gerne einen Bananasplit";
          break;
      }
    }
  
  
  function drawBackground() {
      let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
      gradient.addColorStop(1, "#c8c6c4");
  
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
      drawSeat({x:250, y:500}); 
      drawTable({x:25, y:400});
      
      drawSorte1({x:550, y: 25}); 
      drawSorte2({x:550, y: 150}); 
      drawSorte3({x:550, y: 275}); 
      
    
  
      imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    };
  
    function drawIcePurple(_position: Vector) {
      crc2.beginPath();
      crc2.fillStyle = "#d0c7e3";
      crc2.fillRect(_position.x, _position.y, 100, 100);
      crc2.closePath();
  
      crc2.fillStyle = "black";
      crc2.font = "10px Courier New";
      crc2.textAlign = "center";
      crc2.fillText("Blaubeer Eis", _position.x + 50, _position.y + 20);
  
    }
  
    function drawIceYellow(_position: Vector) {
      crc2.beginPath();
      crc2.fillStyle = "#fef7b5";
      crc2.fillRect(_position.x, _position.y, 100, 100);
      crc2.closePath();
  
      crc2.fillStyle = "black";
      crc2.font = "10px Courier New";
      crc2.textAlign = "center";
      crc2.fillText("Zitronen Eis", _position.x + 50, _position.y + 20);
  
    }
  
    function drawIceBlue(_position: Vector) {
      crc2.beginPath();
      crc2.fillStyle = "#d0e8f2";
      crc2.fillRect(_position.x, _position.y, 100, 100);
      crc2.closePath();
  
      crc2.fillStyle = "black";
      crc2.font = "10px Courier New";
      crc2.textAlign = "center";
      crc2.fillText("Bubblegum Eis", _position.x + 50, _position.y + 20);
    }
  
    function drawIcePink(_position: Vector) {
      crc2.beginPath();
      crc2.fillStyle = "#fac9d3";
      crc2.fillRect(_position.x, _position.y, 100, 100);
      crc2.closePath();
  
      crc2.fillStyle = "black";
      crc2.font = "10px Courier New";
      crc2.textAlign = "center";
      crc2.fillText("Erdbeer Eis", _position.x + 50, _position.y + 20);
  
    }
  
    function drawIceBrown(_position: Vector) {
      crc2.beginPath();
      crc2.fillStyle = "#5b3a29";
      crc2.fillRect(_position.x, _position.y, 100, 100);
      crc2.closePath();
  
      crc2.fillStyle = "black";
      crc2.font = "10px Courier New";
      crc2.textAlign = "center";
      crc2.fillText("Schoko Eis", _position.x + 50, _position.y + 20);
  
    }
  
  
    function drawIceWhite(_position: Vector) {
      crc2.beginPath();
      crc2.fillStyle = "#fffdd0";
      crc2.fillRect(_position.x, _position.y, 100, 100);
      crc2.closePath();
  
      crc2.fillStyle = "black";
      crc2.font = "10px Courier New";
      crc2.textAlign = "center";
      crc2.fillText("Vanille Eis", _position.x + 50, _position.y + 20);
  
    }
  
  
    function drawIceMint(_position: Vector) {
      crc2.beginPath();
      crc2.fillStyle = "#cfffe5";
      crc2.fillRect(_position.x, _position.y, 100, 100);
      crc2.closePath();
  
      crc2.fillStyle = "black";
      crc2.font = "10px Courier New";
      crc2.textAlign = "center";
      crc2.fillText("Minz Eis", _position.x + 50, _position.y + 20);
  
    }
  
  
    function drawIceRed(_position: Vector) {
      crc2.beginPath();
      crc2.fillStyle = "#720004";
      crc2.fillRect(_position.x, _position.y, 100, 100);
      crc2.closePath();
  
      crc2.fillStyle = "black";
      crc2.font = "10px Courier New";
      crc2.textAlign = "center";
      crc2.fillText("Kirsch Eis", _position.x + 50, _position.y + 20);
  
    }
  
    function drawChoclate(_position: Vector) {
      const gradient = crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
      gradient.addColorStop(0, "#8B4513"); // Dunkle Schokoladenfarbe
      gradient.addColorStop(0.5, "#D2691E"); // Helle Schokoladenfarbe
      gradient.addColorStop(1, "#8B4513"); // Dunkle Schokoladenfarbe
  
      crc2.fillStyle = gradient;
      crc2.beginPath();
      crc2.fillRect(_position.x, _position.y, 100, 100);
      crc2.closePath();
  
      crc2.fillStyle = "black";
      crc2.font = "10px Courier New";
      crc2.textAlign = "center";
      crc2.fillText("Schokosoße", _position.x + 50, _position.y + 20);
    }
  
  
    function drawStrawberry(_position: Vector) {
      const gradient = crc2.createLinearGradient(_position.x, _position.y, _position.x + 125, _position.y + 100);
      gradient.addColorStop(0, "#dc0900"); // Dunkle Schokoladenfarbe
      gradient.addColorStop(0.5, "#ff5348"); // Helle Schokoladenfarbe
      gradient.addColorStop(1, "#dc0900"); // Dunkle Schokoladenfarbe
  
      crc2.fillStyle = gradient;
      crc2.beginPath();
      crc2.fillRect(_position.x, _position.y, 100, 100);
      crc2.closePath();
  
      crc2.fillStyle = "black";
      crc2.font = "10px Courier New";
      crc2.textAlign = "center";
      crc2.fillText("Erdbeersoße", _position.x + 50, _position.y + 20);
    }
  
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
  
        const sprinkleX = _position.x + Math.random() * (100 - sprinkleWidth); // Zufällige X-Position innerhalb des Rechtecks
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
      crc2.font = "10px Courier New ";
      crc2.textAlign = "center";
      crc2.fillText("Streusel", _position.x + 50, _position.y + 20);
    }
  
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
    }
  
    function drawSeat(_position: Vector) {
      crc2.beginPath(); 
      crc2.arc(_position.x, _position.y, 50, 0, 2 * Math.PI); 
      crc2.fillStyle = "grey"; 
      crc2.fill();
      crc2.closePath(); 
    }
  
    function drawTable(_position: Vector) { 
      crc2.beginPath();
      crc2.fillStyle = "grey";
      crc2.fillRect(_position.x, _position.y, 475, 40);
      crc2.closePath();
  
    }
  
    function handleKeyDown1(event: KeyboardEvent): void{
      if(event.key === "1") { 1
        drawSorte1 ({x: 400, y:250}); 
        console.log("Sorte 1")
      }
  
    }
  
    function handleKeyDown2(event: KeyboardEvent): void{
      if(event.key === "2") { 1
        drawSorte2 ({x: 400, y:250}); 
        console.log("Sorte 2")
      }
  
    }
  
    function handleKeyDown3(event: KeyboardEvent): void{
      if(event.key === "3") { 1
        drawSorte3 ({x: 400, y:250}); 
        console.log("Sorte 3")
      }
  
    }
    
  }
  