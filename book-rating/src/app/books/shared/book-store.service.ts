import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor() { }

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
