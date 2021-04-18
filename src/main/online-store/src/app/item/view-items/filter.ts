import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../../models/item/item";


@Pipe({
  name: 'filterItems',
  pure: false
})
export class FilterItems implements PipeTransform {
  transform(items: Item[], filterValue: any): Item[] {
    if (!items || !filterValue) {
      return items;
    }

    const regexp = new RegExp(filterValue, 'i');
    return items.filter(item => regexp.test(item.title) || regexp.test(item.manufacturer));
  }
}
