import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/servicios/seo.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public seo: SeoService, private title: Title, public router: Router) { }

  ngOnInit() {
    let titulo: string = 'Angular Seo - Pagina de Contacto';
    this.title.setTitle(titulo);
    this.seo.generateTags({
      title: 'Angular SEO - Pagina de Contacto - Lucas Suarez',
      description: 'Este es la pagina de contacto del proyecto de Angular SEO',
      slug: this.router.url,
      host: window.location.host
    });
  }

}
