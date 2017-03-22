import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
    moduleId: module.id,
	selector:'my-app',
	templateUrl: 'home.component.html'
})

export class AppComponent {
	title: string = 'Angular 2 app';
	paragraph: string = 'Nueva variable2';
	
	public constructor(private titleService:Title){

	}
	
	ngOnInit(){
		this.titleService.setTitle('Título del Home');
	}

}