import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private urlBase: string = "http://localhost:8888/"

  constructor(private http: HttpClient) { }
    getCategorie(): Observable<any> {
      let url = this.urlBase+'produits';
      console.log("We are in the service CategorieService with "+url);
      return this.http.get(url);
    }
  
}