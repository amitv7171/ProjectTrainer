import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';
import { Component, HostBinding, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  userDetails;
  

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        
      },
      err => {
        console.log(err);
      },
    );

  }

}
