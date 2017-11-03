import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Pillar } from './pillar';
import { PillarService } from './pillar.service';


@Component({
    selector: 'pillar-detail',
    templateUrl: './pillar-detail.component.html',
    styleUrls: [ './app.component.css' ]
})
export class PillarDetailComponent implements OnInit {
    pillar: Pillar;

    constructor(
        private pillarService: PillarService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
          .switchMap((params: ParamMap) => this.pillarService.getPillar(+params.get('Id')))
          .subscribe(pillar => this.pillar = pillar);
    }

    goBack(): void {
        this.location.back();
    }
}