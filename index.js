const toggle = document.querySelectorAll(".toggle");

toggle.forEach((item) => {
  item.addEventListener("click", () => {
  const parent = item.parentElement;
  const plusIcon = item.querySelector(".plus");
  const minusIcon = item.querySelector(".minus");
parent.classList.toggle("active")
if (parent.classList.contains("active")) {
    plusIcon.style.display = "none";
    minusIcon.style.display = "block";
} else {
    plusIcon.style.display = "block";
    minusIcon.style.display = "none";
}
  });
});
