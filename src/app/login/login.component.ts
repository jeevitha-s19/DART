import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
  this.loginForm = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  
  get email() {
  return this.loginForm.get('email');
  }
  
  get password() {
  return this.loginForm.get('password');
  }
  
  login() {
  if (this.loginForm.valid) {
  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;

  // login logic here
  console.log('Email:', email);
  console.log('Password:', password);
  }
  }
  }