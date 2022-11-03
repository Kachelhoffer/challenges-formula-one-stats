import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getListOfRaces(){
    return this.http.get(`${environment.API_BASE_URL}`)
  }
}
