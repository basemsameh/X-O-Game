let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newGameBtn = document.querySelector("#new-game");
let restartBtn = document.querySelector("#restart");
let messageBtn = document.querySelector("#message");

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

let count = 0;

const disableBtn = () => {
  btnRef.forEach(e => { e.disabled = true });
  popupRef.classList.remove("hide");
}

const draw = () => {
  disableBtn();
  messageBtn.innerHTML = `&#x1F60E; <br> Its Draw`
}

const winFunction = (letter) => {
  if (letter === "X") {
    messageBtn.innerHTML = `&#x1F389; <br> " X " Wins`;
  } else {
    messageBtn.innerHTML = `&#x1F389; <br> " O " Wins`;
  }
}

const winChecker = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerHTML,
      btnRef[i[1]].innerHTML,
      btnRef[i[2]].innerHTML
    ]
    if (element1 !== "" && element2 !== "" && element3 !== "") {
      if (element1 === element2 && element2 === element3) {
        disableBtn();
        winFunction(element1);
      }
    }
  }
}

let xTurn = true;

btnRef.forEach(ele => {
  ele.onclick = () => {
    if (xTurn) {
      ele.textContent = "X";
      xTurn = false;
      ele.disabled = true;
    } else {
      ele.textContent = "O";
      xTurn = true;
      ele.disabled = true;
    }
    count += 1;
    if (count === 9) {
      draw();
    }
    winChecker();
  }
})

function restart() {
  popupRef.classList.add("hide");
  btnRef.forEach(e => {
    e.disabled = false;
    e.textContent = "";
  })
}

restartBtn.onclick = () => { restart() };
newGameBtn.onclick = () => { restart() };