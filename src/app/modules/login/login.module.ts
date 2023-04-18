import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [LoginPageComponent, EmailFormComponent, PasswordFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ListboxModule,
  ],
  providers: [],
})
export class LoginModule {}
