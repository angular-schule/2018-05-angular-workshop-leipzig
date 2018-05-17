import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookRatingService } from './shared/book-rating.service';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponent,
    BookDetailsComponent
  ],
  providers: [
    BookRatingService
  ]
})
export class BooksModule { }
