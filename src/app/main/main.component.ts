import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  title1 = "Sliders y Animaciones de Alto Calibre, sin librerias de Terceros."
  title2 = "Pagina Web informativa modular con su propio manager y API REST.\nwww.boletoaereo.com"
  constructor() { }

  ngOnInit() {
  }

}
