import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item/item";
import {User} from "../../models/user/user";
import {CartItemModel} from "../../models/item/cart.mdel";
import {ItemService} from "../../services/item/item.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Map<number, Item> = new Map<number, Item>();
  user: User;
  cartItems: CartItemModel[] = [];
  loading = true;


  constructor(private router: Router, private itemService: ItemService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(<string>localStorage.getItem('userData'));
    this.itemService.getCartItems(this.user.id).subscribe(data => {
      this.cartItems = data;
      for (let item of this.cartItems) {
        this.itemService.findItemById(item.itemId).subscribe(data => {
          this.items.set(item.id, data);
        });
        console.log(this.items);
      }
      this.loading = false;

    });
    // this.itemService.getItems().subscribe(data =>{
    //   data.forEach(item =>this.items.set(item.id,item));
    // })
  }

  public getImage(image: string | undefined) {
    return 'data:image/jpeg;base64,' + image;
  }

  public total(): number {
    let total = 0;
    for (let item of this.cartItems) {
      // @ts-ignore
      total += item.amount * this.items.get(item.id)?.price;
    }
    return Number((Math.round(total * 100) / 100).toFixed(2));
  }

  onDeleteCartItem(id: number): void {
    this.itemService.deleteCartItem(id).subscribe(response =>{
        this.cartItems.splice(this.cartItems.findIndex(i => i.id === response), 1);
      }
    );
  }

  onReturnToShop() {
    this.router.navigate(["/view-items"]);
  }

  onCheckout() {
    this.router.navigate(["/checkout"]);
  }

}
