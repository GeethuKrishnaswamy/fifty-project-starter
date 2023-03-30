const boxes = document.querySelectorAll(".box");
//const boxes and document.query, we want querySelectorAll() because there's more than one.
//So this will put it into an array or a NodeList. And then we want to fire off an event when we scroll.
//So on the window we're going to add an event listener of scroll.
//And when that happens, we'll have a function called checkBoxes because we want to check the positioning of each box.
window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 4) * 3;
  //.getBoundingClientRect() willretuen the obeject with smallest rectangle which contains the entire element

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
