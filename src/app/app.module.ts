// import { NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';  
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { SignupComponent } from './signup/signup.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     SignupComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule
//   ],
//   providers: [
//     provideClientHydration(withEventReplay())
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';  // Correct import for AngularFire
import { AngularFireAuthModule } from '@angular/fire/compat/auth';  // Import AngularFireAuth for auth
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { firebaseConfig } from './firebase';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';  // Import Firebase configuration from your firebase.ts

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // Initialize Firebase with the configuration from firebase.ts
    AngularFireModule.initializeApp(firebaseConfig),  // Correct Firebase initialization
    AngularFireAuthModule,  // Add AngularFireAuthModule to handle authentication
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
