import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
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
      this.authService.login(user.email, user.password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('Usuario o contraseña invalidos');
      });
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
