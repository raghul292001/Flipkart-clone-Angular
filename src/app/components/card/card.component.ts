import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  public productList:any;
   constructor(private api:ApiService,private cartService:CartService){}
    ngOnInit(): void {
      this.api.getProduct().subscribe(res=>{
        this.productList=res;
        this.productList.forEach((a:any) => {
          Object.assign(a,{quantity:1,toatal:a.price})
          
        });
      })      
    }
    addToCart(item:any){
      this.cartService.addtoCart(item);

    }

}
