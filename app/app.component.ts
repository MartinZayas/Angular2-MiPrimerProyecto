import { Component,ViewEncapsulation } from '@angular/core';

@Component({
	selector:'my-app',
	templateUrl: './app/app.component.html',
	interpolation:['{{','}}'],
	//encapsulation: ViewEncapsulation.None,
	/*styles: [`
		.bg{
			background-color: blue;
		}
		.bg2{
			background-color: darkgoldenrod;
		}
	`]*/
	//interpolation:['{{','}}']
	styleUrls: ['./app/app.css']
})

export class AppComponent {
	title: string = 'Angular 2 app';
	paragraph: string = 'Nueva variable2';
}