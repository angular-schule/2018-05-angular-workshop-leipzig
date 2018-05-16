import { BookComponent } from './book.component';
import { Book } from '../shared/book';

fdescribe('BookComponent Simple', () => {
  let component: BookComponent;

  beforeEach(() => {
    component = new BookComponent();
  });

  it('should forward rateUp call to the RatingService', () => {
    let ratingWasCalled = false;

    component.rs = {
      rateUp: (book: Book) => {
        ratingWasCalled = true;
        return book;
      },
      rateDown: (book: Book) => book,
    };


    component.rateUp();


    expect(ratingWasCalled).toBe(true);
  });

  it('should throw "rate" event for rateUp', () => {
    expect(true).toBe(false);
  });
});
