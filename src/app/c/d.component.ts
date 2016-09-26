import { Component } from '@angular/core';

@Component({
  selector: 'my-d',
  template: `
    <h1>My D</h1>
    <ul>
      <li><a routerLink="a" routerLinkActive="active">Da Component</a></li>
      <li><a routerLink="b" routerLinkActive="active">Db Component</a></li>
    </ul>
    <router-outlet></router-outlet>
    `,
})
export class DComponent {
  constructor () {
    console.log('DComponent');
  }
}

@Component({
  selector: 'my-da',
  template: `
    <h1>Da Component</h1>
    `,
})
export class DaComponent {
  constructor () {
    console.log('DaComponent');
  }
}
@Component({
  selector: 'my-db',
  template: `
    <h1>Db Component</h1>
    `,
})
export class DbComponent {
  constructor () {
    console.log('DbComponent');
  }
}