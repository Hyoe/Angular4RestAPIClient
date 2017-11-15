import { Component, OnInit } from '@angular/core';
import { PillarService } from './pillar.service';
import { Pillar } from './pillar';
import { PhotoService } from './photo.service';
import { PhotoComponent } from './photo.component';
import { Photo } from './photo';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})


export class AppComponent {  
  title: string = "Angular Test";

  // constructor(private oauthService: OAuthService) { }

  // private async ConfigureAuth(): Promise<void> {
  //   this.oauthService.loginUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/authorize';
  //   this.oauthService.clientId = '10e7a440-1b2d-4396-9cf3-90a73d841648';
  //   this.oauthService.resource = 'https://hyoyoegmail.onmicrosoft.com/6eb52dd1-1712-49d1-9103-ed25485af3e3'; //backend AAD URI
  //   this.oauthService.logoutUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/logout';
  //   this.oauthService.redirectUri =  window.location.origin + '/';
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