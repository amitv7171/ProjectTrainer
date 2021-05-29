import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-accept-task-details',
  templateUrl: './accept-task-details.component.html',
  styleUrls: ['./accept-task-details.component.css']
})
export class AcceptTaskDetailsComponent implements OnInit {
  addtaskDetails=new FormGroup({
    trackName:new FormControl(''),
    taskName:new FormControl(''),
    taskDescription:new FormControl('')
  })

  constructor(private _taskService:TaskService) { }

  ngOnInit(): void {
  }
  collectAndAddDetails(){
    this._taskService.AddTaskDetails(this.addtaskDetails.value).subscribe(res=>console.warn(res)
    )

  }

}
