import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, MinLengthValidator, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor() { }
  registerForm:any;



  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-z]*'),Validators.minLength(3),Validators.maxLength(24)]),
      "age":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "contact":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    })
  }
  submitData(){
    console.log(this.registerForm.value)

    if(this.registerForm.valid){
      alert('Thank You');
      this.registerForm.reset(); 
    }
  }
  get name() { return this.registerForm.get('name')}
  get age() {return this.registerForm.get('age')}
  get email() { return this.registerForm.get('email')}
  get contact() {return this.registerForm.get('contact')}
}
