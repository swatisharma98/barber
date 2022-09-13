import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './common/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './common/search/search.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BoxComponent } from './box/box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SmallCardComponent } from './common/small-card/small-card.component';
import { ShopCardComponent } from './common/shop-card/shop-card.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AboutComponent } from './about/about.component'; 
import {MatMenuModule} from '@angular/material/menu';
import { LlComponent } from './ll/ll.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchComponent,
    HeaderComponent,
    BoxComponent,
    SlideshowComponent,
    SmallCardComponent,
    ShopCardComponent,
    SidenavComponent,
    LoginComponent,
    SignUpComponent,
    LoginFormComponent,
    AboutComponent,
    LlComponent,
    HomeComponent,
    EditProfileComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    NgbModule,
    FormsModule,
    MatSidenavModule ,
    MatTabsModule,
    ReactiveFormsModule,
    MatMenuModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
