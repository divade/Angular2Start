import { Component } from '@angular/core';

@Component({
  templateUrl: './incrementNumber.html'
})

export class incrementNumber {
  nombre:number = 1;
  nombre2:number = 0;
  nombre3:number=0;
  incrementerNombre = () => {//this.nombre ++ //this.nombre = this.nombre + 1
  this.nombre +=1
  this.nombre3 = this.nombre + this.nombre2 }

  incrementerNombre2 =()=>{this.nombre2 +=2
  this.nombre3 = this.nombre + this.nombre2 }
}
