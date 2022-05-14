import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'KEY';
  private url: string = 'https://api.giphy.com/v1/gifs/search';
  private limit: number = 10;

  private _historial: string[] = [];

  private historialState: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private resultState: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(
    private http: HttpClient
  ){}

  get historialState$() {
    return this.historialState.asObservable();
  }

  get resultState$() {
    return this.resultState.asObservable();
  }

  buscarGifs(query: string) {

    if (!this._historial.includes(query.toLocaleLowerCase())) {
      this._historial.unshift(query.toLocaleLowerCase());
      this._historial = this._historial.splice(0, 10);
    }

    this.historialState.next([...this._historial]);

    this.http.get(`${this.url}?q=${query}&limit=${this.limit}&api_key=${this.apiKey}`)
      .subscribe((resp : any) => this.resultState.next(resp.data));
  }
}
