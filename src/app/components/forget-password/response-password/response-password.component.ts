import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/auth/jarwis.service';

@Component({
  selector: 'app-response-password',
  templateUrl: './response-password.component.html',
  styleUrls: ['./response-password.component.css']
})
export class ResponsePasswordComponent implements OnInit {

  public form = {
    email:null,
    password: null,
    confirm_password:null,
    reset_token:null,
  }
  constructor(
    private route:ActivatedRoute,
    private jarwis:JarwisService
    ) {

    route.queryParams.subscribe(params=>{
      this.form.reset_token = params['token']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.jarwis.changePassword(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error),
    )
  }

  handleResponse(e){

  }
  handleError(e){

  }
}
