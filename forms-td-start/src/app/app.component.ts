import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm
  defaultQuestion = 'teacher'
  answer = ''
  genders = ['Male', 'Female']
  submitted = false;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    gender: '',
    answer: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: HTMLFormElement) {
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.signupForm)
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.email
    this.user.secretQuestion = this.signupForm.value.secret
    this.user.answer = this.signupForm.value.questionAnswer
    this.user.gender = this.signupForm.value.gender

    this.signupForm.reset();
  }
}
