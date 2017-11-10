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

  constructor(private oauthService: OAuthService) { }

  private async ConfigureAuth(): Promise<void> {
    this.oauthService.loginUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/authorize';
    this.oauthService.clientId = '4269bbc8-3492-43e9-bb53-56901682d7e1';
    this.oauthService.resource = 'https://angulartestapimssr.azurewebsites.net';
    this.oauthService.logoutUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/logout';
    this.oauthService.redirectUri = window.location.origin + '/';
    this.oauthService.scope = 'openid';
    this.oauthService.oidc = true;
    this.oauthService.setStorage(sessionStorage);
  }

    async ngOnInit() {
      await this.ConfigureAuth();
      this.oauthService.tryLogin({});

      if (!this.oauthService.getAccessToken()) {
        await this.oauthService.initImplicitFlow();
      }
      console.log(this.oauthService.getAccessToken());
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