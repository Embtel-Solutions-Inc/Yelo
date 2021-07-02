import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JarwisService } from 'src/app/auth/jarwis.service';
import { TokenService } from 'src/app/auth/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };

  public error = [];

  constructor(private jarwis:JarwisService,
    private Token:TokenService,
    private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.jarwis.signup(this.form).subscribe(
      data=>this.handleResponse(data),
      error => this.handleError(error)
    )
  }
  handleError(error) {
    this.error = error.error.errors;
  }
  handleResponse(data){
    this.Token.handle(data.access_token)
    this.router.navigateByUrl('/profile')
 }
}
