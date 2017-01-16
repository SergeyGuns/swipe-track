

//SWIPE TRACK
var SWIPE_INIT = (LEFT=()=>console.log('left'), RIGHT=()=>console.log('right'), el=document)=> {

  function SWIPE_LEFT (cb) {
    if(cb)
      cb()
  }

  function SWIPE_RIGHT (cb) {
    if(cb)
      cb()
  }

  el.addEventListener('touchstart', handleTouchStart, false);
  el.addEventListener('touchmove', handleTouchMove, false);
  el.addEventListener('touchend', handleTouchEnd, false);     

  const SWIPE_BLOCK_ELEMS = [
    'swipBlock',
    'handle',
    'drag-ruble'
  ]

  let xDown = null;
  let yDown = null; 
  let xDiff = null;
  let yDiff = null;
  let timeDown = null;
  const  TIME_TRASHOLD = 200;
  const  DIFF_TRASHOLD = 130;

  function handleTouchEnd() {

    let timeDiff = Date.now() - timeDown; 
    if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
      if (Math.abs(xDiff) > DIFF_TRASHOLD && timeDiff < TIME_TRASHOLD) {
        if (xDiff > 0) {
          // console.log(xDiff, TIME_TRASHOLD, DIFF_TRASHOLD)
          SWIPE_LEFT(LEFT) /* left swipe */
        } else {
          // console.log(xDiff)
          SWIPE_RIGHT(RIGHT) /* right swipe */
        }
      } else {
        console.log('swipeX trashhold')
      }
    } else {
      if (Math.abs(yDiff) > DIFF_TRASHOLD && timeDiff < TIME_TRASHOLD) {
        if (yDiff > 0) {
          /* up swipe */
        } else {
          /* down swipe */
        }
      } else {
        console.log('swipeY trashhold')
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
    timeDown = null; 
  }
  function containsClassName (evntarget , classArr) {
    for (var i = classArr.length - 1; i >= 0; i--) {
      if( evntarget.classList.contains(classArr[i]) ) {
        return true;
      }
    }
  }
  function handleTouchStart(evt) {
    let touchStartTarget = evt.target;
    if( containsClassName(touchStartTarget, SWIPE_BLOCK_ELEMS) ) {
      return;
    }
    timeDown = Date.now()
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
    xDiff = 0;
    yDiff = 0;

  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;


    xDiff = xDown - xUp;
    yDiff = yDown - yUp;
  }


}

//SWIPE TRACK END
export default SWIPE_INIT