import { Component } from '@angular/core';

class Langage {
  id:number;
  nom: string;
  date:Date;
  interested: boolean;
}

const LANGAGES : Langage[] = [
  {id: 1, nom: 'angular', date: new Date('October 12, 2016 13:14:00'), interested: false},
  {id: 2, nom: 'Javascript', date:new Date('November 30, 2016 20:14:00'), interested: false},
]

@Component({
  templateUrl: './app/Component/datePipeComponent/datePipe.component.html',
  styleUrls: ['./app/Component/datePipeComponent/datePipe.component.css']

})

export class datePipeComponent{

  langages = LANGAGES;
  input: string;

  setStyles(langage: Langage){
    let styles = {
      // CSS property names
      'color': langage.interested ? '#000' : '#ccc',
      'background-color': langage.interested ? 'yellow' : 'transparent'
    };
    return styles;
  }

  ajouterLangage(texte:string){
    let nouveau = {id:this.langages.length + 1, nom:texte, date: new Date(), interested:false}
    this.langages.push(nouveau)
  }

  marquerImportant(index:number){
    let langage = this.langages[index];
    langage.interested = false;
  }
  marquerPasImportant(index:number){
    let langage = this.langages[index];
    langage.interested = true;
  }
}
