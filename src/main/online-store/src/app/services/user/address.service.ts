import {HttpClient} from "@angular/common/http";
import {Address} from "../../models/user/address";
import {Observable} from "rxjs";
import {Item} from "../../models/item/item";

export class AddressService {

  private readonly urls = {
    addAddress: '/api/addAddress',
    deleteAddress: '/api/deleteAddress',
    updateAddress: "/api/updateAddress"
  };


  constructor(private readonly httpClient: HttpClient) {
  }

  public addAddress(addAddress: Address): Observable<Address> {
    return this.httpClient.post<Address>(this.urls.addAddress, addAddress);
  }

  public deleteAddress(id: number): Observable<number> {
    const url = `${this.urls.deleteAddress}/${id}`;
    return this.httpClient.delete<number>(url);
  }

  public updateAddress(updateAddress: Address): Observable<Address> {
    return this.httpClient.put<Address>(this.urls.updateAddress, updateAddress);
  }


}
