import { Component, OnInit } from '@angular/core';

import {AuthServiceService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  private email: string;
  constructor(private authService: AuthServiceService, private router:Router) { }

  ngOnInit() {
    this.authService.getLogin('','').subscribe(i => {

    })
  }

  login() {
    this.authService.getLogin(this.email,this.password).subscribe(i => {
    this.router.navigate(['user/']);
    });
  }

}
