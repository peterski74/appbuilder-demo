import { Component, OnInit } from '@angular/core';
import { NewProductsType } from '../models/inventory-app/new-products';
import { RevenueType } from '../models/e-commerce/revenue';
import { ProductsType } from '../models/inventory-app/products';
import { SalesType } from '../models/e-commerce/sales';
import { InventoryAppService } from '../services/inventory-app.service';
import { ECommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public inventoryAppNewProducts!: NewProductsType[];
  public eCommerceSales!: SalesType[];
  public eCommerceRevenue!: RevenueType[];

  constructor(
    private inventoryAppService: InventoryAppService,
    private eCommerceService: ECommerceService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.inventoryAppService.getNewProducts().subscribe(data => this.inventoryAppNewProducts = data);
    this.eCommerceService.getSales().subscribe(data => this.eCommerceSales = data);
    this.eCommerceService.getRevenue().subscribe(data => this.eCommerceRevenue = data);
  }
}
