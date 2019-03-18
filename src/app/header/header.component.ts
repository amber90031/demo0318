import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() Inplaceholder;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  CSearch($event) {
    alert('使用Click事件觸發Function');
  }

  OSearch($event) {
    this.searchEvent.emit(this.Inplaceholder);
  }
}
