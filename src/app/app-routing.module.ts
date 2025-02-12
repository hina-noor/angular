// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';  // Import SignupComponent
import { LoginComponent } from './login/login.component';  // Import LoginComponent
import { HomeComponent } from './home/home.component';  // Import HomeComponent (if applicable)
// import { CartComponent } from './cart/cart.component';
const routes: Routes = [

  { path: '', redirectTo: 'signup', pathMatch: 'full' }, // Default Route
  { path: 'home', component: HomeComponent },  // Route to the home page
  { path: 'signup', component: SignupComponent },  // Route to the signup page
  { path: 'login', component: LoginComponent },  // Route to the login page
  // { path: 'cart', component: CartComponent },

  // Other routes can be added here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Register routes with Angular's RouterModule
  exports: [RouterModule]  // Export RouterModule to make routing available throughout the app
})
export class AppRoutingModule { }

