import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APiService } from './../../service/api.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { SessionData } from 'src/app/service/seisson-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public sessionData = SessionData;
  constructor(private apiservice: APiService, private toastar: ToastrService, private router: Router) { }

  ngOnInit(): void {



  }
  @HostListener('window: scroll', ['$event'])
  onwidowsScroll(e) {
    let element = document.querySelector('.header');

    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  }
  closeNav() {
    let element = document.querySelector('.header__nav');
    if (element != null) {
      element.classList.remove('active');
      element.classList.remove('activeNav');


    }
  }
  OpenMenu() {
    let Checkelement = document.querySelector('.activeNav');

    if (Checkelement == null) {
      let element = document.querySelector('.header__nav');
      element.classList.add('active');

      element.classList.add('activeNav');

      let element2 = document.querySelector('.header__burger');
      element2.classList.add('active');
    } else {
      let element = document.querySelector('.header__nav');
      element.classList.remove('active');

      element.classList.remove('activeNav');

      let element2 = document.querySelector('.header__burger');
      element2.classList.remove('active');
    }
  }
  logout() {
    this.apiservice.logOut().subscribe(
      res => {
        // console.log(res);
        if (res.status == 1) {
          SessionData.ClearDataInSessionByLogOut();
          this.toastar.success(res.message);
          this.router.navigate(['Home']);
        }
        else {
          this.toastar.error(res.message);
        }
      }, error => {
        // console.log(error);

        this.toastar.error(error.error.message);
      }
    )
  }
  getAllBook(id) {
    this.sessionData.CategotyId = id;
    this.apiservice.all_books(
      this.sessionData.CategotyId,
      1
    ).subscribe(
      (res) => {
        console.log(res);
        this.sessionData.booksArray = res.data
        // this.LoadingProvider.CloseHttpServiceLoading();
      },
      (error) => {
        // this.LoadingProvider.CloseHttpServiceLoading();
      }
    );
  }
}





