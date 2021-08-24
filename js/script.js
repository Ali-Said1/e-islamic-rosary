let Numdiv = document.getElementById("num");

let mainBtn = document.getElementById("Mainbtn");

let decrementBtn = document.getElementById("decrement");

let resetBtn = document.getElementById("reset");

let darkToggle = document.getElementById("darkMode");

let lightToggle = document.getElementById("lightMode");

let htmlElem = document.getElementById('html');
let i = 0;



darkToggle.addEventListener("click", function () {
    htmlElem.setAttribute("data-theme", "dark");
    
    darkToggle.style.display = "none";
    
    lightToggle.style.display = "inline-block";
});


lightToggle.addEventListener("click", function () {
    htmlElem.setAttribute("data-theme", "light");
    
    lightToggle.style.display = "none";
    
    darkToggle.style.display = "inline-block";
});
Numdiv.innerText = i;

mainBtn.addEventListener("click", function () {
  if (i < 33) {
    mainBtn.innerText = "سبحان اللّه";
    ++i;
    Numdiv.innerText = i;
  } else if (i > 32 && i < 66) {
    mainBtn.innerText = "الحمد للّه";
    ++i;
    Numdiv.innerText = i;
  } else if (i > 65 && i <= 98) {
    mainBtn.innerText = "اللّه أكبر";
    ++i;
    Numdiv.innerText = i;
  } else if (i == 99) {
    ++i;
    (Numdiv.innerText = "100"),
      (mainBtn.innerText =
        "لا إلهَ إلاَّ اللَّه وحْدهُ لاَ شَرِيكَ لهُ، لَهُ المُلْكُ، ولَهُ الحمْدُ، وَهُو عَلَى كُلِّ شَيءٍ قَدِيرٌ");
  } else if (i == 100) {
    i = 0;
    Numdiv.innerText = i;
    mainBtn.innerText = "ابدأ";
  }
});

decrementBtn.addEventListener("click", function () {
  if (i > 0) {
    --i;
    Numdiv.innerText = i;
  }
});

resetBtn.addEventListener("click", function () {
  i = 0;
  Numdiv.innerText = i;
  mainBtn.innerText = "ابدأ";
});
