import { Component } from '@angular/core';

class Langage {
  id: number;
  nom : string;
  interested : boolean;
}

const LANGAGES : Langage[] = [
  {id:1, nom:' Javascript', interested:false},
  {id:3, nom:' Typescript', interested:false},
  {id:4, nom:' Angular 4', interested:false},
  {id:5, nom:' NodeJs', interested:false},
  {id:6, nom:' Nativescript', interested:false}
]

@Component({
  templateUrl: './app/Component/ngStyleComponent/ngstyle.component.html',
  styleUrls: ['./app/Component/ngStyleComponent/ngstyle.component.css']

})

export class ngstyleComponent{
  langages = LANGAGES;

  images: string[] = ['app/image/iconYes.png', 'app/image/iconNo.png'];
  no:string = this.images[1];
  yes:string= this.images[0];
  width:string='20';
  height:string='20';

  setStyles(langage:Langage){
    let styles = {
      //proprieteCss
      'color': langage.interested ? '#000' : '#ccc',
      'background-color': langage.interested ? 'yellow' : 'transparent',
    }
    return styles
  }

  marquerImportant(index:number){
      let langage = this.langages[index];
      langage.interested = true;
  }

  marquerPasImportant(index: number){
    let langage = this.langages[index];
    langage.interested = false;
    console.log(langage.interested)
  }
}
