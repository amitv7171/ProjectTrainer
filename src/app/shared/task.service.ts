import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   TaskUrl="https://localhost:44304/api/Task";

  constructor(private http: HttpClient) { }

  GetAllTasksRelatedToTrack(TaskName:any){
   // console.warn(TaskName);
    //`${this.CustomerProductsUrl}/${data}`
    
    return this.http.get(`${this.TaskUrl+"/Get"}/${TaskName}`);
  }
  GetParticularDataById(Id:any){
    // console.warn(TaskName);
     //`${this.CustomerProductsUrl}/${data}`
     
     return this.http.get(`${this.TaskUrl+"/GetById"}/${Id}`);
   }
  AddTaskDetails(data:any){
    return this.http.post(this.TaskUrl+"/Post",data);
  }
  UpdateTheTaskDetails(id:any,data:any){
    return this.http.put(`${this.TaskUrl+"/Put"}/${id}`,data);

  }
  
  DeleteTaskWithID(TaskId:any){
    // console.warn(TaskName);
     //`${this.CustomerProductsUrl}/${data}`
     
     return this.http.delete(`${this.TaskUrl+"/Delete"}/${TaskId}`);
   }

  

}