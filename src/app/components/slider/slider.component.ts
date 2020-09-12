import { Component, OnInit, ViewChild, ElementRef, forwardRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  layer = 0
  languages = [
    {
      level: 5,
      name: 'Angular',
      icon: '../../assets/svg/angular.svg'
    },
    {
      level: 3,
      name: 'ASP.net',
      icon: '../../assets/svg/asp.net.png'
    },
    {
      level: 4,
      name: 'Bootstrap',
      icon: '../../assets/svg/bootstrap.png'
    },
    {
      level: 3,
      name: 'C#',
      icon: '../../assets/svg/c%23.svg'
    },
    {
      level: 3,
      name: 'C++',
      icon: '../../assets/svg/cpp.png'
    },
    {
      level: 4,
      name: 'CSS',
      icon: '../../assets/svg/css.svg'
    },
    {
      level: 5,
      name: 'D.B Design',
      icon: '../../assets/svg/BDdesign.svg'
    },
    {
      level: 4,
      name: 'Git',
      icon: '../../assets/svg/git.png'
    },
    {
      level: 4,
      name: 'HTML',
      icon: '../../assets/svg/html.svg'
    },
    {
      level: 4,
      name: 'Java',
      icon: '../../assets/svg/java.svg'
    },
    {
      level: 5,
      name: 'JavaScript',
      icon: '../../assets/svg/javascript.svg'
    },
    {
      level: 4,
      name: 'MySql',
      icon: '../../assets/svg/mysql.svg'
    },
    {
      level: 4,
      name: 'Python',
      icon: '../../assets/svg/python.png'
    },
    {
      level: 4,
      name: 'Reactjs',
      icon: '../../assets/svg/react-2.svg'
    }
  ]

  @ViewChild('slider_content', { static: false }) slider_content: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  right() {
    if (this.layer > -(this.languages.length-1)*2) {
      this.slider_content.nativeElement.animate([
        { transform: "translateX(" + this.layer + "0%)" },
        { transform: "translateX(" + (this.layer - 2) + "0%)" }
      ], {
        duration: 500,
        fill: 'forwards'
      })
      this.layer = this.layer - 2;
    }
  }

  left() {
    if (this.layer !=0) {
      this.slider_content.nativeElement.animate([
        { transform: "translateX(" + this.layer + "0%)" },
        { transform: "translateX(" + (this.layer + 2) + "0%)" }
      ], {
        duration: 500,
        fill: 'forwards'
      })
      this.layer = this.layer + 2;
    }
  }
}
