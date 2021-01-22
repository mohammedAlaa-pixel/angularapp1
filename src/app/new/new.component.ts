import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  addToCart(){
    this.noDataFound=false;
  }
  userName:string="mohammed alaa";
  onSale:boolean=true;
  noDataFound:boolean=true;

  friends:string[]=
  [
      "mohammed", "ahmed" , "ali" 
  ]




  constructor() { }

  ngOnInit(): void {
  }

}
