import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/Services/authservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user= { email:'', password:''};

  constructor(private svc: AuthserviceService,private router: Router){}

  onSubmit(){
    this.svc.login(this.user).subscribe({
      next: (response) => {
        console.log(response);
        this.svc.storeToken(response.data);
        this.router.navigate(['home'])
      }
      })
  }
}
