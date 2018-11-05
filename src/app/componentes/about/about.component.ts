import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/servicios/seo.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public seo: SeoService, private title: Title, public router: Router) { }

  ngOnInit() {
    let titulo: string = 'Angular Seo - Pagina Acerca de';
    this.title.setTitle(titulo);
    this.seo.generateTags({
      title: 'Angular SEO - Pagina Acerca de - Lucas Suarez',
      description: 'Este es la pagina About del proyecto de Angular SEO',
      slug: this.router.url,
      host: window.location.host
    });
  }

}
