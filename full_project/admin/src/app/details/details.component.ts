import { Component, OnInit } from '@angular/core';
import { HomeComponent} from '../home/home.component';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  data : any = [{}];

  constructor(private adminService : AdminserviceService) 
  {

  }

  getData(){
    this.adminService.getDetails().subscribe((res) =>
    {
      console.log(res)
      this.data = res.results;
    })
  }


  ngOnInit(): void {

    this.getData();
  }

}
