import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';

import { Book } from '../../shared/book';

describe('BookListComponent', () => {
  let component: BookListComponent;

  beforeEach(() => {
    component = new BookListComponent();
  });

  // trivial test
  it('should hold a hardcoded list of 2 books', () => {
    expect(component.books).toHaveSize(2);
  });

  // test subscribes to the event emitter and checks if the book is passed correctly as event payload
  it('should trigger an event on "doSelect"', () => {
    const sentBook = {} as Book;
    let receivedBook: Book | undefined;
    component.selectBook.subscribe(book => {
      receivedBook = book;
    });
    component.doSelect(sentBook);
    expect(receivedBook).toBe(sentBook);  // "toBe" compares references! i.e. variable must be the same object
  });
});