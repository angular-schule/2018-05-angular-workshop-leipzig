import { BookComponent } from './book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

fdescribe('BookComponent Simple', () => {
  let component: BookComponent;

  beforeEach(() => {
    component = new BookComponent();
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
    expect(true).toBe(false);
  });
});
