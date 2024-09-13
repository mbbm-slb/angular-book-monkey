import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap, tap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  input$ = new Subject<string>();
  isLoading = false;
  results$: Observable<Book[]>

  constructor(private service: BookStoreService) {
    this.results$ = this.input$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(term => this.service.getAllSearch(term)),
      tap(() => this.isLoading = false)
    );
  }
}
