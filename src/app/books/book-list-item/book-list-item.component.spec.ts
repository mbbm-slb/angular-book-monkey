import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookListItemComponent } from './book-list-item.component';
import { IsbnPipe } from '../shared/isbn.pipe';

describe('BookListItemComponent', () => {
  let component: BookListItemComponent;
  let fixture: ComponentFixture<BookListItemComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListItemComponent, IsbnPipe],
      imports: [
        RouterTestingModule.withRoutes([
          { path: ':isbn', children: [] }
        ])
      ]
    }).compileComponents();
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(BookListItemComponent);
    component = fixture.componentInstance;
    // Buch zum Anzeigen
    component.book = {
      isbn: '111',
      title: 'Book 1',
      authors: [],
      thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png'
    };
    fixture.detectChanges();
  });

  it('should navigate to details page by ISBN', async () => {
    fixture.nativeElement.querySelector('img').click();
    await fixture.whenStable();
    expect(location.path()).toEqual('/111');
  });
});