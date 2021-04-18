import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user/user";
import {UserService} from "../../services/user/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PaymentService} from "../../services/user/payment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  user: User;
  public addCardForm = new FormGroup({
    id: new FormControl('', Validators.required),
    cardNo: new FormControl('', Validators.required),
    cardNoDisplay: new FormControl('', Validators.required),
    expireMonth: new FormControl('', Validators.required),
    expireYear: new FormControl('', Validators.required),
    expireDate: new FormControl('', Validators.required),
    cvv: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private paymentService: PaymentService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(<string>localStorage.getItem('userData'));
    this.addCardForm.get('userId')?.setValue(this.user.id);
  }

  onAdd() {
    this.addCardForm.get('expireDate')?.setValue(this.addCardForm.get('expireMonth')?.value + '/' +this.addCardForm.get('expireYear')?.value);
    this.paymentService.addPayment(this.addCardForm.value).subscribe(data => {
      if (data) {
        this.router.navigate(['/checkout']);
      }
    });
  }

}
