const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }
  //opcaity value from 0 too 100 and from 1 to 0, load is amount oof time that load to happen
  //loadText.style.opacity = scale(load, 0, 100, 1, 0); tthis will slowly fade out the percentage number when it rech 100%
  //bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; we are mapping 0 to 100 too 30 to 0 when the load is done. '${} is called as expression syntax'
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
// number min and max for in num 0 to 100, outmin opacity 1 and outmax to 0
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
//Now instead of just console logging, obviously we have some stuff in the DOM that we want to work with, that we want to change.
//One is going to be the text. So let's take the loadText and set the innerText value and I'm going to set that to let's use some
//template string here and we want the load, whatever that is at the time, and then just a percentage sign.
// So if we save that, we'll see that this will start counting up to 100.
//but it's going to start fully opaque and then it's going to start to fade out as it loads up.
//So we are going to take the loadText and set the opacity. style.opacity()
//And this is going to be tricky because the opacity value isn't going to be the load value because that goes from 0 to 100.
//Opacity goes from 0 to 1. Right. So it's going to start it or actually, in our case, we want it to start fully opaque.
//So 1 and we want it to go to 0. So we have to map a range of numbers, basically 0 to 100 to going from 1 to 0 in the same amount of time.
//Now, there's actually a stack overflow post that we're going to use here to reference. Link given above
// We want to map 0 to 100 to 1 to 0 for the opacity. It takes in the minimum and the maximum of the in number,
//which in our case is going to be zero and 100. So the load and then out_min is going to be one, opacity one,
//and then out_max is going to be zero. Because we want it to go from solid to disappear.
//And then we are going to grab this function here called scale. And then what we can do is when we're setting this opacity,
// we'll run it through scale and we're going to pass in the number, which is load. So that's basically the amount of time that we want
//this stuff to happen. So when that goes from zero to 100, we want to map opacity from one to zero.
//If we were starting invisible and going to opaque, then we would do zero one, but we're doing it the other way around.
//After saving now we can see it's going to just slowly fade out as it gets closer to 100.
//And stack overflow is great for little functions like this to do a specific task. Now we have to do the same thing for the blur,
//because I don't want the blur to be from 100 pixels. I want it to be 30. 30 is the max. If I set in the CSS, that's the max blur I want to do.
//I don't want to set this to 100 like that. So we have to map the zero to 100 to 30 to zero because we're going to start blurred,
//so we want to start at 30 pixels and bring it down to zero when the load is done.
//So let's take the bg, the background and let's take style we want to do style.filter and we're going to set that to template literal
//and let's say blur and inside here, inside blur we're going to open up our variable syntax or expression syntax
//and we're going to call scale and we want to scale the load just like we did with the opacity and it's going to be from zero to 100
//for that load and then we want the blur to go from 30 to zero in that same amount of time that that load goes from zero to 100.
//So let's save that and So now you can see that the background image is going to go from a blur of 30 pixels down to zero
//in the same amount of time that the load goes from zero to 100. Same thing with the opacity of the number.
