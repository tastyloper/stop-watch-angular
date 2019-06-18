import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  template: `
    <div class="stop-watch">
      <div class="display">{{textMinute}}:{{textSecond}}:{{textMillisecond}}</div>
      <button class="control" (click)="stopwatch()">{{btnText}}</button>
    </div>
  `,
  styles: [`
    .stop-watch {
      font-family: 'Source Code Pro', monospace;
      text-align: center;
      font-size: 3em;
      padding: 30px;
    }
    .control {
      width: 300px;
      padding: 5px;
      margin-top: 15px;
      font-size: 36px;
      font-weight: bold;
      border: 2px solid #f44336;
      border-radius: 4px;
      cursor: pointer;
      outline: none;
    }
    .control:hover {
      background: #f44336;
      color: aliceblue;
    }
  `]
})
export class StopwatchComponent {
  btnText = 'Start';
  millisecond = 0;
  second = 0;
  minute = 0;
  interval;
  textMillisecond  = '00';
  textSecond = '00';
  textMinute = '00';

  stopwatch() {
    if (this.btnText === 'Start') {
      this.btnText = 'Stop';
      this.interval = setInterval(() => {
        this.millisecond += 1;
        if (this.millisecond > 99) {
          this.millisecond = 0;
          this.second += 1;
        }
        if (this.second > 59) {
          this.second = 0;
          this.minute += 1;
        }
        this.textMinute = this.minute < 10 ? '0' + this.minute : this.minute + '';
        this.textSecond = this.second < 10 ? '0' + this.second : this.second + '';
        this.textMillisecond = this.millisecond < 10 ?'0' + this.millisecond : this.millisecond + '';
      }, 10);
    } else {
      this.btnText = 'Start';
      clearInterval(this.interval);
    }
  }
}
