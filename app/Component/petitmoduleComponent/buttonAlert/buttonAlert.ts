import { Component } from '@angular/core';

@Component({
  selector: 'buttonAlert',
  templateUrl: './app/Component/petitmoduleComponent/buttonAlert/buttonAlert.html'
})

export class buttonAlert {
  alert:string = 'tu as clique sur le bouton';
  onAlert = () => { alert(this.alert)};

}
