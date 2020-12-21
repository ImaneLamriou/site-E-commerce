import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router , ActivatedRoute } from '@angular/router';
import { AuthentificationService } from './authentification.service'





@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

   utilisateur = {"email":"" ,"password":""};
   message: "";


  constructor(private authentificationService : AuthentificationService, private router : Router){ } 
  

    ngOnInit(){
      console.log("Dans ngOnInit() du composant authentificationService");
    }
    

    onSubmit() {
      console.log("On a cliqué sur botton submit")
      console.log(this.authentificationService.verificationConnexion(this.utilisateur));
    this.authentificationService.verificationConnexion(this.utilisateur).subscribe(response => {
      this.message = response;
      console.log("afficher la reponse")

      if (!response){
        console.log("Connexion pas reussie mauvais identifiant!");
        setTimeout(() => {this.router.navigate(['/login']);}, 1000);
      } else if (response['email'] && response['password']){
        console.log("Connexion reussie", response);
        this.authentificationService.connect(this.utilisateur.email);
        this.router.navigate(['/']); //pour que la page s'ouvre sans la liste de produit apparent 
        setTimeout(() => {this.router.navigate(['/']);}, 1000);
  
    }

} );

    }
  }