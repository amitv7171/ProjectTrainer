import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   TaskUrl="https://localhost:44304/api/Task";
   TaskUrlTrack="https://localhost:44304/api/Tracker";

   TrackerDetails="https://localhost:44304/api/Tracker/getparticulardata";

   url="https://localhost:44304/api/Tracker";


  constructor(private http: HttpClient) { }

  
  private handleError(errorResponse: HttpErrorResponse) {
   
    console.log(errorResponse.error);
    alert('We are Under Constructon! Try Again Later!');
    return throwError('There is problem in service');
  }

  GetAllTasksRelatedToTrack(TaskName:any){
   // console.warn(TaskName);
    //`${this.CustomerProductsUrl}/${data}`
    
    return this.http.get(`${this.TaskUrl+"/Get"}/${TaskName}`).pipe(catchError(this.handleError));
  }
  GetParticularDataById(Id:any){
    // console.warn(TaskName);
     //`${this.CustomerProductsUrl}/${data}`
     
     return this.http.get(`${this.TaskUrl+"/GetById"}/${Id}`).pipe(catchError(this.handleError));
   }
  AddTaskDetails(data:any){
    return this.http.post(this.TaskUrl+"/PostTaskDetails",data);
  }
  UpdateTheTaskDetails(id:any,data:any){
    return this.http.put(`${this.TaskUrl+"/PutDetailsIntoTask"}/${id}`,data);

  }
  
  DeleteTaskWithID(TaskId:any){
    // console.warn(TaskName);
     //`${this.CustomerProductsUrl}/${data}`
     
     return this.http.delete(`${this.TaskUrl+"/DeleteTask"}/${TaskId}`);
   }

   getUserSpecificTask(id)
   {
    return this.http.get(`${this.TaskUrlTrack+"/GetAllTracks"}/${id}`).pipe(catchError(this.handleError));
   }



   GetParticularTrackerDetails(id:any,name:any){
    return this.http.get(`${this.TrackerDetails}/${id}/${name}`).pipe(catchError(this.handleError));
  }
  updateTrackerStatus(data:any){
    return this.http.put(this.url,data).pipe(catchError(this.handleError));
  }

  GetList(name)
  {
    return this.http.get(`https://localhost:44304/api/Tracker/dashboard/${name}`).pipe(catchError(this.handleError));
  }




}