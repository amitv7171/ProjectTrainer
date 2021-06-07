import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService} from './../shared/task.service';


@Component({
  selector: 'app-update-task-ready',
  templateUrl: './update-task-ready.component.html',
  styleUrls: ['./update-task-ready.component.css']
})
export class UpdateTaskReadyComponent implements OnInit {
  GetUserNameAndTaskId=new FormGroup({
    userName:new FormControl(''),
    taskId:new FormControl(''),
    statusTaskCompleted: new FormControl(''),
    statucTaskReady: new FormControl('')
  })


  constructor(private _TrackerService:TaskService,private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this._TrackerService.GetParticularTrackerDetails(this._router.snapshot.params.taskId,this._router.snapshot.params.userName).subscribe((result:any)=>{
      this.GetUserNameAndTaskId=new FormGroup({
        userName:new FormControl(result['userName']),
        taskId:new FormControl(result['taskId']),
        statusTaskCompleted: new FormControl(result['statusTaskCompleted']),
        statucTaskReady: new FormControl(result['statucTaskReady'])

      })
    })
  }
  UpdateFormTracker(){
    this._TrackerService.updateTrackerStatus(this.GetUserNameAndTaskId.value).subscribe(res=>{
      console.warn(res);
      
    })
  }


}
