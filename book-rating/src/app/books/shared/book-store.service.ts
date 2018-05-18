import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> { // TODO: Interface für API-Response anlegen
    return this.http.get<any[]>('https://api.angular.schule/booksss').pipe(
      map(apiBooks => {
        return apiBooks.map(book => {
          return {
            isbn: book.isbn,
            title: book.title,
            description: book.description,
            author: book.authors.join(', '),
            rating: book.rating
          };
        });
      }),
      catchError(err => {
        // Fehler behandeln und "verschlucken"
        // of([...]) erstellt ein neues Observable mit einem gültigen Book-Array
        // im .subscribe() wird das next-Callback gerufen, die Komponente erhält keinen Fehler

        console.error(`Oh no, ${err.status} error occured`);
        return of([
          { isbn: '', title: 'Fehlerbuch', description: 'Es ist ein Fehler aufgetreten', author: '', rating: 1 }
        ]);

        // ODER: Fehler behandeln/transformieren und als Fehler weitergeben
        // throwError() erstellt ein neues Fehler-Observable
        // im .subscribe() wird das error-Callback gerufen, die Komponente erhält den Fehler

        // return throwError(`Oh no, ${err.status} error occured`);
      })
    );
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
