function displayTopNav() {
  const topNav = document.getElementById("top-nav-list");
  if (topNav.className === "top-nav") {
    topNav.className += " responsive-nav";
  } else {
    topNav.className = "top-nav";
  }
}

function myFunc() {
  const h2 = document.getElementById("h");
  const p = document.getElementById("p");

  const h2Lines = Math.floor(h2.clientHeight / 64);
  const pLines = Math.floor(p.clientHeight / 34);

  p.style.marginBottom =
    "calc(6.65rem + " + (h2Lines - 2) * 64 + "px - " + (pLines - 3) * 34 + "px)";
}

window.onload = myFunc();
window.addEventListener("resize", myFunc);


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  }); 
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));