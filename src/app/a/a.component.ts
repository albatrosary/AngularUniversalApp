import { Component } from '@angular/core';

@Component({
  selector: 'my-a',
  template: `
    <h1>My A</h1>
    <ul>
      <li><a routerLink="a" routerLinkActive="active">Aa Component</a></li>
      <li><a routerLink="b" routerLinkActive="active">Ab Component</a></li>
      <li><a routerLink="c" routerLinkActive="active">Ac Component</a></li>
    </ul>
    <router-outlet></router-outlet>
    `,
})
export class AComponent {
  constructor () {
    console.log('AComponent');
  }
}

@Component({
  selector: 'my-aa',
  template: `
    <h1>Aa Component</h1>
    `,
})
export class AaComponent {
  constructor () {
    console.log('AaComponent');
  }
}
@Component({
  selector: 'my-ab',
  template: `
    <h1>Ab Component</h1>
    `,
})
export class AbComponent {
  constructor () {
    console.log('AbComponent');
  }
}
@Component({
  selector: 'my-ac',
  template: `
    <h1>Ac Component</h1>
    `,
})
export class AcComponent {
  constructor () {
    console.log('AcComponent');
  }
}