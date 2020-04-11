import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palestrante',
  templateUrl: './palestrante.component.html',
  styleUrls: ['./palestrante.component.css']
})
export class PalestranteComponent implements OnInit {

  titulo = 'Palestrantes';
  
  constructor() { }

  ngOnInit() {
  }

}
