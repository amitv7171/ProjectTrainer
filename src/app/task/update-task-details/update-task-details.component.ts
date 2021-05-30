import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router'
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-update-task-details',
  templateUrl: './update-task-details.component.html',
  styleUrls: ['./update-task-details.component.css']
})
export class UpdateTaskDetailsComponent implements OnInit {
  updatetaskDetails=new FormGroup({
    taskId:new FormControl(''),
    trackName:new FormControl(''),
    taskName:new FormControl(''),
    taskDescription:new FormControl('')
  });
 



  constructor(private _taskService:TaskService,private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this._taskService.GetParticularDataById(this._router.snapshot.params.id).subscribe((result:any)=>{
      this.updatetaskDetails=new FormGroup({
        taskId:new FormControl(result['taskId']),
        trackName:new FormControl(result['trackName']),
        taskName:new FormControl(result['taskName']),
        taskDescription:new FormControl(result['taskDescription'])
      });
  })
}
  collectAndUpdateDetails(){
    console.warn(this.updatetaskDetails.value.taskId);
    console.warn(this.updatetaskDetails.value);
    this._taskService.UpdateTheTaskDetails(this.updatetaskDetails.value.taskId,this.updatetaskDetails.value).subscribe(res=>{console.warn(res);
    })

  }

}
