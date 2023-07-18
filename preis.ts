namespace Ice {

  let counter: number = 0;

  // key events füür tasten 1, 2 und 3 festlegen 
 
  window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "1") {
        increaseCounter1();
      } else if (event.key === "2") {
        increaseCounter2();
      } else if (event.key === "3") {
        increaseCounter3();
      }
    });
  });

  // wenn Taste 1, 2 oder 3 gedrückt wird dann erhöt sich der Counter um die deklarierte nummmer 
  function increaseCounter1(): void {
    counter += 3;
    updateCounter();
  }

  function increaseCounter2(): void {
    counter += 1;
    updateCounter();
  }

  function increaseCounter3(): void {
    counter += 4;
    updateCounter();
  }
 
  // Counter wird geupdatet 
  function updateCounter(): void {
    let counterElement: HTMLParagraphElement | null = document.querySelector("#Einnahme");
    if (counterElement) {
      counterElement.textContent = `Einnahmen: ${counter} Euro`;
    }
  }

};