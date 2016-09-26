import { Component } from '@angular/core';


@Component({
  selector: 'my-b',
  template: `
    <h1>My B</h1>
    <ul>
      <li><a routerLink="a" routerLinkActive="active">Ba Component</a></li>
      <li><a routerLink="b" routerLinkActive="active">Bb Component</a></li>
      <li><a routerLink="c" routerLinkActive="active">Bc Component</a></li>
    </ul>
    <router-outlet></router-outlet>
    `,
})
export class BComponent {
  constructor () {
    console.log('BComponent');
  }
}

@Component({
  selector: 'my-ba',
  template: `
    <h1>Ba Component</h1>
    `,
})
export class BaComponent {
  constructor () {
    console.log('BaComponent');
  }
}
@Component({
  selector: 'my-bb',
  template: `
    <h1>Bb Component</h1>
    `,
})
export class BbComponent {
  constructor () {
    console.log('BbComponent');
  }
}
@Component({
  selector: 'my-bc',
  template: `
    <h1>Bc Component</h1>
    `,
})
export class BcComponent {
  constructor () {
    console.log('BcComponent');
  }
}