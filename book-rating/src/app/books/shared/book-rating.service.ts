import { Book } from './book';

export class BookRatingService {
  rateUp(book: Book): Book {
    return {
      ...book,
      rating: Math.min(5, book.rating + 1)
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: Math.max(1, book.rating - 1)
    };
  }
}
