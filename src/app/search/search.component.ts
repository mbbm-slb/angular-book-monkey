import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject, switchMap, tap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  input$ = new Subject<string>();
  isLoading = false;

  constructor(private service: BookStoreService) {
    this.input$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(term => this.service.getAllSearch(term)),
      tap(() => this.isLoading = false)
    )
    .subscribe(console.log);
  }
}
