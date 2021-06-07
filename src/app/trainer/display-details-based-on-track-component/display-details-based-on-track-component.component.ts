import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-display-details-based-on-track-component',
  templateUrl: './display-details-based-on-track-component.component.html',
  styleUrls: ['./display-details-based-on-track-component.component.css']
})
export class DisplayDetailsBasedOnTrackComponentComponent implements OnInit {

  constructor(private service:UserService,private _router: ActivatedRoute) { }
  trainerList = [] as any;
  ngOnInit(): void {
    console.warn(this._router.snapshot.params.name);
    
    this.service.getTrackTrainersDetails(this._router.snapshot.params.name).subscribe(data => { this.trainerList = data });
 
  }

}
