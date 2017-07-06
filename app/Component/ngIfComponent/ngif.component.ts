import { Component } from '@angular/core';

const LANGAGES : string[] = [
  'angular',
  'javascript',
  'typescript',
  'nodejs',
  'python',
  'rails'
]

@Component({
  templateUrl: './app/Component/ngIfComponent/ngif.component.html',
  styleUrls: ['./app/Component/ngIfComponent/ngif.component.css']

})

export class ngifComponent{

langages= LANGAGES;
texteBouton:string = 'cacher';
visible:boolean= true;
langageSelectionnes:string []=[]
nombre:number

  cacherTexte(){
if (this.visible == true){
  this.visible = false
  this.texteBouton = 'afficher'
  }else{
  this.visible = true
  this.texteBouton='cacher'
      }
  }

  ajouterAListe(index: number){
    let langage :string = this.langages[index];
    this.langageSelectionnes.push(langage)
    this.langages.splice(index,1)
  }

  retirerListe(index: number){
    let langage :string = this.langageSelectionnes[index];
    this.langages.push(langage)
    this.langageSelectionnes.splice(index,1);
  }
  retournerCompte(){
    this.nombre=this.langageSelectionnes.length;
    return this.nombre;
  }
  retournerCompte1(){
    this.nombre=this.langages.length;
    return this.nombre;
  }
}
