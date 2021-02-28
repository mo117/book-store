import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { APiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.scss']
})
export class BookCartComponent implements OnInit {
  // reading the book object from any other component
  @Input() BookProduct: any;

  constructor(private ApiService: APiService, private toastar: ToastrService) { }

  ngOnInit(): void {
  }

  add_book_cart(id) {
    this.ApiService.add_book_cart(
      id
    ).subscribe(
      (res) => {
        if (res["status"] == 1) {
          this.toastar.success(res["message"]);
        }
        else {
          this.toastar.error(res["message"]);
        }
      }, error => {
        this.toastar.error(error.error.message);
      }
    );
  }
  add_book_fav(id) {
    this.ApiService.add_book_fav(
      id
    ).subscribe(
      (res) => {
        if (res["status"] == 1) {
          this.toastar.success(res["message"]);
        }
        else {
          this.toastar.error(res["message"]);
        }
      }, error => {
        this.toastar.error(error.error.message);
      }
    );
  }
}
