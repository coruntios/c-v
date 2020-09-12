import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-level-circles',
  templateUrl: './level-circles.component.html',
  styleUrls: ['./level-circles.component.css']
})
export class LevelCirclesComponent implements OnInit {
  @Input() levels: any;
  circles = ['circle', 'circle', 'circle', 'circle', 'circle']
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.circles.length; i++) {
      if (i < this.levels) {
        this.circles[i] = this.circles[i] + ' selected'
      }
    }
  }

}
