import { Component, OnInit } from '@angular/core';
import { TaskService} from './../../shared/task.service';
import { createPipeType } from '@angular/compiler/src/render3/r3_pipe_compiler';
import {FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService} from './../../shared/user.service';



@Component({
  selector: 'app-specific-task',
  templateUrl: './specific-task.component.html',
  styleUrls: ['./specific-task.component.css']
})
export class SpecificTaskComponent implements OnInit {

  listTask
  
  constructor(private service: TaskService,private router: ActivatedRoute,) { }

  ngOnInit(): void {
    this.service.getUserSpecificTask(this.router.snapshot.params.id).subscribe(
      res => {
        this.listTask = res;
        
      },
      err => {
        console.log(err);
      },
    );



  }

}
