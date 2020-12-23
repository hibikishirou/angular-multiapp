import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = [1, 2, 3, 4];
  constructor() { }

  getData(): Observable<any> {
    return of(this.data);
  }

  createData(): Observable<any> {
    const i = this.data.length + 1;
    this.data.push(i);
    return of(true);
  }
}
