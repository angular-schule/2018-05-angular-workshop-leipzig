import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { Output } from '@angular/core';
import { map, filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  @Output() create = new EventEmitter<Book>();

  bookForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      author: new FormControl('', Validators.required)
    });

    // import { map, filter, distinctUntilChanged, debounceTime } from 'rxjs/operators';
    this.bookForm.valueChanges.pipe(
      map(value => value.isbn),
      filter(isbn => isbn.length >= 3),
      distinctUntilChanged(),
      debounceTime(1000)
    )
    .subscribe(value => console.log(value));
  }

  logForm() {
    console.log(this.bookForm);
  }

  submitForm() {
    const value = this.bookForm.value;

    const newBook: Book = {
      isbn: value.isbn,
      title: value.title,
      description: value.description,
      author: value.author,
      rating: 1
    };
    this.create.emit(newBook);
    this.bookForm.reset();
  }
}
