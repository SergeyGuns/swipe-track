###how use
[CodePen Example](http://codepen.io/Guns/pen/wgebpB)
```js


let text = window.text
function handleLeft() {
  text.innerHTML = '=>'
}
function handleRight () {
  text.innerHTML = '<='
}




const OPTIONS = {
  "left": handleLeft,
  "right": handleRight
}

const swipeTrack = new SwipeTrack(OPTIONS)

or 

const swipeTrack = new SwipeTrack({
  "left": handleLeft,
  "right": handleRight,
  "element": document.querySelector('.block')
})
```
