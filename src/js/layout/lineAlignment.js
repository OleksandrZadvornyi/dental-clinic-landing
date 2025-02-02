export function alignLines() {
  const h2 = document.getElementById("h");
  const p = document.getElementById("p");

  const h2Lines = Math.floor(h2.clientHeight / 64);
  const pLines = Math.floor(p.clientHeight / 34);

  p.style.marginBottom =
    "calc(6.65rem + " +
    (h2Lines - 2) * 64 +
    "px - " +
    (pLines - 3) * 34 +
    "px)";
}
