import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../servicios/seo.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public seo: SeoService, private title: Title, public router: Router) {
    console.log(window.location.host);
  }

  ngOnInit() {
    let titulo: string = 'Angular Seo - Pagina Principal';
    this.title.setTitle(titulo);
    this.seo.generateTags({
      title: 'Angular SEO - Pagina Principal - Lucas Suarez',
      description: 'Este es la pagina principal del proyecto de Angular SEO',
      slug: this.router.url,
      host: window.location.host
    });
  }

}
