import { Component } from '@angular/core';

@Component({
  templateUrl: './app/Component/petitmoduleComponent/petitmodule.component.html',
  styleUrls:['./app/Component/petitmoduleComponent/petitmodule.component.css']
})

export class petitModuleComponent{

  //propriete
titre:string = "Event Binding";
alert:string = 'tu as clique sur le bouton';
texte :string= 'Clique sur le bouton pour changer le texte';
date:Date;
nombre:number = 1;
nombre2:number = 0;
nombre3:number=0;

//fonction
onAlert = () => { alert(this.alert)};

onTextChange= () => { this.texte = 'Tu as change le texte'};

showDate=()=>{ this.date = new Date()};

incrementerNombre = () => {//this.nombre ++ //this.nombre = this.nombre + 1
this.nombre +=1
this.nombre3 = this.nombre + this.nombre2 }

incrementerNombre2 =()=>{this.nombre2 +=2
this.nombre3 = this.nombre + this.nombre2 }
};
