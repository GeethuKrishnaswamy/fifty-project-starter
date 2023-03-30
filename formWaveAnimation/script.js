const labels = document.querySelectorAll(".form-control label");
// we have the innerText. So we're looping through the label, we have the innerText E-m-a-i-l.
//For the first one, we're splitting it into an array which will put each letter in its own item in the array.
//Then we're mapping it to create an array of the letter with a span around it.
//Then we're turning it back into a string. So if I save this now, we don't see any difference here.
//But if I open up my elements tab and I click on the label here, you'll see that.
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
