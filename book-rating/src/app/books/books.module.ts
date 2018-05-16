import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookRatingService } from './shared/book-rating.service';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent
  ],
  providers: [
    BookRatingService
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
