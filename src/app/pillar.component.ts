import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pillar } from './pillar';
import { PillarService } from './pillar.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { User } from './user';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({  
    selector: 'pillar',  
    templateUrl: './pillar.component.html',  
    styleUrls: ['./app.component.css']  
})

export class PillarComponent implements OnInit {
    pillars: Pillar[];
    selectedPillar: Pillar;
    userName: User;


    constructor(
        private pillarService: PillarService,
        private router: Router,
        private oauthService: OAuthService,
    ) { }
    
    getPillars(): void {
        this.pillarService
            .getPillars()
            .then(pillars => this.pillars = pillars);
    }

    ngOnInit(): void {
        this.getPillars();
        this.getUserName();
    }

    onSelect(pillar: Pillar): void {
        this.selectedPillar = pillar;
    }

    getUserName(): void {
        this.pillarService
            .getUserName()
            .then(userName => this.userName = userName)
    }

    // gotoDetail(): void {
    //     this.router.navigate(['/detail', this.selectedPillar.Id]);
    // }




    // constructor(private _httpService: Http) { }
    // apiValues: string[] = []; 
    // ngOnInit() {  
    //     this._httpService.get("http://localhost:41437/api/values").subscribe(values => {  
    //         this.apiValues = values.json();  
    //     });  
    // }  
  }
