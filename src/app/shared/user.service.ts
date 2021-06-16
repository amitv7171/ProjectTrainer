import { Injectable } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { data } from 'jquery';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


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

  private handleError(errorResponse: HttpErrorResponse) {
   
    console.log(errorResponse.error);
    alert('We are Under Constructon! Try Again Later!');
    
    return throwError('There is problem in service');
  }

  private ShowUpdate(errorResponse: HttpErrorResponse) {
   
    console.log(errorResponse.error);
    alert('Track Update Succesfully!');
    
    return throwError('Data Updated');
  }
  private ShowDeleted(errorResponse: HttpErrorResponse) {
   
    console.log(errorResponse.error);
    alert('User Deleted Succesfully!');
    
    return throwError('Data Updated');
  }

 getTrainer()
 {
  return this.http.get('https://localhost:44304/api/AspNetUsers').pipe(catchError(this.handleError));
 }

 deleteTrainer(id)
  {
    return this.http.delete(`https://localhost:44304/api/AspNetUsers/${id}`).pipe(catchError(this.ShowDeleted));
  }

  getSpecificTrainer(id)
  {
    return this.http.get(`https://localhost:44304/api/AspNetUsers/${id}`).pipe(catchError(this.handleError));
  }
  
  updateTrainer(id,data)
  {
    return this.http.put(`https://localhost:44304/api/AspNetUsers/${id}`,data).pipe(catchError(this.handleError));
  }
  update(data:any):  Observable<any>
  {
    return this.http.put('https://localhost:44304/api/AspNetUsers',data).pipe(catchError(this.handleError));
  }

  postTrackToTracker(id,data)
  {
   return this.http.post(`https://localhost:44304/api/Tracker/${id}`,data).pipe(catchError(this.ShowUpdate));
  }


  getTrackTrainersDetails(trackName:any)
 {
  return this.http.get('https://localhost:44304/api/Tracker/GetTrainers/'+trackName).pipe(catchError(this.handleError));
 }

}
