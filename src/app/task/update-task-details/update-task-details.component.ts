import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
 



  constructor(private _taskService:TaskService) { }

  ngOnInit(): void {
  }
  collectAndUpdateDetails(){
    console.warn(this.updatetaskDetails.value.taskId);
    console.warn(this.updatetaskDetails.value);
    
    
    this._taskService.UpdateTheTaskDetails(this.updatetaskDetails.value.taskId,this.updatetaskDetails.value).subscribe(res=>{console.warn(res);
    })

  }

}
