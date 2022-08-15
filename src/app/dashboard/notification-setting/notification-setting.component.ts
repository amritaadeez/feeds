import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-notification-setting',
  templateUrl: './notification-setting.component.html',
  styleUrls: ['./notification-setting.component.scss']
})
export class NotificationSettingComponent implements OnInit {

 
  id: any;
  loader: boolean;
  settings: any;


  settingForm: FormGroup;
  spinner: boolean;
  submitted: boolean;
  password: string;

  constructor(private apiService: ApiserviceService,private formBuilder: FormBuilder, private _snackbar: MatSnackBar, private router: Router, private authService: AuthService) {
    this.settingForm = this.formBuilder.group({
      new_post: [],
      post_you_commented_on: [],
      post_you_like: [],
      new_comments_on_your_post: [],
      new_likes_to_your_post: [],
      
    });
  }

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];
    // console.log(this.id)

    this.getSettings()
  }

  getSettings() {
    this.loader = true
    this.apiService.getUserSetting().subscribe(
      (res:any) => {
        this.loader = false
      console.log(res)
      this.settings = res.data
      this.settingForm.controls['new_post'].setValue(this.settings.new_post);
      this.settingForm.controls['post_you_commented_on'].setValue(this.settings.post_you_commented_on);
      this.settingForm.controls['post_you_like'].setValue(this.settings.post_you_like);
      this.settingForm.controls['new_comments_on_your_post'].setValue(this.settings.new_comments_on_your_post);
      this.settingForm.controls['new_likes_to_your_post'].setValue(this.settings.new_likes_to_your_post);
      }, (err:any) => {
        this.loader = false
      }
    );
  }
  onSubmit(data:any){
    this.loader = true
    const formData = new FormData();
      formData.append('new_post', data.new_post);
      formData.append('post_you_commented_on', data.post_you_commented_on);
      formData.append('post_you_like', data.post_you_like);
      formData.append('new_comments_on_your_post', data.new_comments_on_your_post);
      formData.append('new_likes_to_your_post', data.new_likes_to_your_post);
    this.apiService.saveUserSetting(formData).subscribe(
      (res:any) => {
        this.loader = false
      console.log(res)
      this._snackbar.open("Setting Updated Sucessfully", "Thanks", {
        duration: 3000
      });

      }, (err:any) => {
        this.loader = false
        this._snackbar.open("Something Went Wrong", "Try Again", {
          duration: 3000
        });
      }
    );
  }

}
