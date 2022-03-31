import {Component} from '@angular/core';
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mauzo-fe';
  isUserLoggedIn = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    let storeData = localStorage.getItem('isUserLoggedIn');
    console.log('StoreData: ' + storeData);

    this.isUserLoggedIn = storeData != null && storeData == 'true';
  }
}
