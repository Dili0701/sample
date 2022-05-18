import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataInterface } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: HttpClient) { }
  private _url = '../assets/data/data.json';
  getStudents(): Observable<DataInterface[]>{
   return this._http.get<DataInterface[]>(this._url)
}

 
}
