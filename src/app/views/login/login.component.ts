import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { AuthSignalService } from '../../services/signals/auth/auth-signal.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authSignalService: AuthSignalService
  ) { }


  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      apikey: ['db0f3db7-47de-4602-bc34-b5dab0a9e6fc', [Validators.required]],
    });
  }

  onSubmit(): void {
    console.log('onSubmit');
    // if (this.loginForm.invalid) {
    //   return;
    // }

    // console.log('onSubmit');


    const { apikey } = this.loginForm.getRawValue();

    this.authSignalService.login(apikey);
  }
}
