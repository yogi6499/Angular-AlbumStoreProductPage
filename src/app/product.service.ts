import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private __albumUrl='../assets/album.json';

  constructor(private _http: Http) { }
  public getAlbum(id:number){
    this.__albumUrl= this._http.get(this.__albumUrl).map((response => {
      this.__albumUrl=response.json();
    }));
  }
}
