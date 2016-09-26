import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, bRoutingProviders } from './b.routing';
import { BComponent, BaComponent, BbComponent, BcComponent } from './b.component';
export class BModule {
    constructor() {
        console.log('BModule');
    }
}
BModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule, CommonModule, FormsModule, HttpModule, routing],
                declarations: [BComponent, BaComponent, BbComponent, BcComponent],
                providers: [
                    bRoutingProviders
                ],
            },] },
];
BModule.ctorParameters = [];
//# sourceMappingURL=b.module.js.map