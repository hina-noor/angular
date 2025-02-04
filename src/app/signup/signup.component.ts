import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Import AngularFireAuth
import { Router } from '@angular/router';  // To navigate to other routes (e.g. after successful signup)

@Component({
  selector: 'app-signup',
  standalone:false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,  // Inject AngularFireAuth service
    private router: Router  // Inject router to navigate after successful signup
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { 
      validator: this.passwordMatcher 
    });
  }

  // Custom validator to check if passwords match
  passwordMatcher(control: FormGroup) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { mismatch: true };
    }
    return null;
  }

  // On form submission
  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }

    const { email, password } = this.signupForm.value;

    // Use Firebase authentication to create a new user
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('User created successfully', result);
        this.router.navigate(['/home']);  // Redirect to login page after successful signup
      })
      .catch((error) => {
        console.error('Error during signup', error);
        // Display appropriate error messages to the user
      });
  }
}
