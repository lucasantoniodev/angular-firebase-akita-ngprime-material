import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterPageComponent {
  email: string = '';

  getEmail(response: string) {
    this.email = response;
  }
}
