import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  API = "http://localhost:9090";
  public registerStudent(studentData: any){
    return this.http.post(this.API+"/registerStudent",studentData);
  }

  public getStduents(){
    return this.http.get(this.API+"/getStudents");
  }
}
