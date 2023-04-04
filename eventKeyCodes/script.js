const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
<div class="key">
${event.key === " " ? "Space" : event.key}
<small>event.key</small>
</div>
<div class="key">
${event.keyCode}
<small>event.keyCode</small>
</div>
<div class="key">
${event.code}
<small>event.code</small>
</div>
`;
});
//in the above code we are what we'll do is first of all bring in insert. So document.getElementById() and we want to bring in the
//id of insert and And we're going to take insert and say innerHTML because that's how we can insert HTML
//then we are putting the HTML coode inside the back tick to gett the result
//So this event object will give us whenever we press the key this event will tell uss which key we pressed
//line 6 say if e.key is pressed space that is empty string then print space else print the entered key code
