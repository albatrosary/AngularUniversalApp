import { Component } from '@angular/core';
import { Router } from '@angular/router';
export class CComponent {
    constructor(router) {
        this.router = router;
        console.log('CComponent');
    }
    onClick() {
        this.router.navigate(['d']);
    }
}
CComponent.decorators = [
    { type: Component, args: [{
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
            },] },
];
CComponent.ctorParameters = [
    { type: Router, },
];
export class CaComponent {
    constructor() {
        console.log('CaComponent');
    }
}
CaComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-ca',
                template: `
    <h1>Ca Component</h1>
    `,
            },] },
];
CaComponent.ctorParameters = [];
export class CbComponent {
    constructor() {
        console.log('CbComponent');
    }
}
CbComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-cb',
                template: `
    <h1>Cb Component</h1>
    `,
            },] },
];
CbComponent.ctorParameters = [];
//# sourceMappingURL=c.component.js.map