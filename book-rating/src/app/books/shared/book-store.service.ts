import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> { // Observable<Book[]>
    return this.http.get<any[]>('https://api.angular.schule/books');
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<any>('https://api.angular.schule/book/' + isbn);
  }

  create(book: Book): Observable<any> {
    const apiBook = {
      isbn: book.isbn,
      title: book.title,
      description: book.description,
      rating: book.rating,
      authors: [book.author]
    };

    return this.http.post('https://api.angular.schule/book', apiBook, { responseType: 'text' });
  }


  getAllStatic(): Book[] {
    return [
      {
        isbn: '000',
        title: 'Angular!',
        description: 'Grundlagen, fortgeschrittene Techniken, ...',
        author: 'Angular-Buch-Team',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React!',
        description: 'Ein anderes Framework',
        author: 'Facebook',
        rating: 3
      }
    ];
  }
}
