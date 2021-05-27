import { Injectable } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44337/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Age: [''],
    Gender: [''],
    Address: [''],
    City: [''],
    Country: [''],
    ContactNo: [''],

    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }


  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Age: this.formModel.value.Age,
      Gender: this.formModel.value.Gender,
      Address: this.formModel.value.Address,
      City: this.formModel.value.City,
      Country: this.formModel.value.Country,
      ContactNo: this.formModel.value.ContactNo,

      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }



  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }



 getTrainer()
 {
  return this.http.get('https://localhost:44304/api/AspNetUsers'); 
 }

 deleteTrainer(id)
  {
    return this.http.delete(`https://localhost:44304/api/AspNetUsers/${id}`);
  }

  getSpecificTrainer(id)
  {
    return this.http.get(`https://localhost:44304/api/AspNetUsers/${id}`);
  }
  
  updateTrainer(id,data)
  {
    return this.http.put(`https://localhost:44304/api/AspNetUsers/${id}`,data);
  }
  update(data:any):  Observable<any>
  {
    return this.http.put('https://localhost:44304/api/AspNetUsers',data);
  }


}
