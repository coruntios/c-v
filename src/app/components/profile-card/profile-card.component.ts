import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  current_item = 0;
  items = 3;
  progresing = ''
  profile_arrow = 'arrow-down'
  direction_change = true
  @ViewChild('container', { static: false }) container: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  change() {
    this.progresing = ''
    // progres start
    setTimeout(() => {
      if (this.current_item == -2)
        this.progresing = 'progresing'
    }, 500)
    // progres end

    if (this.current_item == -(this.items - 2) && this.profile_arrow == 'arrow-down') {
      this.profile_arrow = 'arrow-up'
    } else if (this.current_item == -1 && this.profile_arrow == 'arrow-up') {
      this.profile_arrow = 'arrow-down'
    }

    if (this.current_item == -2) {
      this.direction_change = false
    } else if (this.current_item == 0) {
      this.direction_change = true
    }

    if (this.direction_change) {
      this.addAnimationTocontainer(-1)
    } else {
      this.addAnimationTocontainer(1)
    }
  }

  addAnimationTocontainer(direction) {
    this.container.nativeElement.animate([
      { transform: "translateY(" + this.current_item + "00%)" },
      { transform: "translateY(" + (this.current_item + direction) + "00%)" }
    ], {
      duration: 500,
      fill: 'forwards'
    })
    this.current_item = this.current_item + direction
  }
}

