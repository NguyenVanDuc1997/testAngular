import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ibook} from './ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private API_URL = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Ibook[]> {
    return this.http.get<Ibook[]>(this.API_URL);
  }

  getBookById(id: number): Observable<Ibook> {
    return this.http.get<Ibook>(`${this.API_URL}/${id}`);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  createBook(book: Partial<Ibook>): Observable<Ibook> {
    return this.http.post<Ibook>(this.API_URL, book);
  }

  updateBook(book: Ibook): Observable<Ibook> {
    return this.http.put<Ibook>(`${this.API_URL}/${book.id}`, book);
  }
}
