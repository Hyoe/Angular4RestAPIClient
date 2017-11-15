import { Component, OnInit } from '@angular/core';
import { PillarService } from './pillar.service';
import { Pillar } from './pillar';
import { PhotoService } from './photo.service';
import { PhotoComponent } from './photo.component';
import { Photo } from './photo';
import { OAuthService } from 'angular-oauth2-oidc';
import { Headers, Http, RequestOptions } from '@angular/http';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})


export class AppComponent implements OnInit {  
  title: string = "Angular Test";

  constructor(private oauthService: OAuthService, private http: Http) { }

  private async ConfigureAuth(): Promise<void> {
    this.oauthService.loginUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/authorize'; //endpoint

    this.oauthService.tokenEndpoint = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/token'; //endpoint


    this.oauthService.clientId = '10e7a440-1b2d-4396-9cf3-90a73d841648'; //application ID
    this.oauthService.resource = 'https://hyoyoegmail.onmicrosoft.com/6eb52dd1-1712-49d1-9103-ed25485af3e3'; //backend AAD URI
    this.oauthService.logoutUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/logout'; //endpoint
    this.oauthService.redirectUri =  window.location.origin + '/';
    //this.oauthService.scope = 'openid';
    this.oauthService.oidc = true;
    this.oauthService.setStorage(sessionStorage);
    //this.oauthService.oidc = false;
    this.oauthService.scope = 'openid profile email offline_access roles identity';
    //this.oauthService.setupAutomaticSilentRefresh();
  }

  async ngOnInit() {
    await this.ConfigureAuth();
    this.oauthService.tryLogin({
      validationHandler: context => {
        var search = new URLSearchParams();
        search.set('token', context.idToken); 
        search.set('client_id', this.oauthService.clientId);
        return this.http.get('https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/authorize', { search }).toPromise();
    }
    });

    if (!this.oauthService.getAccessToken()) {
      await this.oauthService.initImplicitFlow();
    }
    console.log("access token - " + this.oauthService.getAccessToken());
    console.log("Id token - " + this.oauthService.getIdToken());
    console.log("expiration - " + this.oauthService.getAccessTokenExpiration());
    console.log("identity claims - " + this.oauthService.getIdentityClaims());
    console.log("has valid id token - " + this.oauthService.hasValidIdToken());
    console.log("has valid access token - " + this.oauthService.hasValidAccessToken());
    console.log("authorization header - " + this.oauthService.authorizationHeader());

    // this.oauthService.refreshToken().then(() => {
    //   console.debug('ok');
    // })
  }
  
}




// constructor(private _httpService: Http) { }  
// title: string = "Angular Test";  
// apiValues: string[] = []; 
// ngOnInit() {  
//     this._httpService.get("http://localhost:41437/api/values").subscribe(values => {  
//         this.apiValues = values.json();  
//     });  
// } 