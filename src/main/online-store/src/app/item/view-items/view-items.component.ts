import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item/item.service";
import {Item} from "../../models/item/item";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit{

  public items: Item[] = [];
  loading = true;

  constructor(public userService: UserService, private itemService: ItemService, private router: Router) {

  }

  ngOnInit() {
    this.getItems();
  }

  public getItems(): void {
    this.itemService.getItems().subscribe(response => {
      this.items = response;
      this.loading = false;

    },
      error => {
      alert(error.message);
      });

  }

  public getImage(image: string|SVGImageElement) {
    return 'data:image/jpeg;base64,' + image;
  }

  public onEditItem(item:Item): void {
    this.router.navigate(["/edit-item/"+ item.id]);
  }

  onDeleteItem(id: number): void {
      this.itemService.deleteItem(id).subscribe(response =>{
        this.items.splice(1,this.items.findIndex(i => i.id === response))
      }
      );
  }

  onViewItem(id: number) {
    this.router.navigate(["/item-page/"+ id]);
  }
}
