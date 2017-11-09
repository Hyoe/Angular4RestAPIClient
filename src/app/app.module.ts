import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { AppComponent } from './app.component';  
import { FormsModule } from '@angular/forms';  
import { HttpModule } from '@angular/http';
import { PillarComponent } from './pillar.component';
import { PillarService } from './pillar.service';
import { AppRoutingModule } from './app-routing.module';
import { PillarDetailComponent } from './pillar-detail.component';
import { PhotoComponent } from './photo.component';
import { PhotoService } from './photo.service';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { AdalService } from 'ng2-adal/dist/core';
import { SecretService } from './secret.service';


@NgModule({  
    declarations: [  
        AppComponent,
        PillarComponent,
        PillarDetailComponent,
        PhotoComponent
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
      AdalService,
      SecretService
    ],
    bootstrap: [AppComponent]  
})  
export class AppModule { }  