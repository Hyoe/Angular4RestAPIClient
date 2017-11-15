import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Pillar } from './pillar';

import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class PillarService {

    private headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.oauthService.getAccessToken()});
    private pillarsUrl = "https://angulartestapimssr.azurewebsites.net/api/values/getfeature";
    
    // if(isDevMode) {
    //     this.pillarsUrl = "http://localhost:41437/api/values";
    // }

    // private pillarsUrl = "https://angulartestapimssr.azurewebsites.net/api/values/getfeature";
    
    constructor(private http: Http, private oauthService: OAuthService) { }
    
    private async ConfigureAuth(): Promise<void> {
        this.oauthService.loginUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/authorize';
        this.oauthService.clientId = '10e7a440-1b2d-4396-9cf3-90a73d841648';
        this.oauthService.resource = 'https://hyoyoegmail.onmicrosoft.com/6eb52dd1-1712-49d1-9103-ed25485af3e3'; //backend AAD URI
        this.oauthService.logoutUrl = 'https://login.microsoftonline.com/74938eab-1c7b-4d9c-8497-f9c3b262aae0/oauth2/logout';
        this.oauthService.redirectUri =  window.location.origin + '/';
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



    getPillars(): Promise<Pillar[]> {
        return this.http.get(this.pillarsUrl)
            .toPromise()
            .then(response => response.json() as Pillar[])
            .catch(this.handleError);
    }

    getPillar(Id: number): Promise<Pillar> {
        const url = `${this.pillarsUrl}/${Id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Pillar)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }    
}

// export class PillarComponent implements OnInit {  
//     constructor(private _httpService: Http) { }
//     apiValues: string[] = []; 
//     ngOnInit() {  
//         this._httpService.get("http://localhost:41437/api/values").subscribe(values => {  
//             this.apiValues = values.json();  
//         });  
//     }  
//   }

