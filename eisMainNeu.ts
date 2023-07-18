/* 
Name: <Marie Eckl>
Matrikelnummer: <272409>
Semester: <MKB2>
Datum: <18.07.2023>
Quellen: <Github Jirka, Developer Mozilla, ChatGPT, Aufgabe(n) aus EIA1, Code Pia Schwer aus Semester>

*/

namespace Ice {

  window.addEventListener("load", handleLoad);

  export let imageData: ImageData;

  let kundenArray: Kunden[] = [];

  export let crc2: CanvasRenderingContext2D;

  window.addEventListener("keydown", handleKeyDown1)
  window.addEventListener("keydown", handleKeyDown2)
  window.addEventListener("keydown", handleKeyDown3)

  function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = canvas.getContext("2d")!;

    drawBackground();

    imageData = crc2.getImageData(0, 0, 800, 600);

    createKundi();
    window.setInterval(moveKundi, 10);
    choseIceCream();

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
        kunde.move(1 / 600);
        if (kunde.position.x >= crc2.canvas.width) {
          kunde.position.x = -50; // bewegt Kundi nach rechts
        }
      } else {
        if (!kunde.stopped) {
          kunde.velocity = new Vector(20, 0);
          kunde.stopped = true;
        }

        kunde.stopTimer += 1 / 600; 
        if (kunde.stopTimer >= 10) { // checkt ob 10 sekunden vorbei sind
          if (kunde.position.x <= crc2.canvas.width + 1000) {
            kunde.position.x += 1; // bewegt Kundi nach rechts außerhalb des Canvas
          } else {
            kunde.reachedSeat = false;
            kunde.stopped = false;
            kunde.position.x = 10; // bewegt Kundi nach außen auf der linken Seite
            choseIceCream(); 
          }
        }
      }
      kunde.draw();
    }

    requestAnimationFrame(moveKundi);
  }

// generiert random case für den Eiswunsch des Kundis
  function choseIceCream(): void {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

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

  
// wenn die Taste 1, 2 oder 3 gedrückt wird, dann wird die jeweillige sorte gezeichnet (eigentlich) und in der Konsole ausgegeben
  function handleKeyDown1(event: KeyboardEvent): void {
    if (event.key === "1") {
      drawSorte1({ x: 400, y: 250 });
      console.log("Hier ist ein gemischter Eisbecher.")
    }

  }


  function handleKeyDown2(event: KeyboardEvent): void {
    if (event.key === "2") {
      drawSorte2({ x: 400, y: 250 });
      console.log("Hier ist ein Kirscheis in der Waffel.")
    }

  }


  function handleKeyDown3(event: KeyboardEvent): void {
    if (event.key === "3") {
      drawSorte3({ x: 400, y: 250 });
      console.log("Hier ist ein Bananasplit.")
    }

  }

}; 

