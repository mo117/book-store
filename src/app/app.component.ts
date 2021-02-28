import { Component, OnInit } from '@angular/core';
import { APiService } from './service/api.service';
import { SessionData } from './service/seisson-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'book-website';
  constructor(
    private apiservice:APiService
  ) {
    this.startApplication();
  }

  ngOnInit() {
    this.category();
  }
  startApplication() {
    if(localStorage.getItem('UserToken') == null || localStorage.getItem('UserToken') == "") {
      SessionData.IsLogin = false;
    }
    else {
      SessionData.IsLogin = true;
    }
  }
  category(){
    //get home item by subscribe the API
    this.apiservice.all_category().subscribe((all)=>{
      console.log(all.data);
      SessionData.all_category = all.data;
    })
  }
}
