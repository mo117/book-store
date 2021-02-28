import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APiService } from 'src/app/service/api.service';
import { SessionData } from 'src/app/service/seisson-data';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  mainid: any;
  books: any = [];
  page: any = 1;
  is_paginate: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private ApiService: APiService
  ) { }
  public sessionData = SessionData;
  ngOnInit(): void {
    this.mainid = +this.route.snapshot.paramMap.get('id');
    this.sessionData.CategotyId = this.mainid;
    this.getAllBook();
  }
  getAllBook() {
    this.ApiService.all_books(
      this.sessionData.CategotyId,
      this.page
    ).subscribe(
      (res) => {
        console.log(res);
        this.sessionData.booksArray = res.data
        this.page = this.page + 1;
        this.is_paginate = res.is_paginate;
        // this.LoadingProvider.CloseHttpServiceLoading();
      },
      (error) => {
        // this.LoadingProvider.CloseHttpServiceLoading();
      }
    );
  }
  onScroll() {
    if (this.is_paginate == true) {
      this.getAllBook();
    }
  }
}
