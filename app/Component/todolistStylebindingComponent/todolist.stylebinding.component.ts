import { Component } from '@angular/core';

class Langage {
  id: number;
  nom : string;
  finish : boolean;
}

const LANGAGES : Langage[] = [
  {id:1, nom:'Learn Javascript', finish:false},
  {id:3, nom:'Learn Typescript', finish:false},
  {id:4, nom:'Learn Angular 4', finish:false},
  {id:5, nom:'Learn NodeJs', finish:false},
  {id:6, nom:'Learn Nativescript', finish:false}
]

@Component({
  templateUrl: './app/Component/todolistStylebindingComponent/todolist.stylebinding.component.html',
  styleUrls: ['./app/Component/todolistStylebindingComponent/todolist.stylebinding.component.css']

})

export class todoListStylebindingComponent{
  langages = LANGAGES;

  surligner = (index:number) => {
this.langages[index].finish = (this.langages[index].finish == false ? this.langages[index].finish = true : this.langages[index].finish =false)
  }
}
