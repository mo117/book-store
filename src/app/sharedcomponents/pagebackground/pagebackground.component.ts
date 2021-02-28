import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagebackground',
  templateUrl: './pagebackground.component.html',
  styleUrls: ['./pagebackground.component.scss']
})
export class PagebackgroundComponent implements OnInit {
  @Input() pageName: any;
  @Input() MainpageName: any;
  constructor() { }

  ngOnInit(): void {
  }

}
