import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  register(event: Event) {
    event.preventDefault();
    console.log(this.form.valid);
    if (this.form.valid){
      const user = this.form.value;
      this.authService.createUser(user.email, user.password)
      .then(() => {
        this.router.navigate(['/auth/login'])
      });
      console.log(user);
    }
  }

  ngOnInit(): void {
  }

  get nameField(){
    return this.form.get('name');
  }

  get userField(){
    return this.form.get('email');
  }

  get passwordField(){
    return this.form.get('password');
  }

}
