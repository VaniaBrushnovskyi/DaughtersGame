const diceClick = document.querySelector(".dice");
const diceElements = document.querySelectorAll(".dice > div");

diceClick.addEventListener("click", () => {
    // Додає клас для анімації
    if (!diceClick.classList.contains("dice-click")) {
        diceClick.classList.add("dice-click");
    }

    // Випадкове число для вибору елемента
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const selectedDice = document.querySelector(`.dice-${randomNumber}`);

    // Видалити клас .show-dice з усіх елементів
    diceElements.forEach(function(element) {
        element.classList.remove("show-dice");
    });

    // Додає клас .show-dice на вибраний елемент
    if (selectedDice) {
        selectedDice.classList.add("show-dice");
    }

    // Завершення анімації: після завершення анімації прибирати клас dice-click
    diceClick.addEventListener("animationend", () => {
        diceClick.classList.remove("dice-click");
    }, { once: true });
});




