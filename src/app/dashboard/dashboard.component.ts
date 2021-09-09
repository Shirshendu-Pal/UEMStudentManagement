import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  title = 'StudentDashboard';
  studentDetails: any;
  username: any;
  password: any;


  constructor(private studentService: StudentService, private route: ActivatedRoute,
    private router: Router) {
    this.getStudentsDetails();
  }
  ngOnInit(){

    this.username = this.route.snapshot.paramMap.get('username');
    console.log(this.username);
    
    this.password = this.route.snapshot.paramMap.get('password');
    console.log(this.password);
    
  }
  register(registerForm: NgForm){
      this.studentService.registerStudent(registerForm.value).subscribe(
        (resp) => {
          console.log(resp);
          registerForm.reset();
          this.getStudentsDetails();
          
        },(err) => {
          console.log(err);
          
        }
      );
  }
  getStudentsDetails(){
    this.studentService.getStduents().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
        
      },(err) => {
        console.log(err);
        
      }
    );
  }
}