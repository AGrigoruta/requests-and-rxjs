import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestServiceService {
  private testNumber: number = 0;
  private testSubject: BehaviorSubject<number> = new BehaviorSubject<number>(
    this.testNumber
  );

  constructor(private http: HttpClient) {}

  getDogImage(): Observable<any> {
    return this.http.get<any>('https://dog.ceo/api/breeds/image/random').pipe(
      tap((resp) => console.log(resp)),
      catchError((error: HttpErrorResponse) =>
        throwError(() => {
          console.error(error);
          return new Error(error.message);
        })
      )
    );
  }

  incrementTestNumber() {
    this.testNumber = this.testNumber + 1;

    if (this.testNumber === 20) {
      this.testNumber = 0;
      this.testSubject.error(new Error('e prea mare'));
      return;
    }
    this.testSubject.next(this.testNumber);
  }

  decrementTestNumber() {
    this.testNumber = this.testNumber - 1;
    this.testSubject.next(this.testNumber);
  }

  setTestNumber(num: number) {
    this.testNumber = num;
    this.testSubject.next(this.testNumber);
  }

  getTestSubject(): Observable<number> {
    return this.testSubject.asObservable();
  }
}
