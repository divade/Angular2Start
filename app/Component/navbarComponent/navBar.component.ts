import { Component } from '@angular/core';
import {Boutons} from './BtnNavBar/BoutonNavBar';
import {BoutonNavBar} from './BtnNavBar/navBarTable'

@Component({
  selector : 'navBar',
  templateUrl: './app/Component/navBarComponent/navBar.component.html',
  styleUrls: ['./app/Component/navBarComponent/navBar.component.css']

})

export class navBarComponent{
  boutonsComponent = BoutonNavBar;

  image:string[]=['app/image/angular.png'];
  width:string='120';
  height:string='120';

}
