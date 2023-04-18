import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  form!: FormGroup;

  @Output() emailEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
    });
  }

  nextButton() {
    this.emailEmitter.emit(this.form.get('username')?.value);
  }
}
