import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item/item.service";
import {Item} from "../../models/item/item";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  selectedFile: File;
  item: Item;

  public addItemForm = new FormGroup({
    title: new FormControl('', Validators.required),
    manufacturer: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required)
  });

  constructor(private itemService: ItemService, private router: Router) {

  }

  ngOnInit(): void {

  }

  onFileChange(event: Event) {
    //@ts-ignore
    this.selectedFile = event.target.files[0];
    console.log( this.selectedFile)
  }

  onAdd() {
    const imgData = new FormData();
    imgData.append('imageFile', this.selectedFile);
    this.itemService.addItem(this.addItemForm.value).subscribe(data => {
      this.item = data;
      this.itemService.addImage(imgData, this.item.id).subscribe(data => {
        this.item.image = data;
        this.router.navigate(["/view-items"]);
        this.addItemForm.reset();
      });
    })
  }
}
