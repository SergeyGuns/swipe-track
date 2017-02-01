class SwipeTrack {
  constructor(options = {}) {
    this.__debug               = options.debug || false                 // bool
    this.__leftSwipe           = options.left || console.log('left')    //func
    this.__rightSwipe          = options.right || console.log('right')  //func
    this.__upSwipe             = options.up || console.log('up')        //func
    this.__downSwipe           = options.down || console.log('down')    //func
    this.__trackElement        = options.element || document            //htmlNode
    this.__swipeBlockClassName = options.swipeBlockers || 'swipe__block' // array ['block' , swipeBlock]
    this.__blockBy             = options.blockBy || 'exact' // or 'closest'
    this.__xDown               = null;
    this.__yDown               = null;
    this.__xDiff               = null;
    this.__yDiff               = null;
    this.__timeDown            = null;
    //filter parametrs time and gesture swipe( фильстрации случайных движений по длине и времени )
    this.__TIME_TRASHOLD       = 200;
    this.__DIFF_TRASHOLD       = 130;
    this.addEvents()
  }



  containsClassName(evntarget, classArr) {
    if (this.__blockBy == 'exact'){
      return classArr.some(className => evntarget.classList.contains(className))
    } else if (this.__blockBy == 'closest'){
      return classArr.some(className => evntarget.closest('.' + className) != null)
    } else {
      return false;
    }
  }

  addEvents() {
    this.__trackElement.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
    this.__trackElement.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
    this.__trackElement.addEventListener('touchend', this.handleTouchEnd.bind(this), false);
  }


  removeEvents() {
    this.__trackElement.removeEventListener('touchstart', this.handleTouchStart.bind(this), false);
    this.__trackElement.removeEventListener('touchmove', this.handleTouchMove.bind(this), false);
    this.__trackElement.removeEventListener('touchend', this.handleTouchEnd.bind(this), false);
  }


  handleTouchEnd() {

    let timeDiff = Date.now() - this.__timeDown;
    if (Math.abs(this.__xDiff) > Math.abs(this.__yDiff)) { /*most significant*/
      if (Math.abs(this.__xDiff) > this.__DIFF_TRASHOLD && timeDiff < this.__TIME_TRASHOLD) {
        if (this.__xDiff > 0) {

          this.__leftSwipe() /* left swipe */

        } else {

          this.__rightSwipe() /* right swipe */

        }
      } else {
        console.log('swipeX trashhold')
      }
    } else {
      if (Math.abs(this.__yDiff) > this.__DIFF_TRASHOLD && timeDiff < this.__TIME_TRASHOLD) {
        if (this.__yDiff > 0) {

          this.__upSwipe() /* up swipe */

        } else {

          this.__downSwipe() /* down swipe */

        }
      } else {
        console.log('swipeY trashhold')
      }
    }
    /* reset values */
    this.__xDown = null;
    this.__yDown = null;
    this.__timeDown = null;
  }




  handleTouchStart(evt) {
    let touchStartTarget = evt.target;
    if (this.containsClassName(touchStartTarget, this.__swipeBlockClassName)) {
      return;
    }
    this.__timeDown = Date.now()
    this.__xDown = evt.touches[0].clientX;
    this.__yDown = evt.touches[0].clientY;
    this.__xDiff = 0;
    this.__yDiff = 0;

  }


  handleTouchMove(evt) {
    if (!this.__xDown || !this.__yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;


    this.__xDiff = this.__xDown - xUp;
    this.__yDiff = this.__yDown - yUp;
  }

  swipe(direction = 'left') {
    switch (direction) {
      case 'right':
        this.__rightSwipe();
        break;
      case 'left':
        this.__leftSwipe();
        break;
      case 'up':
        this.__upSwipe();
        break;
      case 'down':
        this.__downSwipe();
        break;
    }
  }

}
