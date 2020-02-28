import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  _product: any

  @Output() notify = new EventEmitter();

  constructor() { }

  get product() {
    return this._product
  }

  @Input()
  set product(product: any) {
    this._product = product
  }

  ngOnInit() {
  }

}