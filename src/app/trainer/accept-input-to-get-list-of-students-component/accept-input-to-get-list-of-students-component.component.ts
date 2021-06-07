import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accept-input-to-get-list-of-students-component',
  templateUrl: './accept-input-to-get-list-of-students-component.component.html',
  styleUrls: ['./accept-input-to-get-list-of-students-component.component.css']
})
export class AcceptInputToGetListOfStudentsComponentComponent implements OnInit {

  GetName=new FormGroup({
    trackName:new FormControl('')
  })
  constructor(private router: Router  ) { }

  ngOnInit(): void {
    
  }

  
  submitNameToGetData(){
    console.warn(this.GetName.value.trackName);
    
    this.router.navigateByUrl('/DisplayAllDetailsBaseOnTrace/'+this.GetName.value.trackName);
  }
}
