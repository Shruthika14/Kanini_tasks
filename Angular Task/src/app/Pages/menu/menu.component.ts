import { Component,OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private api:OrderDetailsService){}
  // foodData:any;
  food!:any;
  
ngOnInit(): void {
    // this.foodData=this.service.foodDetails;
   this.getall();
}
private getall():void{
  this.api.getdetails().subscribe(result=>{
    this.food=result
  })
}
}
