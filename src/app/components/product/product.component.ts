import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  public productList:any;
  constructor(private api:ApiService,private cartService:CartService){}
  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
    })
  }

}
