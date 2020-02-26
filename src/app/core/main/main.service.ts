import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { of, timer } from 'rxjs';
import { MonitoringData, RefreshTime } from './main.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  url = '../../assets/mock-data.json';
  private interval$ = timer( 0, RefreshTime.interval);

  constructor(private http: HttpClient) { }

  getScorecard() {
    return this.interval$.pipe(
      switchMap(() => 
        this.http.get<MonitoringData[]>(this.url).pipe(
          catchError( x => of(null)),
          filter(x => x != null)
        )
      )
    );
  }
}
