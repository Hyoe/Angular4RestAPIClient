import { Component, OnInit } from '@angular/core';
import { PillarService } from './pillar.service';
import { Pillar } from './pillar';
import { PhotoService } from './photo.service';
import { PhotoComponent } from './photo.component';
import { Photo } from './photo';
// import { OAuthService } from 'angular-oauth2-oidc';

// import {SecretService} from "./secret.service";
// import {AdalService} from "ng2-adal/dist/services/adal.service";

import { Adal4Service } from 'adal-angular4';
import { environment } from '../environments/environment';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})


export class AppComponent implements OnInit {  
  title: string = "Angular Test";

  constructor(private adalSvc: Adal4Service) {
    this.adalSvc.init(environment.adalConfig);
  }
 
  ngOnInit(): void {
    if (!this.adalSvc.userInfo.authenticated) {
      this.adalSvc.login();
    }


    this.adalSvc.handleWindowCallback();

    
  }

  // constructor(private oauthService: OAuthService) { }

  // private async ConfigureAuth(): Promise<void> {
  //   this.oauthService.loginUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/authorize';
  //   this.oauthService.clientId = 'f517cdbc-e3b9-4d75-a019-269421890c4f';
  //   this.oauthService.resource = 'https://angulartestapimssr.azurewebsites.net';
  //   this.oauthService.logoutUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/logout';
  //   this.oauthService.redirectUri = window.location.origin + '/';
  //   this.oauthService.scope = 'openid';
  //   this.oauthService.oidc = true;
  //   this.oauthService.setStorage(sessionStorage);
  // }

  // async ngOnInit() {
  //   await this.ConfigureAuth();
  //   this.oauthService.tryLogin({});

  //   if (!this.oauthService.getAccessToken()) {
  //     await this.oauthService.initImplicitFlow();
  //   }
  //   console.log(this.oauthService.getAccessToken());
  // }
  
}




// constructor(private _httpService: Http) { }  
// title: string = "Angular Test";  
// apiValues: string[] = []; 
// ngOnInit() {  
//     this._httpService.get("http://localhost:41437/api/values").subscribe(values => {  
//         this.apiValues = values.json();  
//     });  
// } 