import {Component, OnInit} from '@angular/core';
import {Ibook} from '../../ibook';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList: Ibook[] = [];

  constructor(private book: BookService) {
  }

  ngOnInit(): void {
    this.book.getBooks().subscribe(result => (this.bookList = result), error => this.bookList = []);
  }

  deletePost(i) {
    if (confirm('Are you sure?')) {
      const book = this.bookList[i];
      this.book.deletePost(book.id).subscribe(() => {
        this.bookList = this.bookList.filter(t => t.id !== book.id);
      });
    } else {
      return 0;
    }
  }
}
