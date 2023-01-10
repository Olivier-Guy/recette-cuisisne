import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {

  /*
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  */

  form = this.fb.group({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submitForm()
  {

    if (this.form.invalid) {
      return;
    }

    this.authService
      .login(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe((response: any) => {
        this.router.navigate(['/main']);
      });
  }

}

