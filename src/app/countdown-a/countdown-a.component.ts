import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-a',
  templateUrl: './countdown-a.component.html',
  styleUrls: ['./countdown-a.component.css']
})
export class CountdownAComponent implements OnInit, OnDestroy {

  private intervalId = 0;
  message = '';
  remainingTime: number;
  @Input()seconds = 11;

  clearTimer() {
    clearInterval(this.intervalId);
  }
  ngOnInit() {
    this.reset();
    this.start();
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at T -${this.remainingTime} seconds`;
  }
  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `click start button to start the Countdown`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'blast off';
        this.clearTimer();
      } else {
        this.message = `T -${this.remainingTime} seconds andcounting`;
      }
    }, 1000);
  }

  // constructor() { }
}
