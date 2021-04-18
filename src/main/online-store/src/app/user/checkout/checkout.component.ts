import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../models/user/user";
import {Address} from "../../models/user/address";
import {AddressService} from "../../services/user/address.service";
import {PaymentService} from "../../services/user/payment.service";
import {Payment} from "../../models/user/card";
import {CartItemModel} from "../../models/item/cart.mdel";
import {ItemService} from "../../services/item/item.service";
import {Item} from "../../models/item/item";
import {OrderModel} from "../../models/item/order.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  items: Map<number, Item> = new Map<number, Item>();
  public addresses: Address[] = [];
  public cards: Payment[] = [];
  cartItems: CartItemModel[] = [];
  orderItem: OrderModel = new OrderModel();
  user: User;
  loading = true;
  item: Item | undefined = new Item();


  constructor(private itemService: ItemService, private router: Router, private addressService: AddressService, private cardService: PaymentService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(<string>localStorage.getItem('userData'));
    this.getAddresses();
    this.getCards();

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
  }

  onAddCard() {
    this.router.navigate(["/add-card/"]);
  }

  public getCards() {
    this.cardService.getPayments(this.user.id).subscribe(response => {
      this.cards = response;
    })
  }

  public getAddresses() {
    this.addressService.getAddresses(this.user.id).subscribe(response => {
      this.addresses = response;
    })
  }

  onAddAddress() {
    this.router.navigate(["/add-address/"]);
  }

  onDeleteAddress(id: number): void {
    this.addressService.deleteAddress(id).subscribe(response => {
        this.addresses.splice(1, this.addresses.findIndex(i => i.id === response));
      }
    );
  }

  onDeleteCard(id: number): void {
    this.cardService.deletePayment(id).subscribe(response => {
        this.cards.splice(1, this.cards.findIndex(x => x.id === response));
      }
    );
  }

  public getImage(image: string | undefined) {
    return 'data:image/jpeg;base64,' + image;
  }

  public totalAmount(): number {
    let total = 0;
    for (let item of this.cartItems) {
      // @ts-ignore
      total += item.amount * this.items.get(item.id)?.price;
    }
    return Number((Math.round(total * 100) / 100).toFixed(2));
  }

  onDeleteCartItem(id: number): void {
    this.itemService.deleteCartItem(id).subscribe(response => {
        this.cartItems.splice(1, this.cartItems.findIndex(i => i.id === response));
      }
    );
  }

  onReturnToShop() {
    this.router.navigate(["/view-items"]);
  }

  onSuccessPurchase() {
    this.orderItem.total = this.totalAmount();
    this.orderItem.userId = this.user.id;
    for (let item of this.cartItems) {
      this.item = this.items.get(item.id);
      // @ts-ignore
      this.item?.amount = item.amount;
      this.itemService.updatePurchaseAmount(this.item).subscribe();
      this.itemService.deleteCartItem(item.id).subscribe();
    }
    this.itemService.addOrderItems(this.orderItem).subscribe(data => {
      this.router.navigate(["/purchase-successful"]);
    });

  }

}
