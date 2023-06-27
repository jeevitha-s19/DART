import { NgModule} from '@angular/core';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HowtouseComponent } from './howtouse/howtouse.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    HowtouseComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
