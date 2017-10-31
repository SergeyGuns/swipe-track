###how use
[CodePen Example](http://codepen.io/Guns/pen/wgebpB)
```js

let text = window.text

function handleLeft() {
  text.innerHTML = '<='
}
function handleLeft2() {
  text.innerHTML = :+1:
}
function handleRight () {
  text.innerHTML = '=>'
}
function handleUp() {
  text.innerHTML = '^'
}
function handleDown() {
  text.innerHTML = 'v'
}

const OPTIONS = {
  'left': handleLeft,
  'right': handleRight,
  'up': handleUp,
  'down': handleDown
}


const swipeTrack = new SwipeTrack(OPTIONS)

or 

const swipeTrack = new SwipeTrack({
  "left": handleLeft,
  "right": handleRight,
  "element": document.querySelector('.block')
})
```
