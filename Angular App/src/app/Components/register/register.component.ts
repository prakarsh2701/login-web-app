import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/Services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user= {firstName: '',
  dob : '',
  email: '',
  password: '',
  confirmPassword:''
}

constructor(private svc: AuthserviceService,private router: Router){}
  onSubmit() {
    //console.log('Form submitted:', this.user.name, this.user.dob, this.user.email, this.user.password);
    const registerData = {
      firstName: this.user.firstName,
      dob: this.user.dob,
      email: this.user.email,
      password: this.user.password
    };
    this.svc.register(registerData).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['login'])
      }
      })
  }
}
