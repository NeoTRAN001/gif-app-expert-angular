import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  result: any[] = [];

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
    this.gifsService.resultState$
      .subscribe(data => this.result = data);
  }

}
