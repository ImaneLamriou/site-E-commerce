
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProduitsService } from './produits.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PanierComponent } from './panier/panier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthentificationService } from './connexion/authentification.service';




@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    MenuComponent,
    ConnexionComponent,
    CategorieComponent,
    PanierComponent,
    InscriptionComponent,
    
    //je dois ajouté cathegorie ici
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProduitsService,AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
