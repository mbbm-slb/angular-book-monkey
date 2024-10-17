import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private apiURL = 'https://api5.angular-buch.com';
  //private apiURL = 'https://jbt.et-jar-nischt.com'; // non existing URL to trigger an error 
  private books: Book[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiURL}/books`).pipe(
      catchError(err => {
        console.error(err);
        return of([]);
      })
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiURL}/book/${isbn}`);
  }

  remove(isbn: string): Observable<unknown> {
    return this.http.delete(`${this.apiURL}/book/${isbn}`);
  }

  restore(): Observable<unknown> {
    return this.http.delete(`${this.apiURL}/books`);
  }

  getAllSearch(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiURL}/books/search/${term}`).pipe(
      catchError(err => {
        console.error(err);
        return of([]);
      })
    );
  }

  create(book: Book): Observable<Book> {
    return this.http
      .post<Book>(`${this.apiURL}/books`, book);
  }
}