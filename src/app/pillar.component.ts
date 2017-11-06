import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pillar } from './pillar';
import { PillarService } from './pillar.service';
import 'rxjs/add/operator/switchMap';

@Component({  
    selector: 'pillar',  
    templateUrl: './pillar.component.html',  
    styleUrls: ['./app.component.css']  
  })

export class PillarComponent implements OnInit {
    pillars: Pillar[];
    selectedPillar: Pillar;

    constructor(
        private pillarService: PillarService,
        private router: Router) { }
    
    getPillars(): void {
        this.pillarService
            .getPillars()
            .then(pillars => this.pillars = pillars);
    }

    ngOnInit(): void {
        this.getPillars();
    }

    onSelect(pillar: Pillar): void {
        this.selectedPillar = pillar;
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
