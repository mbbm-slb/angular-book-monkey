import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  input$ = new Subject<string>();

  constructor() {
    this.input$.subscribe(console.log); //the book says "this.input$.subscribe(e => console.log(e))" but it's the same thing only shorter
  }
}
