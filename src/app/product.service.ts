import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: Http) { }
  private __albumUrl:string='../assets/album.json';
  public getAlbum(id:number){
    this.__albumUrl= this._http.get(this.__albumUrl).map((response => {
       response.json();
    }));
  }
}
