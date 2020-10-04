import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-tooltip',
  templateUrl: './icon-tooltip.component.html',
  styleUrls: ['./icon-tooltip.component.css']
})
export class IconTooltipComponent implements OnInit {
  @Input() title = "";
  @Input() image = "";
  @Input() url = "";


  visible = false;
  constructor() { }

  ngOnInit() {
  }

  onMouseIn() {
    console.log('aja');
    
    this.visible = true;
  }

  onMouseOut() {
    this.visible = false;
  }


}
