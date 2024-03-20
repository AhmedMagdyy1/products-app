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
  cardColor = ['#FF8B64', '#55C2E6', '#FF5E7D', '#F1C75B', '#4BCF82']
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

  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.cardColor.length);
    return this.cardColor[randomIndex];
  }
}
