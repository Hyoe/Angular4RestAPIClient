import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Pillar } from './pillar';
import { OAuthService } from 'angular-oauth2-oidc';
import { User } from './user';

@Injectable()
export class PillarService {    
    // if(isDevMode) {
    //     this.pillarsUrl = "http://localhost:41437/api/values";
    // }

    // private pillarsUrl = "https://angulartestapimssr.azurewebsites.net/api/values/getfeature";
    
    constructor(private http: Http, private oauthService: OAuthService) { }

    private headerOptions = new RequestOptions({
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.oauthService.authorizationHeader()
        })
    });

    //private headers = new Headers('Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.oauthService.getAccessToken());
    private pillarsUrl = "https://angulartestapimssr.azurewebsites.net/api/values/getfeature";     

    getPillars(): Promise<Pillar[]> {
        return this.http.get(this.pillarsUrl, this.headerOptions)
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
    
    getUserName(): Promise<User> {
        let userClaims = new User();
        let claims = this.oauthService.getIdentityClaims();
        userClaims = claims as User;
        return Promise.resolve(userClaims);
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

