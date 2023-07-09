import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required, this.customProjectNameValidator]),
      email: new FormControl(null, [Validators.required, Validators.email], this.asyncEmailValidator),
      projectStatus: new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.projectForm);
    // this.projectForm.reset();
  }

  asyncEmailValidator(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailForbidden': true})
        } else {
          resolve(null)
        }
      } , 2000)
    });

    return promise;
  }

  customProjectNameValidator(control: FormControl) : {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'invalidEmail': true}
    }

    return null;
  }

}
