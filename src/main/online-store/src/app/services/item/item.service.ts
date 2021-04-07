import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../models/item/item";
import {CommentModel} from "../../models/item/comment.model";
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly urls = {
    addItem: '/api/addItem',
    getItems: '/api/getItems',
    findItemById: '/api/findItemById',
    updateItem: '/api/updateItem',
    deleteItem: '/api/deleteItem',
    updateAmount: '/api/updateAmount',
    updatePurchaseAmount: '/api/updatePurchaseAmount',
    updateRating: '/api/updateRating',
    addImage: '/api/addImage',
    addComment: '/api/addComment',
  };


  constructor(private readonly httpClient: HttpClient) {
  }

  public addItem(addItem: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.urls.addItem, addItem);
  }

  public getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.urls.getItems);
  }

  public findItemById(id: number): Observable<Item> {
    const url = `${this.urls.findItemById}/${id}`;
    return this.httpClient.get<Item>(url);
  }

  public updateItem(updateItem: Item): Observable<Item> {
    return this.httpClient.put<Item>(this.urls.updateItem, updateItem);
  }

  public deleteItem(id: number): Observable<number> {
    const url = `${this.urls.deleteItem}/${id}`;
    return this.httpClient.delete<number>(url);
  }

  public updateAmount(updateAmount: Item): Observable<Item> {
    return this.httpClient.put<Item>(this.urls.updateAmount, updateAmount);
  }

  public updatePurchaseAmount(updatePurchaseAmount: Item): Observable<Item> {
    return this.httpClient.put<Item>(this.urls.updatePurchaseAmount, updatePurchaseAmount);
  }

  public updateRating(updateRating: Item): Observable<Item> {
    return this.httpClient.put<Item>(this.urls.updateRating, updateRating);
  }

  public addImage(f: any, productId: number): Observable<any> {
    const url = `${this.urls.addImage}/${productId}`;
    return this.httpClient.post<any>(url, f);
  }

  public addComment(addComment: CommentModel): Observable<CommentModel> {
    return this.httpClient.post<CommentModel>(this.urls.addComment, addComment);
  }

}
