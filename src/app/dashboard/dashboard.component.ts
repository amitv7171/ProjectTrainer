import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { TaskService} from './../shared/task.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  GetUserNameAndTaskId=new FormGroup({
    userName:new FormControl(''),
    taskId:new FormControl('')
  })
  collection:any=[];

  constructor(public router:ActivatedRoute,public track:TaskService,private routerr: Router) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.name)
    this.track.GetList(this.router.snapshot.params.name).subscribe((result)=>{
      console.warn(result);
      this.collection=result;
    });
  }
  navigateToUpdateFormTracker() {
    this.routerr.navigateByUrl('/UpdateTaskReadyComponent/'+this. GetUserNameAndTaskId.value.taskId+'/'+this. GetUserNameAndTaskId.value.userName);

  }

}
