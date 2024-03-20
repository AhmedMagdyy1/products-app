import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/core/interfaces/products';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts:Products[]= []
  constructor(private _productsService:ProductsService){}
  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts():void{
    this._productsService.getProducts().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allProducts = res
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
