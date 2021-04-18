import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user/user";
import {Router} from "@angular/router";
import {AddressService} from "../../services/user/address.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  user: User;
  public addAddressForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address1: new FormControl('', Validators.required),
    address2: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    county: new FormControl('', Validators.required),
    eirCode: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    userId: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private addressService: AddressService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(<string>localStorage.getItem('userData'));
    this.addAddressForm.get('userId')?.setValue(this.user.id);
  }

  onAdd() {
    this.addressService.addAddress(this.addAddressForm.value).subscribe( data=>{
      if (data){
        this.router.navigate(['/checkout'])
      }
    });
  }

}
