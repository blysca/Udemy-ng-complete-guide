import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  private firstObsSubscription: Subscription;
  
  constructor() {
  }
  
  ngOnInit() {
    /*this.firstObsSubscription = interval(250)
      .subscribe(
        (count) => {
          console.log('*** count = ', count);
        }
      );*/
    
    const customIntervarObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        
        count++;
      }, 500);
    });
    
    this.firstObsSubscription = customIntervarObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      ).subscribe(data => {
        console.log('*** data = ', data);
      }, error => {
        console.log('*** error ', error);
        //alert(error.message);
      }, () => {
        console.log('*** completed! ');
        //alert(error.message);
      });
  }
  
  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
  
}
