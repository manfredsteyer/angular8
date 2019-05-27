import { Component } from '@angular/core';
import { Location, PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';

  constructor(loc: Location, pLoc: PlatformLocation) {
    loc.onUrlChange((url) => console.debug('url change', url));
    console.debug('hostname: ', pLoc.hostname);
  }
}
