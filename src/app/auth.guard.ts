
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token:any;
  urls: string | null;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.urls = localStorage.getItem('userRole')
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable < boolean > | Promise < boolean > | boolean {
    const url: string = state.url; 
    console.log(url) 
console.log(url.includes('search-post'))
localStorage.setItem('URL', url)
    if(url.includes('search-')){
    }else{
    localStorage.removeItem('searchData')
    this.authService.searchData.next('')

    }
    
    return this.checkLogin(url);

  }

  checkLogin(url: string): boolean {
    this.token = localStorage.getItem('authToken');
    console.log("s", this.token)
    if (this.token == null || '' || undefined) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
