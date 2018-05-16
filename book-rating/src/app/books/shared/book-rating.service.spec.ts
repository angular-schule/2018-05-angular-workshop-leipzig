import { BookRatingService } from './book-rating.service';
import { Book } from './book';

fdescribe('BookRatingService', () => {

  let rs: BookRatingService;
  let book: Book;

  beforeEach(() => {
    rs = new BookRatingService();
    book = {
      isbn: '',
      title: '',
      description: '',
      author: '',
      rating: 3
    };
  });

  it('should increase the rating by 1', () => {
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toBe(4);
  });

  it('should decrease the rating by 1', () => {
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    const ratedBook = rs.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not be allowed to have a rating less than 1', () => {
    book.rating = 1;
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});
