import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { APiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  CartBook: any = [];
  constructor(private apiservice: APiService, private toastar: ToastrService) { }

  ngOnInit(): void {
    this.getCartBook();
  }
  remove(id) {
    this.apiservice.delete_book_cart(id).subscribe(
      res => {
        console.log(res);
        if (res['status'] == 1) {
          this.toastar.success(res['message']);
          this.getCartBook();
        }
        else {
          this.toastar.error(res['message']);
        }
      }, error => {

        this.toastar.error(error.error.message);
      }
    )
  }

  getCartBook() {
    this.apiservice.getCartBooks().subscribe(
      res => {
        console.log(res);
        if (res['status'] == 1) {
          this.CartBook = res['data'];
        }
        else {
          this.toastar.error(res['message']);
        }
      }, error => {

        this.toastar.error(error.error.message);
      }
    )
  }
}
