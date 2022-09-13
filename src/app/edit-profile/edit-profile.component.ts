import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, AsyncValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }

  name= 'Swati';

  
  formStatus:any;
  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,this.validate],this.NaEmails as AsyncValidatorFn),
    password: new FormControl('')
  });

  onSubmit(){
    console.log('this',this.profileForm);
    console.log(this.profileForm.get('email')?.valid);
    this.profileForm.reset();
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
