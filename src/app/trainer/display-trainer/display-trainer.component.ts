import { Component, OnInit } from '@angular/core';
import { UserService} from './../../shared/user.service';

@Component({
  selector: 'app-display-trainer',
  templateUrl: './display-trainer.component.html',
  styleUrls: ['./display-trainer.component.css']
})
export class DisplayTrainerComponent implements OnInit {

  constructor(private service:UserService) { }

  trainerList = [] as any;
  ngOnInit(): void {
    this.service.getTrainer().subscribe(data => { this.trainerList = data });
  }
  deleteTrainer(item)
  {
    
   this.service.deleteTrainer(item).subscribe((result)=>{console.warn("result",result)})
  

  }
}
