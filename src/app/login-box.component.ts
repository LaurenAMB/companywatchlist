import { Component } from '@angular/core'

@Component({
	selector: 'loginbox',
	template: '<div><h2>{{ title }}</h2></div>'
})
export class LoginBoxComponent {
	title = "Welcome! Please Login";
}