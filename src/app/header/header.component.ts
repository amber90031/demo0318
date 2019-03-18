import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() Inplaceholder;

  constructor() {}

  ngOnInit() {}

  search($event) {
    alert('Click the search.');
  }
}
