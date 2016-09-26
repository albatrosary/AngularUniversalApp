import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-c',
  template: `
    <h1>My C</h1>
    <ul>
      <li><a routerLink="a" routerLinkActive="active">Ca Component</a></li>
      <li><a routerLink="b" routerLinkActive="active">Cb Component</a></li>
    </ul>
    <button (click)="onClick()">D Component</button>
    <router-outlet></router-outlet>
    `,
})
export class CComponent {
  constructor (private router: Router) {
    console.log('CComponent');
  }
  onClick () {
    this.router.navigate(['d']);
  }
}

@Component({
  selector: 'my-ca',
  template: `
    <h1>Ca Component</h1>
    `,
})
export class CaComponent {
  constructor () {
    console.log('CaComponent');
  }
}
@Component({
  selector: 'my-cb',
  template: `
    <h1>Cb Component</h1>
    `,
})
export class CbComponent {
  constructor () {
    console.log('CbComponent');
  }
}