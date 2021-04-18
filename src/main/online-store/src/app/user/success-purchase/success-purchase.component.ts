import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-success-purchase',
  templateUrl: './success-purchase.component.html',
  styleUrls: ['./success-purchase.component.css']
})
export class SuccessPurchaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onReturnToShop() {
    this.router.navigate(["/view-items"]);
  }
}
