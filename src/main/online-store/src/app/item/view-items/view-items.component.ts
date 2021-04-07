import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item/item.service";
import {Item} from "../../models/item/item";

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit{

  public items: Item[];

  constructor(private itemService: ItemService) {
    this.items = [];
  }

  ngOnInit() {
    this.getItems();
  }

  public getItems(): void {
    this.itemService.getItems().subscribe(response => {
      this.items = response;
    },
      error => {
      alert(error.message);
      });

  }

}
