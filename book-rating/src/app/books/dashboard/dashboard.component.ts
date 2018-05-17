import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  d = new Date();

  books: Book[];
  url: string;

  constructor() {
  }

  ngOnInit() {
    this.url = 'https://angular.schule';

    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen, fortgeschrittene Techniken, ...',
        author: 'Angular-Buch-Team',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        author: 'Facebook',
        rating: 3
      }
    ];
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
    this.updateSortList(book);
    // TODO: HTTP
  }

}
