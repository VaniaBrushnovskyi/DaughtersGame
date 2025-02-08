"use strict";
const steps = document.querySelectorAll('.step');
const player1 = document.getElementById('player1'); 
const player2 = document.getElementById('player2'); 

// Поточний гравець (1 - гравець 1 / 2 - гравець 2)
let currentPlayer = 1; 

// Позиції гравців
let player1Position = 0; 
let player2Position = null;

const startPlayer1 = document.querySelector('.section-1__start_p1');
const startPlayer2 = document.querySelector('.section-1__start_p2');

steps.forEach(step => {
    step.addEventListener('click', function () {
        let currentPlayerElement;
        let currentPlayerPosition;
        let currentPlayerClass;
        let currentPlayerId;
        
        if (currentPlayer === 1) {
            currentPlayerElement = player1;
            currentPlayerPosition = player1Position;
            currentPlayerClass = "player-1";
            currentPlayerId = "player-1";
        } else {
            currentPlayerElement = player2;
            currentPlayerPosition = player2Position;
            currentPlayerClass = "player-2";
            currentPlayerId = "player-2";
        }
        // Видаляю фішку з минулого степа
        if (currentPlayerPosition !== null) {
            const previousStep = document.querySelector(`.step-${currentPlayerPosition}`);
            const previousPlayer = previousStep ? previousStep.querySelector(`#player-${currentPlayer}`) : null;
            if (previousPlayer) {
                previousPlayer.remove();
            }
        }
        // Видаляю фішку з старта
        if (currentPlayer === 1 && startPlayer1.querySelector('#player-1')) {
            startPlayer1.querySelector('#player-1').remove();
        } else if (currentPlayer === 2 && startPlayer2.querySelector('#player-2')) {
            startPlayer2.querySelector('#player-2').remove();
        }
        // Створюю нову фішку для поточного гравця
        const player = document.createElement('span');
        player.classList.add(currentPlayerClass);
        player.setAttribute('id', currentPlayerId);
        // Додав фішку на поточну клітинку
        this.appendChild(player);
        // Атрибут data-jump
        const jumpTo = this.getAttribute('data-jump');
        let newStep;

        if (jumpTo) {
            // Якщо є data-jump, переміщаю з затримкою
            newStep = document.querySelector(`.step-${jumpTo}`);

            setTimeout(() => {
                // Видаляю фішку з поточної клітинки
                player.remove();
                // Оновлення позиції гравця
                if (currentPlayer === 1) {
                    player1Position = parseInt(jumpTo); // Оновлення позиції гравця 1
                } else {
                    player2Position = parseInt(jumpTo); // Оновлення позиції гравця 2
                }
                // Додав фішку на нову клітинку
                newStep.appendChild(player);
                // Переключаю хід на іншого гравця
                currentPlayer = currentPlayer === 1 ? 2 : 1;
            }, 500);
        } else {
            // Якщо data-jump відсутній, переміщаю без затримки
            if (currentPlayer === 1) {
                player1Position = parseInt(this.classList[1].split('-')[1]);
            } else {
                player2Position = parseInt(this.classList[1].split('-')[1]);
            }
            // Переключаю хід на іншого гравця
            currentPlayer = currentPlayer === 1 ? 2 : 1;
        }
    });
});
