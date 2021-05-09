import { Component } from '@angular/core';

@Component({
    selector: 'library-cards',
    template: `
        <div class="library-cards">
            <library-card package="@deepkit/type" title="Type" sub="Runtime type system">
                <p>Define TypeScript types for the JavaScript runtime and use those schemas for serialization, validation, and even database
                    entities.</p>
            </library-card>
            
            <library-card package="@deepkit/orm" title="ORM" sub="Database abstraction layer">
                <p>High performance TypeScript ORM with unit-of-work, migrations, and much more.</p>
                <p>MySQL, PostreSQL, SQLite, MongoDB.</p>
            </library-card>

            <library-card package="@deepkit/orm-browser" title="ORM Browser" sub="Visual database browser">
                <p>View, add, update, or delete database records directly in the browser.</p>
                <p>Seed, migrate, or display the ER Model of your database. With interactive query prompt.</p>
            </library-card>

            <library-card package="@deepkit/rpc" title="RPC" sub="Remote procedure call">
                <p>A modern high performance Remote Procedure Call (RPC) framework for TypeScript.</p>
            </library-card>

            <library-card package="@deepkit/desktop-ui" title="Desktop UI" sub="GUI library for desktop apps">
                <p>Angular Desktop GUI library for high-performance user interfaces, with Electron features.</p>
            </library-card>

            <library-card package="@deepkit/broker" title="Broker" sub="Message Bus">
                <p>High performance typesafe message bus server for pub/sub pattern, key-value storage, and central atomic app locks.</p>
            </library-card>

            <library-card package="@deepkit/bson" title="BSON" sub="BSON encoder/decoder">
                <p>Fastest BSON parser and serializer. 13x faster than official bson-js/bson-ext, and 2x faster than JSON.</p>
                <p>Based on @deepkit/type.</p>
            </library-card>

            <library-card package="@deepkit/mongo" title="Mongo" sub="MongoDB client">
                <p>High performance MongoDB client for modern TypeScript: Full async error stack trace, BigInt support, and fully
                    type-safe</p>
                <p>Based on @deepkit/type.</p>
            </library-card>

            <library-card package="@deepkit/injector" title="Injector" sub="Dependency injection">
                <p>A compiling high performance dependency injection container, with constructor/property injection, type-safe configuration
                    system, compiler-passes, scopes, and tags.</p>
            </library-card>

            <library-card package="@deepkit/template" title="Template" sub="HTML template engine">
                <p>Fully type-safe and fast template engine based on TSX, with support for dependency injection and async templates.</p>
            </library-card>

            <library-card package="@deepkit/topsort" title="Topsort" sub="Topological sort">
                <p>A fast implementation of a topological sort/dependency resolver with type grouping algorithm.</p>
            </library-card>

            <library-card package="@deepkit/logger" title="Logger" sub="Logging abstraction">
                <p>A logger library with support for colors, scopes, various transporter and formatter.</p>
            </library-card>
        </div>
    `
})
export class LibraryCardsComponent {

}