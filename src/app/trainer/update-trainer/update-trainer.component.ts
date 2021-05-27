import { createPipeType } from '@angular/compiler/src/render3/r3_pipe_compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService} from './../../shared/user.service';
@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.css']
})
export class UpdateTrainerComponent implements OnInit {

  alertTrainer:boolean=false
  public profile:string;
  constructor(private router: ActivatedRoute,private service:UserService) { }
  editTrainer=new FormGroup(
{

  id:new FormControl(''),
  discriminator:new FormControl(''),
  fullName:new FormControl(''),

  age:new FormControl(''),
  gender :new FormControl(''),
  address:new FormControl(''),
  city:new FormControl(''),
  country:new FormControl(''),
  contactNo:new FormControl(''),
  trackName:new FormControl(''),

  userName:new FormControl(''),
  normalizedUserName:new FormControl(''),
  email:new FormControl(''),
  normalizedEmail:new FormControl(''),
  emailConfirmed:new FormControl(''),
  passwordHash:new FormControl(''),
  securityStamp:new FormControl(''),
  concurrencyStamp:new FormControl(''),
  phoneNumber:new FormControl(''),
  phoneNumberConfirmed:new FormControl(''),
  twoFactorEnabled:new FormControl(''),
  lockoutEnd:new FormControl(''),
  lockoutEnabled:new FormControl(''),
  accessFailedCount:new FormControl(''),



}
  )


  ngOnInit(): void {
this.service.getSpecificTrainer(this.router.snapshot.params.id).subscribe((result) => {

  this.editTrainer=new FormGroup({


    id:new FormControl(result['id']),
    discriminator:new FormControl(result['discriminator']),
    fullName:new FormControl(result['fullName']),

    age:new FormControl(result['age']),
    gender :new FormControl(result['gender']),
    address:new FormControl(result['address']),
    city:new FormControl(result['city']),
    country:new FormControl(result['country']),
    contactNo:new FormControl(result['contactNo']),
    trackName:new FormControl(result['trackName']),


  userName:new FormControl(result['userName']),
  normalizedUserName:new FormControl(result['normalizedUserName']),
  email:new FormControl(result['email']),
  normalizedEmail:new FormControl(result['normalizedEmail']),
  emailConfirmed:new FormControl(result['emailConfirmed']),
  passwordHash:new FormControl(result['passwordHash']),
  securityStamp:new FormControl(result['securityStamp']),
  concurrencyStamp:new FormControl(result['concurrencyStamp']),
  phoneNumber:new FormControl(result['phoneNumber']),
  phoneNumberConfirmed:new FormControl(result['phoneNumberConfirmed']),
  twoFactorEnabled:new FormControl(result['twoFactorEnabled']),
  lockoutEnd:new FormControl(result['lockoutEnd']),
  lockoutEnabled:new FormControl(result['lockoutEnabled']),
  accessFailedCount:new FormControl(result['accessFailedCount']),

  })

  })
}

collection()
  {
    this.service.update(this.editTrainer.value).subscribe((result)=>
    this. alertTrainer=true
    )
    console.log(this.editTrainer.value);
  }

  closeAlert()
  {
    this. alertTrainer=false
  }









}