import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {httpConfig} from '../config/http-config';
import {Observable} from 'rxjs';
import {Token} from './models/token.interface';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private token: string | null = null;

  public get isLoggedin() {

    return this.token !== null;
  }
  constructor(private httpClient: HttpClient) {


  }

  public getLogin(email: string, password: string) {

    return this.httpClient.post(httpConfig.url+'session/login', {
      email, password

    }).pipe(map<Token,Token>(i => {
        this.token = i.acces_token;
        return i;
      })
    )
  }

  public getRegister(username: string, email: string, password: string, passwordConfirm: string): Observable<void> {

    return this.httpClient.post(httpConfig.url + "/session/register", {
      username,
      email,
      password,
      password_confirmation: passwordConfirm
    });
  }


}
