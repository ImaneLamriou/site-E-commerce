import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { Observable } from 'rxjs';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories: Object[];
  user : Observable<string>;


  constructor(private produitsService: ProduitsService , private router : Router) { 
    console.log("We are in the consructor of the Category component");
    
  }

  ngOnInit() {
    console.log("I'm in the ngOnInit() of Category component");
    this.produitsService.getCategorie().subscribe(categorie => {
      this.categories = categorie;
      })
    }

  /*produitsParCategorie(categorie){
    this.router.navigate(['/prodiuts',categorie]); 
   }*/
}
