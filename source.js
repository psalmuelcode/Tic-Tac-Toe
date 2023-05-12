const board = document.querySelector(".game");
const squares = document.querySelectorAll(".cell");
const restartButton = document.querySelector(".restartBtn");

let player = "X";

squares.forEach((square) => {
  square.addEventListener("click", handleClick);
});

function handleClick(event) {
  const square = event.target;
  if (square.textContent !== "") {
    return;
  }
  square.textContent = player;
  if (checkForWin()) {
    alert(`${player} wins!`);
    restartButton();
  } else if (checkForDraw()) {
    alert("It's a draw!");
    restartButton();
  } else {
    player = player === "X" ? "O" : "X";
  }
}

function checkForWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningCombos.some((combo) => {
    const [a, b, c] = combo;
    return (
      squares[a].textContent === player &&
      squares[b].textContent === player &&
      squares[c].textContent === player
    );
  });
}

function checkForDraw() {
  return [...squares].every((square) => {
    return square.textContent !== "";
  });
}

restartButton.addEventListener("click", function () {
  squares.forEach((square) => {
    square.textContent = "";
  });
  player = "X";
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});
