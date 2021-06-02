import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept-input-to-update',
  templateUrl: './accept-input-to-update.component.html',
  styleUrls: ['./accept-input-to-update.component.css']
})
export class AcceptInputToUpdateComponent implements OnInit {
  GetUserNameAndTaskId=new FormGroup({
    userName:new FormControl(''),
    taskId:new FormControl('')
  })


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToUpdateFormTracker() {
    this.router.navigateByUrl('/UpdateTrackerStatus/'+this. GetUserNameAndTaskId.value.taskId+'/'+this. GetUserNameAndTaskId.value.userName);

  }
}
