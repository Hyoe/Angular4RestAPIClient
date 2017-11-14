import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Pillar } from './pillar';
import { Adal4HTTPService } from 'adal-angular4';
import { environment } from '../environments/environment';

@Injectable()
export class PillarService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private pillarsUrl = "https://angulartestapimssr.azurewebsites.net/api/values/getfeature";

    private photosUrl = "https://jsonplaceholder.typicode.com/photos";
    
    // if(isDevMode) {
    //     this.pillarsUrl = "http://localhost:41437/api/values";
    // }

    // private pillarsUrl = "https://angulartestapimssr.azurewebsites.net/api/values/getfeature";
    
    constructor(private http: Adal4HTTPService) { }

    getPillars(): Promise<Pillar[]> {
        return this.http.get(this.photosUrl)
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

