import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
import { Book } from '../../shared/book';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
      schemas: [NO_ERRORS_SCHEMA] // Shallow Unit Test. BookListItem wird nicht gerendert. Alternativ muss man BookListItem hier einbinden. Siehe Kap. 8
    }).compileComponents();
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should trigger an event on click', () => {
    let receivedBook: Book | undefined;

    component.selectBook.subscribe(book => {
      receivedBook = book;
    });

    fixture.nativeElement.querySelector('bm-book-list-item').click();
    expect(receivedBook?.title).toBe('Tierisch gut kochen');
  });
});