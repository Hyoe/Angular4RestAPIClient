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

}




// constructor(private _httpService: Http) { }  
// title: string = "Angular Test";  
// apiValues: string[] = []; 
// ngOnInit() {  
//     this._httpService.get("http://localhost:41437/api/values").subscribe(values => {  
//         this.apiValues = values.json();  
//     });  
// } 