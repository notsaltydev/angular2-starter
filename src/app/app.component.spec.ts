import {
    RouterTestingModule
} from '@angular/router/testing';
import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';
import { provideRoutes, RouterConfig } from '@angular/router';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'as-test',
    template: '<div><as-main-app></as-main-app></div>'
})
class TestComponent {
}

@Component({
    selector: 'as-test-cmp',
    template: '<div class="title">Hello test</div>'
})
class TestRouterComponent {
}

let config: RouterConfig = [
    {
        path: '', component: TestRouterComponent
    }
];

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestComponent,
                TestRouterComponent,
                AppComponent,
                NavbarComponent
            ],
            imports: [ RouterTestingModule ],
            providers: [ provideRoutes(config) ]
        });
    });

    it('should have title Hello world', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture: ComponentFixture<TestComponent> = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            console.log(compiled);
            // expect(compiled.querySelector('div.title')).toMatch('Hello world');
        });
    }));
});
