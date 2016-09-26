import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, cRoutingProviders } from './c.routing';
import { CComponent, CaComponent, CbComponent } from './c.component';
import { DComponent, DaComponent, DbComponent } from './d.component';
export class CModule {
    constructor() {
        console.log('CModule');
    }
}
CModule.decorators = [
    { type: NgModule, args: [{
                imports: [BrowserModule, CommonModule, FormsModule, HttpModule, routing],
                declarations: [CComponent, CaComponent, CbComponent, DComponent, DaComponent, DbComponent],
                providers: [
                    cRoutingProviders
                ],
            },] },
];
CModule.ctorParameters = [];
//# sourceMappingURL=c.module.js.map