import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   TaskUrl="https://localhost:44304/api/Task";
   TaskUrlTrack="https://localhost:44304/api/Tracker";

   TrackerDetails="https://localhost:44304/api/Tracker/getparticulardata";

   url="https://localhost:44304/api/Tracker";


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
    return this.http.post(this.TaskUrl+"/PostTaskDetails",data);
  }
  UpdateTheTaskDetails(id:any,data:any){
    return this.http.put(`${this.TaskUrl+"/PutDetailsIntoTask"}/${id}`,data);

  }
  
  DeleteTaskWithID(TaskId:any){
    // console.warn(TaskName);
     //`${this.CustomerProductsUrl}/${data}`
     
     return this.http.delete(`${this.TaskUrl+"/Delete"}/${TaskId}`);
   }

   getUserSpecificTask(id)
   {
    return this.http.get(`${this.TaskUrlTrack+"/GetAllTracks"}/${id}`);
   }



   GetParticularTrackerDetails(id:any,name:any){
    return this.http.get(`${this.TrackerDetails}/${id}/${name}`);
  }
  updateTrackerStatus(data:any){
    return this.http.put(this.url,data)
  }

  GetList(name)
  {
    return this.http.get(`https://localhost:44304/api/Tracker/dashboard/${name}`)
  }




}