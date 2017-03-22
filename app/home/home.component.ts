import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
	selector:'my-app',
	templateUrl: 'home.component.html'
})

export class AppComponent {
	title: string = 'Angular 2 app';
	paragraph: string = 'Nueva variable2';
}