import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OrderHistory } from '../common/order-history';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl = environment.shopApiUrl + '/orders';
  constructor(private httpClient: HttpClient) { }

  // method one
  getOrderHistory(theEmail: string): Observable<OrderHistory[]> {

    // need to build URL based on the customer email
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${theEmail}`;

    return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl).pipe(
      map(response => response._embedded.orders)
    );
  }

  // method two
  // getOrderHistory(theEmail: string): Observable<GetResponseOrderHistory> {

  //   // need to build URL based on the customer email
  //   const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmail?email=${theEmail}`;

  //   return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl));
  // }
}

interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  }
}
