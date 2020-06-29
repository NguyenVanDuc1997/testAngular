import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService, private route: Router) {
  }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required, ],
    });
  }

  onSubmit() {

    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.bookService.createBook(value)
        .subscribe(next => {
         // this.postList.unshift(next);
          this.bookForm.reset({
            title: '',
            author: '',
            description: '',
          });
          this.route.navigate(['/books']);
        }, error => console.log(error));
    }
  }

}
