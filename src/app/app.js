import { Component } from '@angular/core';
export class App {
}
App.decorators = [
    { type: Component, args: [{
                selector: 'app',
                template: `
  <h1>Hello Angular Universal App</h1>
  <ul>
    <li><a routerLink="" routerLinkActive="active">Angular Universal</a></li>
    <li><a routerLink="home" routerLinkActive="active">Home</a></li>
    <li><a routerLink="about" routerLinkActive="active">About</a></li>
  </ul>
  <hr>
  <ul>
    <li><a routerLink="a" routerLinkActive="active">A Component</a></li>
    <li><a routerLink="b" routerLinkActive="active">B Component</a></li>
    <li><a routerLink="c" routerLinkActive="active">C Component</a></li>
  </ul>
  <router-outlet></router-outlet>
  `
            },] },
];
App.ctorParameters = [];
export class Home {
}
Home.decorators = [
    { type: Component, args: [{
                selector: 'home',
                template: 'Home component'
            },] },
];
Home.ctorParameters = [];
export class About {
}
About.decorators = [
    { type: Component, args: [{
                selector: 'about',
                template: 'About component'
            },] },
];
About.ctorParameters = [];
//# sourceMappingURL=app.js.map