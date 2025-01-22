import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  let service: BookStoreService;
  let httpMock: {
    get: (url: string) => Observable<Book[]>;
  };

  beforeEach(() => {

    const expectedBooks: Book[] = [
      { isbn: '111', title: 'Book 1', authors: [] },
      { isbn: '222', title: 'Book 2', authors: [] }
    ];

    httpMock = {
      get: () => of(expectedBooks)
    };

    spyOn(httpMock, 'get').and.callThrough();

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpMock }
      ]
    });

    service = TestBed.inject(BookStoreService);
  });

  it('should GET a list of all books', () => {
    let receivedBooks!: Book[]; // the exclamation mark tells TypeScript that we will initialize the variable later. This is valid for testing.
    service.getAll().subscribe(b => receivedBooks = b);
    expect(receivedBooks).toHaveSize(2);
    expect(receivedBooks[0].isbn).toBe('111');
    expect(receivedBooks[1].isbn).toBe('222');
    expect(httpMock.get).toHaveBeenCalledOnceWith('https://api5.angular-buch.com/books');
  });
});