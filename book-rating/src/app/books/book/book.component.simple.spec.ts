import { BookComponent } from './book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('BookComponent Simple', () => {
  let component: BookComponent;

  beforeEach(() => {
    component = new BookComponent({} as BookRatingService); // WORKAROUND!
  });

  it('should forward rateUp call to the RatingService', () => {

    component.rs = {
      rateUp: (book: Book) => book
    } as BookRatingService;

    spyOn(component.rs, 'rateUp').and.callThrough();

    component.rateUp();

    expect(component.rs.rateUp).toHaveBeenCalled();

  });

  it('should throw "rate" event for rateUp', () => {
    component.rs = {
      rateUp: (book: Book) => book // 1.) oder hier konkretes Buch erzeugen
    } as BookRatingService;

    component.book = {
      isbn: '', author: '', title: '', description: '', rating: 5
    };

    component.rate.subscribe((_book: Book) => {
      expect(_book).toBe(component.book); // 2.) und dann hier auf konkretes Buch von oben prüfen
    });

    component.rateUp();

  });
});
