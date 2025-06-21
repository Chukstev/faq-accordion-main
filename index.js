// target the toggle div
const toggle = document.querySelectorAll(".toggle");

// get the individual toggles
toggle.forEach((item) => {
  // add a click event to each toggle
  item.addEventListener("click", () => {
    // this targets the list element
    const parent = item.parentElement;
    //   get the plus icon
    const plusIcon = item.querySelector(".plus");
    //   get the minus icon
    const minusIcon = item.querySelector(".minus");
    //   set the list to be active on toggle
    parent.classList.toggle("active");
    if (parent.classList.contains("active")) {
      // what happens when the toggle is active or not is determined by this line
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  });
});
 