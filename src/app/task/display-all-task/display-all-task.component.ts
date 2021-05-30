import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/shared/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-all-task',
  templateUrl: './display-all-task.component.html',
  styleUrls: ['./display-all-task.component.css']
})
export class DisplayAllTaskComponent implements OnInit {
  getName=new FormGroup({
    TrackName:new FormControl("")
  })

  public TaskNameList:any;

  constructor(private _taskService:TaskService,private router: Router) { }

  ngOnInit(): void {
  }
  deleteTask(item)
  {
  
    this._taskService.DeleteTaskWithID(item).subscribe((result)=>{console.warn("result",result)})
  

  }
  submitNameToGetData(){
    console.warn(this.getName.value.TrackName);
    this._taskService.GetAllTasksRelatedToTrack(this.getName.value.TrackName).subscribe(res=>{
      this.TaskNameList=res,
      console.warn(res),
     console.warn(this.TaskNameList+" vldjdsj");

      
    })
  }
  navigateToLogin(id:any) {
    this.router.navigateByUrl('/UpdateTaskDetails/'+id);
 }
}
