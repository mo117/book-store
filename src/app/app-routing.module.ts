import { ProfilePlisherComponent } from './pages/profile-plisher/profile-plisher.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { CheckcodeComponent } from './pages/checkcode/checkcode.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { BooksComponent } from './pages/books/books.component';
import { CartComponent } from './pages/cart/cart.component';
import { FavrotieComponent } from './pages/favrotie/favrotie.component';

const routes: Routes = [
  //routing page
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ProfilePlisher', component: ProfilePlisherComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },

  { path: 'checkcode', component: CheckcodeComponent },
  { path: 'Resetpassword', component: ResetpasswordComponent },
  { path: 'books/:id', component: BooksComponent },
  { path: 'cart', component: CartComponent },
  { path: 'Favrotie', component:  FavrotieComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
