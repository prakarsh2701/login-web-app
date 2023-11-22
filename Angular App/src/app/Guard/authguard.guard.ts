import { CanActivateFn,Router } from '@angular/router';
import { AuthserviceService } from '../Services/authservice.service';
import { inject } from '@angular/core';

export const authguardGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthserviceService)
  const router = inject(Router)
  
  if(service.isLoggedIn() === true){
    return true;
  }else{
    console.log("Not a user, back to login");
    router.navigate(['login'])
    return false;
  }
};