import { Component } from '@angular/core';

@Component({
  templateUrl: './showDate/showDate.html'
})

export class textChange {
  date:Date;
  showDate=()=>{ this.date = new Date()};

}
