import {HttpClient} from "@angular/common/http";
import {Address} from "../../models/user/address";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private readonly urls = {
    addAddress: '/api/addAddress',
    deleteAddress: '/api/deleteAddress',
    updateAddress: "/api/updateAddress",
    getAddresses: "/api/getAddresses"
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

  public getAddresses(id: number): Observable<Address[]> {
    const url = `${this.urls.getAddresses}/${id}`;
    return this.httpClient.get<Address[]>(url);
  }

}
