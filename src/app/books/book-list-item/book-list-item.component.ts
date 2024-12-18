import { Component, Input } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Book } from '../../shared/book';
import { IsbnPipe } from '../../shared/isbn.pipe';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.css',
  standalone: true,
  imports: [
    NgIf, NgFor, RouterLink, 
    IsbnPipe
  ]
})
export class BookListItemComponent {
  @Input() book?: Book;
}
