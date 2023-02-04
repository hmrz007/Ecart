import { Component } from '@angular/core';
import { CartService } from 'src/cart.service';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productList: any

  constructor(private api: ApiServiceService,private cart:CartService) { }

  ngOnInit():void{
    this.api.getProduct().subscribe((data)=>{
      this.productList=data

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
        
      });
      
    })

}
addtocart(item:any){
  this.cart.addtoCart(item)


}


















}
