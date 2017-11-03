import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PillarComponent } from './pillar.component';
import { PillarDetailComponent } from './pillar-detail.component';
import { PhotoComponent } from './photo.component';

const routes: Routes = [
    { path: '', component: PillarComponent },
    { path: 'pillars', component: PillarComponent },
    { path: 'detail/:Id', component: PillarDetailComponent },
    { path: 'photos', component: PhotoComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
export class AppRoutingModule {}