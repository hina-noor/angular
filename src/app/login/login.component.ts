import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Import AngularFireAuth
import { Router } from '@angular/router';  // To navigate to other routes (e.g. after successful login)

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,  // Inject AngularFireAuth service
    private router: Router  // Inject router to navigate after successful login
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // On form submission
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    // Use Firebase authentication to sign in the user
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('User logged in successfully', result);
        this.router.navigate(['/home']);  // Redirect to home page after successful login
      })
      .catch((error) => {
        console.error('Error during login', error);
        // Display appropriate error messages to the user
      });
  }
}
