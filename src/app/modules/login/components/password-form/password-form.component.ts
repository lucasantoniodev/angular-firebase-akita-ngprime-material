import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/common/auth/services/firebase.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss'],
})
export class PasswordFormComponent implements OnInit {
  form!: FormGroup;

  @Input() email: string = 'Nenhum email';

  constructor(private authService: FirebaseService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl(null, [Validators.required]),
    });
  }

  nextButton() {
    this.authService.handleLogin({
      email: this.email,
      password: this.form.get('password')?.value,
    });
  }
}
