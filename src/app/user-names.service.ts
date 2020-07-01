import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Username } from '../models/username';


@Injectable({
  providedIn: 'root'
})
export class UserNamesService {
  
  constructor(
  	private http: HttpClient) {

  }

  public getnames() {
  	return this.http.get<Username[]>(`${environment.apiUrl}/usernames`);
  }
}
