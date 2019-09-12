import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatuses: string[] = ['Stable', 'Critical', 'Finished'];
  
  forbiddenProjectNames: string[] = ['Stable', 'Test'];
  
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'status': new FormControl('Stable')
    });
    
/*    this.projectForm.patchValue({
        'status': 'Stable'
      }
    );*/
  }
  
  onSubmit() {
    console.log('*** projectForm ', this.projectForm);
    
    this.projectForm.reset();
  }
  
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
  
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    
    return promise;
  }
}
