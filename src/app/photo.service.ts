import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Photo } from './photo';

@Injectable()
export class PhotoService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private photosUrl = "https://jsonplaceholder.typicode.com/photos";
    
    constructor(private http: Http) { }

    getPhotos(): Promise<Photo[]> {
        return this.http.get(this.photosUrl)
            .toPromise()
            .then(response => response.json() as Photo[])
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }    
}