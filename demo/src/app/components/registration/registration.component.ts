import { LogRegService } from './../../service/log-reg.service';
import { Component, OnInit } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name: string = '';
  email: string = '';
  password: string = '';


  constructor(private LogRegService: LogRegService ) { }

  ngOnInit(): void {
  }

    add_user () {
      console.log('user added');
      this.LogRegService.add_user(this.name, this.email, this.password).subscribe(data => {
        console.log(data);
      });
    }



}
