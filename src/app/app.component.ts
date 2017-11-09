import { Component, OnInit } from '@angular/core';
import { PillarService } from './pillar.service';
import { Pillar } from './pillar';
import { PhotoService } from './photo.service';
import { PhotoComponent } from './photo.component';
import { Photo } from './photo';
import { SecretService } from './secret.service';
import { AdalService } from 'ng2-adal/dist/core';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})

export class AppComponent {  
  title: string = "Angular Test";
  profile: any;
  
    constructor(
        private adalService: AdalService,
        private secretService: SecretService) {
        this.adalService.init(this.secretService.adalConfig);
    }
    ngOnInit(): void {
      this.adalService.handleWindowCallback();
      this.adalService.getUser();
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