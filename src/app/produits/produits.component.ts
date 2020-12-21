import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { Observable, Subscriber, Subject } from 'rxjs'; 
import { AuthentificationService } from '../connexion/authentification.service';


//on a crée ce dossier ce qui vas nous permettre de faire des services directement sans le faire  a la main 
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
produits: Object[];
user:Subject<string>;

//cheminImage : any= '/SUPERVENTES_SERVER/ventes/src/assets/imageProduits/';

//constructeur est en relation avec le Typescript 
constructor(private produitsService : ProduitsService ,private AuthentificationService: AuthentificationService ){
  this.user=this.AuthentificationService.getUser();
  console.log("Dans le constructeur de Produits");
}

//Elle est appelée quand le composant est initié , est une fonction du framework Angular
ngOnInit() {
  console.log("Dans ngOnInit() du composnat produits");
  this.produitsService.getProduits().subscribe(produits => {
    this.produits = produits ; 
   
  })
  }

  //isStock(produits){
   //console.log("le produit est en stock")
   //this.produits=produits;
    

  //} 
  

}