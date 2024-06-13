import { Component, EventEmitter, Output } from '@angular/core';

import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];
  @Output() selectBook = new EventEmitter<Book>();

  constructor(private service: BookStoreService) {
    this.books = this.service.getAll();
  }

  doSelect(book: Book) {
    this.selectBook.emit(book);
  }
}
