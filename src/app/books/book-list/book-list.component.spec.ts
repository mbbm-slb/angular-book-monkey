import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookListComponent } from './book-list.component';
//import { TestBookListItemComponent } from '../test-book-list-item/test-book-list-item.component';

import { Book } from '../../shared/book';

import { Component, Input } from '@angular/core';

@Component({
selector: 'bm-book-list-item',
template: ''
})
export class TestBookListItemComponent {
  @Input() book?: Book;
}

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent, TestBookListItemComponent],
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