import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksComponent} from './component/books/books.component';
import {BookDetailComponent} from './component/book-detail/book-detail.component';
import {BookAddComponent} from './component/book-add/book-add.component';
import {BookEditComponent} from './component/book-edit/book-edit.component';


const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'books/:id',
    component: BookDetailComponent
  }, {
    path: 'create',
    component: BookAddComponent
  },
  {
    path: 'books/:id/edit',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
