import {HttpClient} from "@angular/common/http";
import {Payment} from "../../models/user/card";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private readonly urls = {
    addPayment: '/api/addPayment',
    deletePayment: '/api/deletePayment',
    getPayments: "/api/getPayments"
  };


  constructor(private readonly httpClient: HttpClient) {
  }

  public addPayment(addPayment: Payment): Observable<Payment> {
    return this.httpClient.post<Payment>(this.urls.addPayment, addPayment);
  }

  public deletePayment(id: number): Observable<number> {
    const url = `${this.urls.deletePayment}/${id}`;
    return this.httpClient.delete<number>(url);
  }

  public getPayments(id: number): Observable<Payment[]> {
    const url = `${this.urls.getPayments}/${id}`;
    return this.httpClient.get<Payment[]>(url);
  }


}
