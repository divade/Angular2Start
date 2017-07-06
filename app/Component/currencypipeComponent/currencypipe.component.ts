import { Component } from '@angular/core';

class Livre{
  nom: string;
  prix:number;
}

const LIVRES : Livre[] = [
  {nom:'angular 2 fondamentaux', prix:20.29},
  {nom: 'javascript pour debutants', prix: 45.00},
  {nom: 'apprendre python', prix:49.99}
]

@Component({
  templateUrl: './app/Component/currencypipeComponent/currencypipe.component.html',
  styleUrls: ['./app/Component/currencypipeComponent/currencypipe.component.css']
})

export class currencyPipeComponent{
  livres = LIVRES;
  total : number;

  supprimerListe(index: number){
    this.livres.splice(index,1);
  }

  ajouterListe(titre:string, price:number){
    let nouveauLivre = {nom: titre, prix : price}
    this.livres.push(nouveauLivre);
  }

  calculerTotal():number {
    let sum:number=0;

    for (var i = 0; i<=this.livres.length - 1; i++){
      let price = this.livres[i].prix;
      sum = sum + price;
    }
    return sum
  }
}
