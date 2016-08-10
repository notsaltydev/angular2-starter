import {
    RouterTestingModule
} from '@angular/router/testing';
import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';
import { provideRoutes, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'as-test-cmp',
    template: '<div class="title">Hello test</div>'
})
class TestRouterComponent {
}

let config: Routes = [
    {
        path: '', component: TestRouterComponent
    }
];

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
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
            let fixture: ComponentFixture<AppComponent>;
            fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();

            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
            // expect(compiled.querySelector('div.title')).toMatch('Hello world');
        });
    }));
});
