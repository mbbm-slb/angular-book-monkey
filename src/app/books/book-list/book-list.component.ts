import { Component } from '@angular/core';
import { AsyncPipe, NgFor,NgIf } from '@angular/common';

import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
  imports: [
    NgIf, NgFor, AsyncPipe, 
    BookListItemComponent
  ]
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private service: BookStoreService) {
    this.books$ = this.service.getAll();
  }
}
