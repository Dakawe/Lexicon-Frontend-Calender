let currentM = new Date().getMonth();
let currentY = new Date().getFullYear();

function backwards() {
  currentM -= 1;
  if (currentM < 0) {
    currentM = 11;
    currentY--;
  }
  addDays(currentM, currentY);
}
function forwards() {
  currentM += 1;
  if (currentM > 11) {
    currentM = 0;
    currentY++;
  }
  addDays(currentM, currentY);
}

function addDays(m, y) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let section = document.getElementById("day");
  let month = document.getElementById("txt-month");
  let year = document.getElementById("txt-year");

  let monthStartDay = [6, 0, 1, 2, 3, 4, 5][new Date(y, m, 1).getDay()];

  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  let today = new Date().getDate();

  month.innerText = months[m].toLowerCase();
  year.innerText = y;

  let saturday = 6,
    sunday = 7;

  for (var i = 1; i <= 35; i++) {
    let calenderStart = new Date(y, m, 0 - monthStartDay + i).getDate();
    let mCheck = new Date(y, m, 0 - monthStartDay + i).getMonth();

    var p = document.createElement("p");
    var t = document.createElement("p");
    p.textContent = calenderStart;

    if (i % saturday == 0) {
      p.classList.add("weekend");
      saturday += 7;
    } else if (i % sunday == 0) {
      p.classList.add("weekend");
    }

    if (mCheck != m) {
      p.classList.add("outofscope");
    }

    if ((calenderStart == today) & (m == new Date().getMonth()) & (y == new Date().getFullYear())) {
      t.textContent = today;
      p.textContent = "";
      t.classList.add("today");
      p.appendChild(t);
    }

    section.appendChild(p);
  }
}
