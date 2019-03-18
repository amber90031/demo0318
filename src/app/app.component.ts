import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';

  search($event) {
    alert('使用自訂Ouput方法傳遞子元件的參數[' + $event + ']到父元件');
  }
}
