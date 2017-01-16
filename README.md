```js
	//how use
import SWIPE_INIT from './swipeTrack.js'
function SWIPE_LEFT () {
  navigation.left()
}

function SWIPE_RIGHT () {
  navigation.right()
}

//arg1 = func,arg2 = func, arg3 = htmlNode
SWIPE_INIT(SWIPE_LEFT, SWIPE_RIGHT, document)
```
