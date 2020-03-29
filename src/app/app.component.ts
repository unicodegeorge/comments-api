import { Component } from '@angular/core';
import {AuthServiceService} from './services/auth-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comments-api';

  constructor(authService: AuthServiceService) {

  }
}
