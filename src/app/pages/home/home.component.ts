import { Component, Input, OnInit } from '@angular/core';
import { allowedNodeEnvironmentFlags } from 'process';
import { from } from 'rxjs';
import {APiService} from '../../service/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides: any[];
  bestseller:[];
  newbooks:[];




  constructor(private apiservice:APiService) { }

  ngOnInit() {
    this.slides = [
      { image: 'assets/Images/slide1.jpg' },
      { image: 'assets/Images/slide2.jpg' }];
      this.home_item();
  }

  home_item(){
    //get home item by subscribe the API
    this.apiservice.home().subscribe((all)=>{

      console.log(all.data);

      this.bestseller = all.data.bestseller
      this.newbooks = all.data.newbooks

    })
  }

}
