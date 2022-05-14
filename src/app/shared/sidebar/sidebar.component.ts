import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  historial: string[] = [];

  constructor(
    private gifsService: GifsService
  ) { }

  ngOnInit(): void {
    this.gifsService.historialState$
      .subscribe((data: string[]) => this.historial = data);
  }

}
