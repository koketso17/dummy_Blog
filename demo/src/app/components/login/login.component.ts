import { Component, OnInit } from '@angular/core';
import { LogRegService } from './../../service/log-reg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private LogRegService: LogRegService) { }

  ngOnInit(): void {

  }

  check_user() {
   
    this.LogRegService.check_user(this.email, this.password).subscribe(Response=>{
      console.log(Response);
    })
    

  }

}
