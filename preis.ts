namespace Ice {

  let counter: number = 0;

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

  function updateCounter(): void {
    const counterElement: HTMLParagraphElement | null = document.querySelector("#Einnahme");
    if (counterElement) {
      counterElement.textContent = `Einnahmen: ${counter} Euro`;
    }
  }

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

}