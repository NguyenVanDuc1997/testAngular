import {Component, OnInit} from '@angular/core';
import {Ibook} from '../../ibook';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Ibook;
  bookForm: FormGroup;

  constructor(private route: ActivatedRoute, private bookService: BookService,
              private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required, ],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => {
        this.book = next;
        this.bookForm.patchValue(this.book);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  onSubmit(){
    if (this.bookForm.valid) {
      const { value } = this.bookForm;
      const data = {
        ...this.book,
        ...value
      };
      this.bookService.updateBook(data).subscribe(
        next => {
          this.router.navigate(['/blog']);
        },
        error => console.log(error)
      );
    }
  }

}
