import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Book } from './book';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(() => {

    const expectedBooks: Book[] = [
      { isbn: '111', title: 'Book 1', authors: [] },
      { isbn: '222', title: 'Book 2', authors: [] }
    ];

    // stub HttpClient just having a get() method returning an observable with books
    const httpStub = {
      get: () => of(expectedBooks)  // the "real" get() has a set of parameters but we don't need them ...
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpStub } // ... and there is no type checking here between the stub and the real HttpClient
      ]                                             // During runtime there just has to be a method with the correct name and return type 
    });                                             // This means, our stub is just good enoug fot the test

    service = TestBed.inject(BookStoreService);
  });

  it('should GET a list of all books', () => {
    let receivedBooks!: Book[]; // the exclamation mark tells TypeScript that we will initialize the variable later. This is valid for testing.
    service.getAll().subscribe(b => receivedBooks = b);
    expect(receivedBooks).toHaveSize(2);
    expect(receivedBooks[0].isbn).toBe('111');
    expect(receivedBooks[1].isbn).toBe('222');
  });
});