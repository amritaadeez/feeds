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
  userID: string;

  constructor(private http: HttpClient, private authService: AuthService, public router: Router) {
this.userID = localStorage.getItem('id')
   
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
  public getAuthHeaderNoContent() {
    this.tokenXAuth = "3EGHXyM6xjVPwIsC6vVhu09INGLaG6cM7z0HiTRVymaXKToIBJwAAjE6DpF9AerT"
    this.token = localStorage.getItem("authToken")
    console.log(this.token)
    let header: HttpHeaders;
    header = new HttpHeaders({
      'X-Authorization': this.tokenXAuth,
      'Authorization': 'Bearer' + ' ' + this.token,
    });

    return header;
  }

  public getQueryParam(searchText:any) {
   let queryParams = new HttpParams();
    queryParams = queryParams.append(
      'query', searchText
    )
    return queryParams;
  }

  public createCommentHeader() {
    this.tokenXAuth = "3EGHXyM6xjVPwIsC6vVhu09INGLaG6cM7z0HiTRVymaXKToIBJwAAjE6DpF9AerT"
    this.token = localStorage.getItem("authToken")
    console.log(this.token)
    let header: HttpHeaders;
    header = new HttpHeaders({
      'X-Authorization': this.tokenXAuth,
      // 'Content-Type': 'application/x-www-form-urlencoded',
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
  public termsService() {
    return this.http.get(this.baseUrl +  '/about/tos', {
      headers: this.getAuthHeader()
    });
  }
  public needHelp() {
    return this.http.get(this.baseUrl +  '/about/help', {
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

  public getAllUser() {
    return this.http.get(this.baseUrl +  '/users', {
      headers: this.getAuthHeader()
    });
  }

  public getSingleUser(id: any) {
    return this.http.get(this.baseUrl +  '/users/' + id, {
      headers: this.getAuthHeader()
    });
  }

  public getUserSetting() {
    return this.http.get(this.baseUrl +  '/users/settings', {
      headers: this.getAuthHeader()
    });
  }
  public saveUserSetting(data: any) {

    return this.http.post(this.baseUrl + '/users/settings', data, {
      headers: this.getAuthHeaderNoContent()
    });
  }

  public userLogout() {
    return this.http.post(this.baseUrl +  '/users/invalidate_token', '', {
      headers: this.getAuthHeader()
    });
  }

  public getUserProfile() {
    return this.http.get(this.baseUrl +  '/users/profile/edit', {
      headers: this.getAuthHeader()
    });
  }

  public getSearchData(searchText: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append(
      'query', searchText
    )
    return this.http.get(this.baseUrl +  '/updates', {
      headers: this.getAuthHeaderNoContent(), 
      params: queryParams
    });
  }
  public getContactSearchData(searchText: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append(
      'query', searchText
    )
    return this.http.get(this.baseUrl +  '/users/search', {
      headers: this.getAuthHeaderNoContent(), 
      params: queryParams
    });
  }

  public updateAvtaar(data: any) {
    return this.http.post(this.baseUrl +  '/users/avatar', data, {
      headers: this.getAuthHeaderNoContent()
    });
  }

  public resetAvtaar(data: any) {
    const params = new HttpParams()
    .set('profile_image_reset', data)
    return this.http.post(this.baseUrl +  '/users/avatar', params, {
      headers: this.getAuthHeaderNoContent()
    });
  }

  public registerView(id: any) {
    return this.http.post(this.baseUrl +  '/updates/register_view/' + id, '', {
      headers: this.getAuthHeaderNoContent()
    });
  }

  public getProfStatus() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append(
      'user_id', this.userID
    )
    return this.http.get(this.baseUrl +  '/users/status', {
      headers: this.getAuthHeaderNoContent(), 
      params: queryParams
    });
  }

  public updateStatus(data: any) {
    return this.http.post(this.baseUrl +  '/users/status/', data, {
      headers: this.getAuthHeaderNoContent()
    });
  }

}
