import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
  this.registerForm= this.formBuilder.group({
  name: ['',[Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  
  get name(){
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmpassword(){
    return this.registerForm.get('confirmpassword');
  }

  login() {
  if (this.registerForm.valid) {
  const name = this.registerForm.value.name;
  const email = this.registerForm.value.email;
  const password = this.registerForm.value.password;
  const confirmpassword = this.registerForm.value.confirmpassword;

  // Perform your login logic here
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);
  }
  }

}
