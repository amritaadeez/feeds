import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpEventType,
  HttpParams
} from '@angular/common/http';
import {
  AuthService
} from './auth.service';
import {
  Router
} from '@angular/router';
import {
  environment
} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  baseUrl = environment.apiUrl;
  token: string;


  constructor(private http: HttpClient, private authService: AuthService, public router: Router) {
   
    this.getAuthHeader();
   }


  // public getAuthHeader() {
  //   this.token = localStorage.getItem("authToken")
  //   let header: HttpHeaders;
  //   header = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Authorization': 'Bearer' + ' ' + this.token,
  //   });

  //   return header;
  // }

  public getAuthHeader() {
    this.token = localStorage.getItem("authToken")
    let header: HttpHeaders;
    header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + ' ' + this.token,
    });

    return header;
  }


  public authlogin() {
    this.token = "3EGHXyM6xjVPwIsC6vVhu09INGLaG6cM7z0HiTRVymaXKToIBJwAAjE6DpF9AerT"
    let header: HttpHeaders;
    header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer' + ' ' + this.token,
    
    });

    return header;
  }


  public login(data: any) {
    const body = {
      email_address: data.emailId,
      password: data.password
    };

    return this.http.post(this.baseUrl + '/signin', body);
  }


 

  public register(data: any) {
    const body = {
      first_name: data.firstName,
      last_name: data.lastName,
      email_address: data.emailId,
      password: data.password,
      confirm_password: data.cpassword,
      country_code: data.countryCode,
      phone: data.phone
    };

    return this.http.post(this.baseUrl + '/signup', body);
  }


  public forgotPassword(data: any) {
    const body = {
      email_address: data.emailId,
    };

    return this.http.post(this.baseUrl + '/forgot_password', body);
  }

  public loginSetup(data: any) {
    const params = new HttpParams()
      .set('email', data.emailId)
      .set('password', data.password)
    return this.http.post( this.baseUrl + '/users/authenticate',  params,  {
      headers: this.authlogin()
    });
  }


  public counytryList() {
    return this.http.get(this.baseUrl +  '/countrycode');
  }

  public getProfile() {
   
    return this.http.get(this.baseUrl + '/get_user_profile',  {
      headers: this.getAuthHeader()
    });
  }
  
  public updateProfile(data: any) {
    const body = {
      first_name: data.firstName,
      last_name: data.lastName,
      country_code: data.countryCoded,
      phone: data.phone
    }

    return this.http.put(this.baseUrl + '/update_user_profile', body ,  {
      headers: this.getAuthHeader()
    });
  }


  public changePassword(data: any) {
    const body = {
     old_password: data.password,
     new_password: data.cpassword
    }

    return this.http.post(this.baseUrl + '/change_password', body ,  {
      headers: this.getAuthHeader()
    });
  }


}
