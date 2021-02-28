// import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule, NgbPaginationModule, NgbAlertModule,ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharedcomponents/header/header.component';
import { FooterComponent } from './sharedcomponents/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagebackgroundComponent } from './sharedcomponents/pagebackground/pagebackground.component';
import { APiService } from './service/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ToastrModule } from 'ngx-toastr';
import { BookCartComponent } from './sharedcomponents/book-cart/book-cart.component';
import { ProfilePlisherComponent } from './pages/profile-plisher/profile-plisher.component';
import { ItemCartComponent } from './sharedcomponents/item-cart/item-cart.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { CheckcodeComponent } from './pages/checkcode/checkcode.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { BooksComponent } from './pages/books/books.component';
import { CartComponent } from './pages/cart/cart.component';
import { FavrotieComponent } from './pages/favrotie/favrotie.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    PagebackgroundComponent,
    BookCartComponent,
    ProfilePlisherComponent,
    ItemCartComponent,
    ForgetpasswordComponent,
    CheckcodeComponent,
    ResetpasswordComponent,
    BooksComponent,
    CartComponent,
    FavrotieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgMultiSelectDropDownModule,
    // MatCarouselModule.forRoot(),
    ToastrModule.forRoot(),
    MDBBootstrapModule
  ],

  providers: [APiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
