import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.username=="sid" && this.password=="sid"){
      this.router.navigate([`dashboard/${this.username}/${this.password}`]);
      console.log("loged in");
      
    }else{
      console.log("not");
      alert ("incorrect password");
      this.router.navigate(['login']);
    }
  }
}
