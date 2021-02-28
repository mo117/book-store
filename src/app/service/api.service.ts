import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
// API file to connecting the API from server
export class APiService {

  baseurl = environment.baseUrl;
  httpOptions: any;
  constructor(private http: HttpClient) { };

  logIn(fromData): Observable<any> {

    const fromValue = new FormData();
    fromValue.append("username", fromData.user);
    fromValue.append("password", fromData.Password);
    return this.http.post(this.baseurl + 'account/login', fromValue);
  };

  signup(fromData, publisher): Observable<any> {
    const fromValue = new FormData();

    fromValue.append("username", fromData.user);
    fromValue.append("email", fromData.email);
    fromValue.append("password", fromData.password);
    fromValue.append("confirm_password", fromData.confirmpassword);
    fromValue.append("ispublisher", fromData.publisher);
    return this.http.post(this.baseurl + 'account/register', fromValue)
  }

  forgetpassword(fromData): Observable<any> {
    const fromValue = new FormData();

    fromValue.append("reset-email", fromData.user);
    return this.http.post(this.baseurl + 'account/forgotpassword', fromValue)
  }

  checkcode(fromData): Observable<any> {
    const headers = new HttpHeaders({
      // 'content': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('UserTokenforgetpassword'),
      // 'lang': localStorage.getItem('lang')
    })

    const fromValue = new FormData();

    fromValue.append("code", fromData.user);
    return this.http.post(this.baseurl + 'account/check_code', fromValue, { headers: headers })
  }
  resetpassword(fromData): Observable<any> {
    const headers = new HttpHeaders({
      // 'content': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('UserTokenforgetpassword'),
      // 'lang': localStorage.getItem('lang')
    })

    const fromValue = new FormData();

    fromValue.append("newpassword", fromData.user);
    return this.http.post(this.baseurl + 'account/resetpassword', fromValue, { headers: headers })
  }
  logOut(): Observable<any> {

    // this.httpOptions = {
    const headers = new HttpHeaders({
      // 'content': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
      // 'lang': localStorage.getItem('lang')
    })
    // }
    // console.log(headers);

    return this.http.post(this.baseurl + 'account/logout', '', { headers: headers });
  };


  home(): Observable<any> {

    return this.http.get(this.baseurl + 'home')
  }

  all_category(): Observable<any> {

    return this.http.get(this.baseurl + 'categories')
  }
  all_books(id, page): Observable<any> {

    return this.http.get(this.baseurl + "book/bookByCat/" + id + "/p=" + page)
  }
  // 
  myBooks(page): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
    })
    return this.http.get(this.baseurl + 'book/myBooks/p=' + page, { headers: headers })
  }
  mySingleBook(id): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
    })
    return this.http.get(this.baseurl + 'book/' + id, { headers: headers })
  }
  deleteSingleBook(id): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
    })
    return this.http.delete(this.baseurl + 'book/' + id, { headers: headers })
  }
  add_books(fromData, Image): Observable<any> {
    const headers = new HttpHeaders({
      // 'content': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
      // 'lang': localStorage.getItem('lang')
    })
    const fromValue = new FormData();
    fromValue.append("bookname", fromData.name);
    fromValue.append("bookcover", Image);
    fromValue.append("book_author", fromData.author);
    fromValue.append("book_categorie", fromData.categorie);
    fromValue.append("price", fromData.price);

    return this.http.post(this.baseurl + 'addbook', fromValue, { headers: headers });
  };

  edite_books(fromData, Image, id): Observable<any> {
    const headers = new HttpHeaders({
      // 'content': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
      // 'lang': localStorage.getItem('lang')
    })
    const fromValue = new FormData();
    fromValue.append("bookname", fromData.name);
    if (Image != null) {
      fromValue.append("bookcover", Image);
    }
    fromValue.append("book_author", fromData.author);
    fromValue.append("book_categorie", fromData.categorie);
    fromValue.append("price", fromData.price);

    return this.http.put(this.baseurl + 'book/' + id, fromValue, { headers: headers });
  };

  // cart
  add_book_cart(id) {
    const headers = new HttpHeaders({
      // 'content': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
    })
    return this.http.post(this.baseurl + 'book/myCart/' + id, "", { headers: headers });
  }
  add_book_fav(id) {
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
    })
    return this.http.post(this.baseurl + 'book/myFav/' + id, "", { headers: headers });
  }
  delete_book_cart(id) {
    const headers = new HttpHeaders({
      // 'content': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
    })
    return this.http.delete(this.baseurl + 'book/myCart/' + id, { headers: headers });
  }
  delete_book_fav(id) {
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
    })
    return this.http.delete(this.baseurl + 'book/myFav/' + id, { headers: headers });
  }
  getCartBooks() {
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
    })
    return this.http.get(this.baseurl + 'book/myCart/0', { headers: headers });
  }
  getFavBooks(id) {
    const headers = new HttpHeaders({
      'Authorization': 'Token ' + localStorage.getItem('UserToken'),
    })
    return this.http.get(this.baseurl + 'book/myFav/' + 0, { headers: headers });
  }
}
