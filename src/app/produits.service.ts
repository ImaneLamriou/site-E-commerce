import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// on vas l'utilisé dans produits.components.ts
@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private urlBase : string = 'http://localhost:8888/';

  constructor(private http : HttpClient) { }

  getProduits():Observable<any>{  //Les observables prennent en charge la transmission de messages entre les parties de votre application
    let url = this.urlBase+"produits";
    console.log("Dans le service ProduitsService avec"+url);
    return this.http.get(url);
  }
  getCategorie():Observable<any>{
    let url = this.urlBase+"categorie";
    console.log("Dans le service ProduitsService avec"+url);
    return this.http.get(url);
  }
}
