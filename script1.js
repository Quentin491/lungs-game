const squares = document.querySelectorAll('.square'); //wall of the lungs
const gameImage = document.querySelector('.game-image'); //surgical forceps

const t1 = document.querySelector('.target1');
const t2 = document.querySelector('.target2');
const t3 = document.querySelector('.target3');
const t4 = document.querySelector('.target4');
const t5 = document.querySelector('.target5');
const t6 = document.querySelector('.target6');
const t7 = document.querySelector('.target7');
const t8 = document.querySelector('.target8');

var isPlaying = true;
var score = -1;

function LoseGame() {
  isPlaying = false;
  stopTime();
  openModalLoseEnglish();
}

function WinGame() {
  isPlaying = false;
  stopTime();
  openModalWinEnglish();
}

function checkCollisions() {
  const imageRect = gameImage.getBoundingClientRect();

  squares.forEach(square => {
    const squareRect = square.getBoundingClientRect();

    if (
      imageRect.right >= squareRect.left &&
      imageRect.left <= squareRect.right &&
      imageRect.bottom >= squareRect.top &&
      imageRect.top <= squareRect.bottom
    ) {
      LoseGame();
    }
  });
}

function UpdateScore() {
  score++;
  document.getElementById("score").textContent = `Score : ${score}`;

  if (score == 8) {
    WinGame();
  }
}

UpdateScore();

//---------------------Level button--------------------
var level = 1;
var w;
var h;

function imageSize() {
  if (level == 1) {
    w = 1.5;
    h = 3;
  }
  else if (level == 2) {
    w = 1.75;
    h = 3.5;
  }
  else {
    w = 2.25;
    h = 4.5;
  }

  document.getElementById("surgfor").style.width = w + "vw";
  document.getElementById("surgfor").style.height = h + "vh";
}

imageSize();

function levelValue() {
  if (level == 1) {
    level = 2;
    imageSize();
    document.getElementById("level").textContent = "Level 2";
  } else if (level == 2) {
    level = 3;
    imageSize();
    document.getElementById("level").textContent = "Level 3";
  } else {
    level = 1;
    imageSize();
    document.getElementById("level").textContent = "Level 1";
  }

}

document.getElementById("level").addEventListener("click", levelValue);

//-----------------Start button-------------------
var buttonclicked = false;

function buttonValue() {
  buttonclicked = true;
  buttonColor();
  startTime();
}

document.getElementById("start").addEventListener("click", buttonValue);

function buttonColor() {
  document.getElementById("start").style.backgroundColor = "rgb(120, 253, 117)";
  setTimeout(function () {
    document.getElementById("start").style.backgroundColor = "white";
  }, 1000);
}

// ----------------------Time---------------------------
const time = document.getElementById("time");

var min = 0;
var sec = -1;
var timer = null;

function displayTime() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  var m = min < 10 ? "0" + min : min;
  var s = sec < 10 ? "0" + sec : sec;
  time.innerHTML = m + ":" + s;
}

function startTime() {
  if (timer == null && buttonclicked == true) {
    timer = setInterval(displayTime, 1000);
  }
}

function stopTime() {
  if (timer != null) {
    clearInterval(timer);
    timer = null;
  }
}

displayTime();
startTime();

// ------------------------Numbers-------------------------
function Numbers() {
  displayNumbers();
  NumbersMode();
}

function NoNumbers() {
  NoNumbersMode();
}

document.getElementById("Numbers").addEventListener("click", Numbers);
document.getElementById("NoNumbers").addEventListener("click", NoNumbers);
// ------------------------Display Number--------------------
function displayNumbers() {

  const usedNumbersGroup1 = [];
  const usedNumbersGroup2 = [];

  function generateRandomNumber(group) {
    let min, max;

    if (group === 1) {
      min = 1;
      max = 4;
    } else {
      min = 5;
      max = 8;
    }

    let randomNumber;

    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (
      (group === 1 && usedNumbersGroup1.includes(randomNumber)) ||
      (group === 2 && usedNumbersGroup2.includes(randomNumber))
    );

    if (group === 1) {
      usedNumbersGroup1.push(randomNumber);
    } else {
      usedNumbersGroup2.push(randomNumber);
    }

    return randomNumber;
  }

  function updateTargets() {
    for (let i = 1; i <= 8; i++) {
      const target = document.querySelector(`.target${i}`);
      let randomNumber;

      if (i <= 4) {
        randomNumber = generateRandomNumber(1);
      } else {
        randomNumber = generateRandomNumber(2);
      }

      target.textContent = randomNumber;
    }
  }

  updateTargets();

}
// -------------------How to play ?---------------------
const HowToPlayEnglish = document.getElementById("HowToPlayEnglish");
const HowToPlayFrench = document.getElementById("HowToPlayFrench");
const closeButtonHTP = document.querySelector(".closeHTP");

function openModalHTPEnglish() {
  HowToPlayEnglish.style.display = "block";
}

function openModalHTPFrench() {
  HowToPlayFrench.style.display = "block";
}

closeButtonHTP.addEventListener("click", function () {
  HowToPlayEnglish.style.display = "none";
  HowToPlayFrench.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === HowToPlayEnglish) {
    HowToPlayEnglish.style.display = "none";
  }
  if (event.target === HowToPlayFrench) {
    HowToPlayFrench.style.display = "none";
  }
});

document.getElementById("HTP").addEventListener("click", openModalHTPEnglish);

document.getElementById("languageEnglish").addEventListener("click", function () {
  HowToPlayEnglish.style.display = "none";
  openModalHTPFrench();
});
document.getElementById("languageFrench").addEventListener("click", function () {
  HowToPlayFrench.style.display = "none";
  openModalHTPEnglish();
});

//----------------------New Game-------------------------
function newgame() {
  location.reload(true);
}

// ----------------------Win Pop up----------------------
const modalWinEnglish = document.getElementById("myModalWinEnglish");
const modalWinFrench = document.getElementById("myModalWinFrench");
const closeWin = document.querySelector(".closeWin");

function openModalWinEnglish() {
  modalWinEnglish.style.display = "block";
}

function openModalWinFrench() {
  modalWinFrench.style.display = "block";
}

closeWin.addEventListener("click", function () {
  modalWinEnglish.style.display = "none";
  modalWinFrench.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modalWinEnglish) {
    modalWinEnglish.style.display = "none";
  }
  if (event.target === modalWinFrench) {
    modalWinFrench.style.display = "none";
  }
});

document.getElementById("languageEnglish2").addEventListener("click", function () {
  modalWinEnglish.style.display = "none";
  openModalWinFrench();
});
document.getElementById("languageFrench2").addEventListener("click", function () {
  modalWinFrench.style.display = "none";
  openModalWinEnglish();
});
// ------------------------Lose Pop up----------------------------------
const modalLoseEnglish = document.getElementById("myModalLoseEnglish");
const modalLoseFrench = document.getElementById("myModalLoseFrench");
const closeLose = document.querySelector(".closeLose");

function openModalLoseEnglish() {
  modalLoseEnglish.style.display = "block";
  console.log("test");
}

function openModalLoseFrench() {
  modalLoseFrench.style.display = "block";
}

closeLose.addEventListener("click", function () {
  modalLoseEnglish.style.display = "none";
  modalLoseFrench.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modalLoseEnglish) {
    modalLoseEnglish.style.display = "none";
  }
  if (event.target === modalLoseFrench) {
    modalLoseFrench.style.display = "none";
  }
});

document.getElementById("languageEnglish3").addEventListener("click", function () {
  modalLoseEnglish.style.display = "none";
  openModalLoseFrench();
});
document.getElementById("languageFrench3").addEventListener("click", function () {
  modalLoseFrench.style.display = "none";
  openModalLoseEnglish();
});