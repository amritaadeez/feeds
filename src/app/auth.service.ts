import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;
  resetUrl = new BehaviorSubject < any > ('');
  searchData = new BehaviorSubject < any > ('');
  profilePic = new BehaviorSubject < any > ('');
  
  constructor() { 

 
  }
}
