import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../../models/item/item";
import {ItemService} from "../../services/item/item.service";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: Item = new Item();
  loading = true;


  constructor(private router: Router, private itemService: ItemService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemService.findItemById(this.activatedRoute.snapshot.params.id).subscribe(data => {
      this.item = data;
      this.loading = false;
    });
  }

  onCancelNav() {
    this.router.navigate(["/view-items"]);
  }

  onUpdateItem() {
    this.itemService.updateItem(this.item).subscribe(data =>
    {
      this.item = data;
    });

    this.router.navigate(["/view-items"]);
  }
}
