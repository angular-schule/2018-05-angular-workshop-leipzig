import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  // rs = new BookRatingService();

  @Input() book: Book;
  @Output() rate = new EventEmitter<Book>();

  constructor(public rs: BookRatingService) {  }

  ngOnInit() {
  }

  rateUp() {
    const newBook = this.rs.rateUp(this.book);
    this.rate.emit(newBook);
  }

  rateDown() {
    const newBook = this.rs.rateDown(this.book);
    this.rate.emit(newBook);
  }

}
