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
  tokenXAuth : string = "3EGHXyM6xjVPwIsC6vVhu09INGLaG6cM7z0HiTRVymaXKToIBJwAAjE6DpF9AerT"

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
    this.tokenXAuth = "3EGHXyM6xjVPwIsC6vVhu09INGLaG6cM7z0HiTRVymaXKToIBJwAAjE6DpF9AerT"
    this.token = localStorage.getItem("authToken")
    console.log(this.token)
    let header: HttpHeaders;
    header = new HttpHeaders({
      'X-Authorization': this.tokenXAuth,
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + ' ' + this.token,
    });

    return header;
  }

  public createCommentHeader() {
    this.tokenXAuth = "3EGHXyM6xjVPwIsC6vVhu09INGLaG6cM7z0HiTRVymaXKToIBJwAAjE6DpF9AerT"
    this.token = localStorage.getItem("authToken")
    console.log(this.token)
    let header: HttpHeaders;
    header = new HttpHeaders({
      'X-Authorization': this.tokenXAuth,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer' + ' ' + this.token,
    });

    return header;
  }

  public authlogin() {
    this.tokenXAuth = "3EGHXyM6xjVPwIsC6vVhu09INGLaG6cM7z0HiTRVymaXKToIBJwAAjE6DpF9AerT"
    let header: HttpHeaders;
    header = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Authorization': this.tokenXAuth,
    
    });

    return header;
  }

  public forgotAuth() {
    let header: HttpHeaders;
    header = new HttpHeaders({
      'X-Authorization': this.tokenXAuth,
    
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


 

  


  public forgotPassword(data: any) {

    return this.http.post(this.baseUrl + '/users/send_password_reset_email', data, {
      headers: this.forgotAuth()
    });
  }



  public loginSetup(data: any) {
    const params = new HttpParams()
      .set('email', data.emailId)
      .set('password', data.password)
    return this.http.post( this.baseUrl + '/users/authenticate',  params,  {
      headers: this.authlogin()
    });
  }


  public feedList() {
    return this.http.get(this.baseUrl +  '/updates', {
      headers: this.getAuthHeader()
    });
  }

   public aboutDetails() {
    return this.http.get(this.baseUrl +  '/about', {
      headers: this.getAuthHeader()
    });
  }

  public getProfile() {
    return this.http.get(this.baseUrl + '/get_user_profile',  {
      headers: this.getAuthHeader()
    });
  }


  public createLike(id: any) {
    return this.http.post(this.baseUrl +  '/updates/likes/' + id, '', {
      headers: this.getAuthHeader()
    });
  }

  public getFeedDetails(id: any) {
    return this.http.get(this.baseUrl +  '/updates/' + id, {
      headers: this.getAuthHeader()
    });
  }

  public removeLike(id: any) {
    return this.http.delete(this.baseUrl +  '/updates/likes/' + id, {
      headers: this.getAuthHeader()
    });
  }
  public createComment(data: any, id: any) {

    return this.http.post(this.baseUrl + '/updates/comments/' + id , data, {
      headers: this.createCommentHeader()
    });
  }

}
