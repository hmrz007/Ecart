import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { CartService } from 'src/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  productList: any
  totalItem:number=0

  constructor(private api: ApiServiceService,private cart:CartService) { }

  ngOnInit():void{
    this.api.getProduct().subscribe((data)=>{
      this.productList=data
      
    })
    this.cart.getProduct().subscribe((res:any)=>{
      this.totalItem=res.length

    })

  }





















}
