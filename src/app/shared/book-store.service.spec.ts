
import { BookStoreServiceOld } from './book-store.service';

describe('BookStoreService', () => {

  let service: BookStoreServiceOld;

  beforeEach(() => {
    service = new BookStoreServiceOld();
  });

  it('should hold a hardcoded list of 2 books', () => {
    const books = service.getAll();
    expect(books).toHaveSize(2);
  });
});