import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portafolio-example1',
  templateUrl: './portafolio-example1.component.html',
  styleUrls: ['./portafolio-example1.component.css']
})
export class PortafolioExample1Component implements OnInit {

  constructor() { }
  @Input() title: string;
  ngOnInit() {
  }

}
