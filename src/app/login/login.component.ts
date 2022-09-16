import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup,FormControl, Validators, AsyncValidatorFn} from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public dialog:any;

  constructor(private router: Router) {
   
   }

  ngOnInit(): void {
  }

  name= 'Swati';

  val=true;

  
  formStatus:any;
  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,this.validate],this.NaEmails as AsyncValidatorFn),
    password: new FormControl('')
  });

  // onSubmit(){
  //   console.log('this',this.profileForm);
  //   console.log(this.profileForm.get('email')?.valid);
  //   this.profileForm.reset();
  // }

  onSignUp(value:any){
   this.val= value;
  }

  onSubmit(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  validate(control:FormControl){
    console.log('control.value',control.value);

    var re = /\S+@\S+\.\S+/;
    if(!re.test(control.value)){
      return {'invalidEmail':true}
    }
   
    return null;
  }



  //async validator
  NaEmails(control:FormControl):Promise<any> | Observable<any>{
    const myResponse = new Promise<any>((resolve,reject)=>{
      setTimeout(() =>{
        if(control.value ==='s@gmail.com'){
          resolve({'emailNotAllowed':true})
        }else{
          resolve(null)
        }
      },1500);
    })
    return myResponse;
  }


}
