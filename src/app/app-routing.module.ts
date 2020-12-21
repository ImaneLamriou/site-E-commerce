import { NgModule } from '@angular/core';
import { CategorieComponent } from './categorie/categorie.component';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';



const routes: Routes =[{ path:'produits','component':ProduitsComponent},
                       { path:'connexion','component':ConnexionComponent},
                       { path:'categorie', 'component' : CategorieComponent},
                       { path : "login", component : ConnexionComponent},
                       { path : 'inscription' , component : InscriptionComponent},
                       { path : 'panier' , component : PanierComponent} 

                       


                       
                      




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
