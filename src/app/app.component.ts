import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'rgi-app';
  isMobile: boolean;
  constructor() {
    if (window.innerWidth < 1024) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  onResize(e) {
    if (e && e.target.innerWidth > 1025) {
      this.isMobile = false;
    }
    if (e && e.target.innerWidth < 1024){
      this.isMobile = true;
    }
    return this.isMobile;
  }

}
