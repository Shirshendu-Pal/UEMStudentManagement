import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentDashboard';
  studentDetails: any;


  constructor(private studentService: StudentService) {
    this.getStudentsDetails();
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
