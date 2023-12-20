import { Directive, EventEmitter, Output,OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appPress]'
})
export class PressDirective implements OnInit{

  @Output() press = new EventEmitter();
  pressGesture = {
    name: 'press',
    enable: false,
    interval: 25,
  };
  pressTimeout = null;
  isPressing: boolean = false;
  lastTap = 0;
  tapCount = 0;
  tapTimeout = null;

  constructor() { }

  ngOnInit(): void {
    this.pressGesture.enable = true;
  }

  @HostListener('touchstart',['$event'])
  @HostListener('touchend',['$event'])
  onPress(event){
    // console.log(event);

    if (!this.pressGesture.enable) {
      return;
    } // Press is not enable, don't do anything.
    this.handlePressing(event.type);
  }

  private handlePressing(type){ //touchend or touchstart
    if (type == 'touchstart') {
      this.pressTimeout = setTimeout(() =>{
        this.isPressing = true;
        this.press.emit('start')
      },this.pressGesture.interval);
    }else if (type == 'touchend') {
      clearTimeout(this.pressTimeout);
      if (this.isPressing) {
        this.press.emit('end');
        this.resetTaps();
      }

      setTimeout(() => this.isPressing = false, 50);
    }
  }

  private resetTaps(){
    clearTimeout(this.tapTimeout); //clear the old timeout
    this.tapCount = 0;
    this.tapTimeout = null;
    this.lastTap = 0;
  }
}
