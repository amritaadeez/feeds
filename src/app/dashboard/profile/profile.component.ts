import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MatDialog
} from '@angular/material/dialog';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  Router
} from '@angular/router';
import {
  ApiserviceService
} from 'src/app/apiservice.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileData: any;
  updateProfileForm: FormGroup;
  spinner: boolean;
  submitted: boolean;
  fieldTextType: boolean;
  countryCode: any;
  password: string;
  cpassword: string;
  confirmType: boolean;
  loader: boolean;
  showCP: boolean = false;
  changePasswordForm: FormGroup;
  selectImg: any;
  avatar: any;
  display: boolean = false;
  file: any;
  dummyImage: boolean = false;
  userStatus: any;
  statusArray = ["Available", 'Away', 'Do not disturb']
  checkTick: boolean = false;
  selectedIndex: any;
  selectedStatus: any;
  modalClose = ''
  spinner1: boolean = false;

  constructor(private apiService: ApiserviceService, private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    public router: Router, public dialog: MatDialog, private authService: AuthService) {


    this.updateProfileForm = this.formBuilder.group({
      name: ['',
      // [Validators.required ], [Validators.pattern("[A-Za-z ]*")]
      ],
      jobTITLE: ['',
      // [Validators.required ], [Validators.pattern("[A-Za-z ]*")]
      ],
      organization: ['',
      // [Validators.required ], [Validators.pattern("[A-Za-z ]*")]
      ],

      department: ['',
      // [Validators.required ], [Validators.pattern("[A-Za-z ]*")]
      
    ]
    

    });
    // this.avatar = JSON.parse(localStorage.getItem("data"));



    
  }


  get profileGetter() {
    return this.updateProfileForm.controls;
  }

  ngOnInit(): void {
    this.avatar = localStorage.getItem("avatar");

    if(this.avatar == 'null'){
    localStorage.setItem('avatar', '')
    this.avatar = localStorage.getItem("avatar");
     }
    this.selectImg = this.avatar  
    this.getProfile()
     this.getUserStatus()

  }

  getUserStatus(){
    this.apiService.getProfStatus().subscribe(
    (res:any) =>{

      console.log(res)
      this.userStatus = res.data.status[3]
      
    },
    (error:any) =>{
      console.log(error)
    }
    );
  }

  setStatus(data:any, index: any){
    this.selectedIndex = 'i'
   this.selectedStatus = data
   if(index != 4){
    this.updateStatus()
   }
  }

  changeStatus(){
    for (let i = 0; i < this.statusArray.length; i++){
      if(this.statusArray[i] == this.userStatus){
        this.checkTick = true;
        this.selectedIndex = i
        
      console.log(this.userStatus, this.statusArray[i], this.checkTick, this.selectedIndex)
      return 
      }else{
      this.checkTick = false;
      this.selectedIndex = 'i'
      console.log(this.userStatus, this.statusArray[i], this.checkTick, this.selectedIndex)

      }
    }
  }

  updateStatus(){
    this.spinner1 = true
    const formData = new FormData();
    formData.append('status_text', this.selectedStatus);
    this.apiService.updateStatus(formData).subscribe(
      (response: any) => {
        // this.spinner1 = false
        this._snackBar.open("Status Updated Sucessfully", "Thanks", {
          duration: 3000
        });

      
      window.location.reload()
      // this.apiService.getProfStatus().subscribe(
      //   (res:any) =>{
    
      //     console.log(res)
      //     this.userStatus = res.data.status[3]
      //     // this.changeStatus()
      //     this.getProfile()
      //   },
      //   (error:any) =>{
      //     console.log(error)
      //   }
      //   );
      
      }, (error: any) => {
        this.spinner1 = false
        
        this._snackBar.open("Please try again after sometime", "Cancel");

      }
    );
  }

  showEdit(){
    this.display = false
    this.selectImg = this.avatar
  }

  onFileSelected(event: any){
this.file = event.target.files[0]
const reader = new FileReader();
if(event.target.files && event.target.files.length) {
  const [file] = event.target.files;
  reader.readAsDataURL(file);
 
  reader.onload = () => {

    this.selectImg = reader.result as string;
    this.display =true
  };

}
  }

  updateAvtaar(){
    this.spinner = true;
    this.submitted = true;
      const formData = new FormData();
      formData.append('avatar', this.file);
      this.apiService.updateAvtaar(formData).subscribe(
        (response: any) => {
          this.spinner = false
          this.display = false
          this.dummyImage = false
         localStorage.setItem('avatar', response.data.avatar)
         this.avatar = localStorage.getItem('avatar')
          this.authService.profilePic.next(this.avatar)
          this._snackBar.open("Profile Picture Updated", "Thanks", {
            duration: 3000
          });

        this.getProfile()
        
        
        }, (error: any) => {
          this.spinner = false
          
          this._snackBar.open("Please try again after sometime", "Cancel");

        }
      );
    
  }

  resetAvtaar(){
    this.spinner = true;
    const deleteAvatar = true
      this.apiService.resetAvtaar(deleteAvatar).subscribe(
        (response: any) => {
          this.spinner = false
          this.display = false
          this.dummyImage = true
          localStorage.setItem('avatar', '')
          this.authService.profilePic.next('')
          this._snackBar.open("Profile Picture Removed", "Thanks", {
            duration: 3000
          });

        
        
        }, (error: any) => {
          this.spinner = false
          
          this._snackBar.open('Please try again after sometime', "Cancel");

        }
      );
    
  }

  getProfile() {
    this.spinner = true;
    this.apiService.getUserProfile().subscribe(
      (res: any) => {
    this.spinner = false;

        this.profileData = res.groups.general.fields
        this.updateProfileForm.patchValue({
          name: this.profileData[0]?.value,
          jobTITLE: this.profileData[2]?.value,
          organization: this.profileData[4]?.value,
          department: this.profileData[3]?.value,
        });
      },
      (err: any) => {
    this.spinner = false;

        console.log(err)
      }
    );
  }
 
}
