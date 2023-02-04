import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  } from "module";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  

  getProduct(){
    return this.http.get("https://fakestoreapi.com/products")
  }



}
