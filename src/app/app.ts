import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <h1>Hello Angular Universal App</h1>
  <ul>
    <li><a routerLink="" routerLinkActive="active">Angular Universal</a></li>
    <li><a routerLink="home" routerLinkActive="active">Home</a></li>
    <li><a routerLink="about" routerLinkActive="active">About</a></li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class App {

}

@Component({
  selector: 'default',
  template: ``
})
export class Default {

}

@Component({
  selector: 'home',
  template: `
  Home component
  <ul>
    <li><a routerLink="a" routerLinkActive="active">A Component</a></li>
    <li><a routerLink="b" routerLinkActive="active">B Component</a></li>
  </ul>
  `
})
export class Home {

}
@Component({
  selector: 'about',
  template: `
  About component
  <ul>
    <li><a routerLink="c" routerLinkActive="active">C Component</a></li>
  </ul>
  `
})
export class About {

}
