import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {

  @ViewChild('imgs', { static: false }) imgs: ElementRef;
  @ViewChild('titles', { static: false }) titles: ElementRef;

  places = [
    {
      img: '../../../assets/slider/01.png',
      text: 'UNITED STATES'
    },
    {
      img: '../../../assets/slider/02.png',
      text: 'JAPAN'
    },
    {
      img: '../../../assets/slider/5118.jpg',
      text: 'FRANCE'
    },
    {
      img: '../../../assets/slider/04.png',
      text: 'NORWAY'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addAnimation(this.imgs)
    this.addAnimation(this.titles)
  }

  addAnimation(element: ElementRef) {
    var current_item = 0;
    var direction = -1;
    setInterval(() => {
      let len = this.places.length -1
      if (-len == current_item) {
        direction = 1
      } else if (current_item >= 0) {
        direction = -1
      }
      element.nativeElement.animate([
        { transform: "translateY(" + current_item + "00%)" },
        { transform: "translateY(" + (current_item + direction) + "00%)" }
      ], {
        duration: 2000,
        fill: 'forwards'
      })
      current_item = current_item + direction
    }, 4000);
  }

}
