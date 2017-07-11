import { Component } from '@angular/core';

@Component({
  templateUrl: './app/Component/carrouselComponent/carrousel.component.html',
  styleUrls: ['./app/Component/carrouselComponent/carrousel.component.css']
})

export class CarrouselComponent{

  
      //propriete
    images : string[]=['app/image/goku.png','app/image/goku1.jpg','app/image/goku2.jpg','app/image/goku3.jpg','app/image/goku4.jpg',];
    image :string = this.images[0];
    width:string='555';
    height:string='300';
    index:number=0;

    //fonction
  animerCarousel(){
    console.log(this.index)
    if(this.index == this.images.length - 1){
      this.index = 0;
      this.image = this.images[this.index]
    }else{
      this.index++;
      this.image = this.images[this.index]
  }
  }
};
