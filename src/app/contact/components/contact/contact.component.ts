import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  logIn(event: Event) {
    event.preventDefault();
    console.log(this.form.valid);
    if (this.form.valid){
      const user = this.form.value;
      console.log(user);
    }
  }

  ngOnInit(): void {
  }

  get userField(){
    return this.form.get('email');
  }

  get passwordField(){
    return this.form.get('password');
  }
}
