let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let user = document.querySelector("#log_out");

function toggleCollapse() {
  sidebar.classList.toggle("active");
  user.classList.toggle("bx-log-in");
  user.classList.toggle("bx-log-out");
}

btn.onclick = function () {
  toggleCollapse();
};
searchBtn.onclick = function () {
  toggleCollapse();
};
log_out.onclick = function () {
  toggleCollapse();
};
