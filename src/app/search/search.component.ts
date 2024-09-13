import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject } from 'rxjs';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  input$ = new Subject<string>();

  constructor() {
    this.input$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(console.log);
  }
}
