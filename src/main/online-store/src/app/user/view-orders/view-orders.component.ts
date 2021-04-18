import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item/item.service";
import {ActivatedRoute} from "@angular/router";
import {OrderModel} from "../../models/item/order.model";

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  orderItems: OrderModel[] = [];
  constructor(private itemService: ItemService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemService.getOrderItems(this.activatedRoute.snapshot.params.id).subscribe( data=>{
      this.orderItems = data;
      console.log(data);
    });
  }

}
