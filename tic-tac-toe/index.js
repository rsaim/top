// console.log("Creating tic-tac-toe");

// Para to display messages
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".board .cell");
const startButton = document.querySelector(".start");


const Player = function (name, mark) {
    this.name = name;
    this.mark = mark;
    return { name, mark };
};

const Game = function (player1, player2) {
    let currentPlayer = player1;
    let playerWon;
    let gameOver = false;

    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // Init game
    const displayTurn = () => {
        message.innerHTML = `${currentPlayer.mark}'s turn`;
    };

    const checkDraw = () => {
        let allset = true;
        for (const cell of cells) {
            if (!cell.isSelected) {
                allset = false;
            }
        }
        return allset;
    }

    const checkWon = () => {
        // Can improve this to generalize
        for (let comb of winCombinations) {
            let playerWon = true;
            console.info(`Trying ${comb}`);
            for (const idx of comb) {
                if (cells[idx].innerHTML != currentPlayer.mark) {
                    console.debug(`cells[${idx}].innerHTML != currentPlayer.mark`);
                    console.debug(`${cells[idx].innerHTML} != ${currentPlayer.mark}`);
                    playerWon = false;
                    break;
                }
            }
            if (playerWon) {
                console.info(`DONE: ${comb}`);
                gameOver = true;
                return playerWon
            }
        }
        // return playerWon;
    };

    const handleCellClick = (c, e) => {
        if (c.isSelected || gameOver) {
            return;
        }
        console.log(`${e.target.dataset.index} clicked`);
        c.isSelected = currentPlayer.mark;
        e.target.dataset.index = currentPlayer.mark;
        e.target.innerHTML = currentPlayer.mark;
        // Should be checked before changing the turn
        if (checkWon()) {
            startButton.innerHTML = "Start a new game!";
            message.innerHTML = `${currentPlayer.mark} WON`;
            return;
        }
        if (checkDraw()) {
            console.log("Draw");
            startButton.innerHTML = "Start a new game!";
            message.innerHTML = `DRAW!`;
            gameOver = true;
            return;
        }
        // Change the turn
        currentPlayer = player1 == currentPlayer ? player2 : player1;
        displayTurn();
    };

    const initEventListeners = () => {
        console.info("Adding event listeners on cells");
        cells.forEach(c => {
            c.addEventListener("click", e => handleCellClick(c, e));
        });
    };

    const resetDisplay = () => {
        cells.forEach((c, i) => {
            c.dataset.index = i + 1;
            c.isSelected = false;
            c.innerHTML = "";
            c.style.background = "#db8585";
        });
    };

    const init = () => {
        console.log(`Initializing game`);
        resetDisplay();
        initEventListeners();
    };

    return { init };
};



startButton.addEventListener("click", (e) => {
    const player1 = Player("Saim", "X");
    const player2 = Player("Emma", "Y");

    const game = new Game(player1, player2);
    game.init();
    e.target.innerHTML = "Restart";
});