/**************************  TEXT REVEAL  **************************/

function startAnimation(t) {
  sects[t].classList.remove("active");
  sects[t].classList.add("old");
  setTimeout(function () {
    sects[t + 1].classList.remove("invisible");
    sects[t + 1].classList.add("active");
  }, 1000);
}

async function scroll(e) {
  e.preventDefault();
  scrolled += e.deltaY;
  console.log(scrolled);
  if (scrolled > 2000) {
    scrolled = 0;
    for (i = 0; i < sects.length; i++) {
      console.log(sects[i].classList);
      if (sects[i].classList.contains("active")) {
        revealed = i;
      }
    }
    setTimeout(await startAnimation(revealed), 500);
  }
}

let scrolled = 0;
let revealed = 0;
const el = document.querySelector(".text-wrapper");
const sects = document.querySelectorAll("section");

el.onwheel = scroll;

/****************************************************/

/**************************  HORIZONTAL BAR  **************************/

