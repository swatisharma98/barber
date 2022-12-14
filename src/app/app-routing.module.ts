import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from '././about/about.component';
import { LoginComponent } from './login/login.component';
import {LlComponent} from '././ll/ll.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ServiceComponent } from './service/service.component';
import { CardComponent } from './common/card/card.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'bleach',component:ServiceComponent},
  {path:'Hair-Cut',component:ServiceComponent},
  {path:'login',component: LoginComponent},
  {path:'my/profile/edit',component:EditProfileComponent},
  {path:'my/cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
