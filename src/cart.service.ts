import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem:any=[]
  productList=new BehaviorSubject<any>([])

  constructor() { }


  getProduct(){
    return this.productList.asObservable()
  }
  setProduct(product:any){
    this.cartItem.push(product)
    this.productList.next(product)
  }

  addtoCart(product:any){
    this.cartItem.push(product)
    this.productList.next(this.cartItem)
    this.getTotalPrice()
    console.log(this.cartItem);
    

  }
  getTotalPrice():number{
    let grandTotal=0
    this.cartItem.map((a:any)=>{
      grandTotal+=a.total
    })
    return grandTotal
  }

  removeCartItem(product:any){
    this.cartItem.map((a:any,index:any)=>{
      if(product.id==a.id){
        this.cartItem.splice(index,1)
      }
    })
    this.productList.next(this.cartItem)

  }

  removeAllCart(){
    this.cartItem=[]
    this.productList.next(this.cartItem)
  }












}
