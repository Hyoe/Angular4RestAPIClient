import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { AppComponent } from './app.component';  
import { FormsModule } from '@angular/forms';  
import { Http, HttpModule } from '@angular/http';
import { PillarComponent } from './pillar.component';
import { PillarService } from './pillar.service';
import { AppRoutingModule } from './app-routing.module';
import { PillarDetailComponent } from './pillar-detail.component';
import { PhotoComponent } from './photo.component';
import { PhotoService } from './photo.service';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
// import { OAuthService } from 'angular-oauth2-oidc';
// import { UrlHelperService } from 'angular-oauth2-oidc';
// import { AdalService } from 'ng2-adal/dist/core';
// import { SecretService } from './secret.service';
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';
import { LoginComponent } from './login/login.component';


@NgModule({  
    declarations: [  
        AppComponent,
        PillarComponent,
        PillarDetailComponent,
        PhotoComponent,
        LoginComponent
    ],  
    imports: [  
        BrowserModule,  
        FormsModule,  
        HttpModule,
        AppRoutingModule,
        DragulaModule
    ],
    providers: [
      PillarService,
      PhotoService,
    //   OAuthService,
    //   UrlHelperService,
    //   AdalService,
    //   SecretService,
      Adal4Service,
      {
          provide: Adal4HTTPService,
          useFactory: Adal4HTTPService.factory,
          deps: [Http, Adal4Service]
      }
    ],
    bootstrap: [AppComponent]  
})  
export class AppModule { }  