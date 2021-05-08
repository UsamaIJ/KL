import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private _http: HttpClient) { }

  // Need to provide parameters to filter the results
  getProducts(params: any = null) {
    return this._http.get('products', { params: this.constructParameters(params) }).toPromise();
  }
  
  // Constructing Parameters //
  private constructParameters(params) {
    let _params = {};
    Object.entries(params).map((item) => {
      if (item[1] != null)
        _params[item[0]] = item[1];
    })
    return _params;
  }
  // Constructing Parameters //
}
