import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {  Router } from '@angular/router'   ;
import { NgForm } from '@angular/forms' ; 

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})


export class InscriptionComponent implements OnInit {
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type'
    })
  }
  
  
   
  utilisateur = {"nom": "", "prenom": "", "email": "", "password": ""} 
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(form: NgForm){
    console.log(form.value.nom);
    console.log(this.utilisateur.email);

    return this.http.post("http://localhost:8888/inscription",
    JSON.stringify(this.utilisateur), this.httpOptions).subscribe(res =>{console.log(res)} );

  } 

}
