import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from'@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private param: ActivatedRoute,private service:OrderDetailsService){}
  getMenuId:any;
  menuData:any;
  popup(){
    alert("Your Order Placed Successfully!");
  }
  ngOnInit(): void {

   
//     this.getMenuId =this.param.snapshot.paramMap.get('id');
//     console.log(this.getMenuId,'getmenu');
//     if(this.getMenuId)
//     {
// this.menuData =this.service.foodDetails.filter((value)=>{
//   return value.id ==this.getMenuId;
// })
//     }
    

}
}