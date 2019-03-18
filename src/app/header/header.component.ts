import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() Inplaceholder;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  keyword = '';
  isHighlight = false;
  FontSize = 24;

  constructor() {}

  ngOnInit() {}

  CSearch($event) {
    alert('使用Click事件觸發Function');
  }

  OSearch($event) {
    this.searchEvent.emit(this.Inplaceholder);
  }

  onChange($event) {
    // alert('您輸入的關鍵字為：' + this.keyword);
  }

  HighLight($event) {
    this.isHighlight = !this.isHighlight;
    ++this.FontSize;
  }
}
