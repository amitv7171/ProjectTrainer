import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-delete-task-details',
  templateUrl: './delete-task-details.component.html',
  styleUrls: ['./delete-task-details.component.css']
})
export class DeleteTaskDetailsComponent implements OnInit {
  getId=new FormGroup({
    taskId:new FormControl("")
  })

  constructor(private _taskService:TaskService) { }

  ngOnInit(): void {
  }
  submitNameToGetData(){
    console.warn(this.getId.value.taskId);
    this._taskService.DeleteTaskWithID(this.getId.value.taskId).subscribe(res=>{
      
      console.warn(res);   
    })
  }
    

}
