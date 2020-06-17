import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info : any = [{}];
  editProfileStudent: FormGroup;

  constructor(private adminService : AdminserviceService) 
  {

  }

  getData(){
    this.adminService.getDetails().subscribe((res) =>
    {
      console.log(res)
      this.info = res.results;
    })
  }


  ngOnInit(): void {

    this.getData();
  }

}
