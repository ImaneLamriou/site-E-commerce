import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Subject ,BehaviorSubject, observable } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators' 
import { InscriptionComponent } from '../inscription/inscription.component';






//pour les problemes de cors
const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  user:Subject <string> = new BehaviorSubject <string>(undefined);
  private urlBase : string = "http://localhost:8888";


  constructor(private http:HttpClient) { }
  getUser(){return this.user ;}
  
connect(data:string){this.user.next(data);}

disconnect(){this.user.next(null);}

verificationConnexion(identifiants): Observable <any>{
  let res = this.http.post(this.urlBase+'/membres/connexion',JSON.stringify(identifiants),httpOptions);
console.log(res)
return res;}
};



 