import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from './photo';
import { PhotoService } from './photo.service';
import 'rxjs/add/operator/switchMap';

@Component({  
    selector: 'photo',  
    templateUrl: './photo.component.html',  
    styleUrls: ['./app.component.css']  
  })

export class PhotoComponent implements OnInit {
    photos: Photo[];

    constructor(
        private photoService: PhotoService,
        private router: Router) { }
    
    getPhotos(): void {
        this.photoService
            .getPhotos()
            .then(photos => this.photos = photos);
    }

    ngOnInit(): void {
        this.getPhotos();
    }


  }