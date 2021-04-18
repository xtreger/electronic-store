import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item/item.service";
import {Item} from "../../models/item/item";
import {ActivatedRoute} from "@angular/router";
import {CommentModel} from "../../models/item/comment.model";
import {User} from "../../models/user/user";
import {CartItemModel} from "../../models/item/cart.mdel";
import {MatSnackBar} from "@angular/material/snack-bar";



@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  item: Item = new Item();
  comment: CommentModel = new CommentModel();
  user: User;
  loading = true;
  cartItem: CartItemModel = new CartItemModel();


  constructor(private itemService: ItemService, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.user = JSON.parse(<string>localStorage.getItem('userData'));
    this.itemService.findItemById(this.activatedRoute.snapshot.params.id).subscribe(data => {
      this.item = data;
      this.loading = false;
    });
    this.cartItem.amount = 1;
  }

  public getImage(image: string|SVGImageElement) {
    return 'data:image/jpeg;base64,' + image;
  }


  onSubmitComment() {
    this.comment.userName = this.user.name;
    this.comment.itemId = this.item.id;
    this.item.comments.push(this.comment);
    this.itemService.updateItem(this.item).subscribe(data =>
    {
      this.item = data;
    });
  }

  onAddToCart() {
    this.cartItem.userId = this.user.id;
    this.cartItem.itemId = this.item.id;
    this.itemService.addToCart(this.cartItem).subscribe(data =>{
      this.snackBar.open('Item has been added to cart successfully.', 'Close', {duration: 3000})
    })
  }
}
