import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  d = new Date();

  books: Book[] = [];
  url: string;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.url = 'https://angular.schule';

    this.bs.getAll().subscribe(books => {
      this.books = books;
    },
    err => console.error(err));
  }

  updateSortList(book: Book) {
    const cleanedList = this.books.filter(
      b => b.isbn !== book.isbn
    );

    this.books = [...cleanedList, book].sort(
      (a, b) => b.rating - a.rating
    );
  }

  addBook(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.updateSortList(book);
    });
  }

}
