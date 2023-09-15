import { Component, OnInit } from '@angular/core';
import { NewProductsType } from '../models/inventory-app/new-products';
import { RevenueType } from '../models/e-commerce/revenue';
import { ProductsType } from '../models/inventory-app/products';
import { SalesType } from '../models/e-commerce/sales';
import { InventoryAppService } from '../services/inventory-app.service';
import { ECommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public eCommerceSales!: SalesType[];
  public inventoryAppProducts!: ProductsType[];
  public value = 'Basic Tee';
  public value1 = '2';
  public value2 = '15.99';
  public value3 = '99';
  public value4 = 'M050';

  constructor(
    private eCommerceService: ECommerceService,
    private inventoryAppService: InventoryAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.inventoryAppService.getProducts().subscribe(data => this.inventoryAppProducts = data);
    this.eCommerceService.getSales().subscribe(data => this.eCommerceSales = data);
  }
}
