import { Component } from '@angular/core';

import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: BookStoreService) {
  }

  restoreBooks() {
    this.service.restore().subscribe(() => {
      console.log('Restored all books');
    });
  }
}
