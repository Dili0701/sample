import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { numsInterface } from './nums';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumService {

  constructor(private _http: HttpClient) { }
  private _urll = '../assets/data/nums.json';

  getNum(): Observable<numsInterface[]>{
      return this._http.get<numsInterface[]>(this._urll);
  }
}
