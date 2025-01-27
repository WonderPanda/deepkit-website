import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-banner',

    template: `
        <div class="banner">
            <div class="head">
                <div class="breadcrumb">
                    <a routerLink="/library">Deepkit library</a> / <a routerLink="/library/{{id}}" class="package-name">@deepkit/{{id}}</a>
                </div>
                <nav>
                    <a routerLink="/library/{{id}}" routerLinkActive="active">Overview</a>
                    <a routerLink="/documentation/{{id}}">Documentation</a>
                    <a href="/assets/api-docs/modules/_deepkit_{{id}}.html">API</a>
                </nav>
            </div>

            <h1>{{header}}</h1>
            
            <ng-content></ng-content>
        </div>
    `
})
export class ProductBannerComponent {
    @Input() header!: string;
    @Input() id!: string;
}
