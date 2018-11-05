import { Injectable, Inject } from '@angular/core';
import { Meta, DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  imagen = 'https://csform.com/wp-content/uploads/2018/09/Angular-7-Top-New-Features.jpg';

  constructor(@Inject(DOCUMENT) private document: any, private meta: Meta, public router: Router) {
    console.log('este es el dominio');
    console.log(this.document.location.hostname);
  }

  generateTags(config) {
    config = {
      title: 'NG Seo',
      description: 'My Angular WebSite',
      image: this.imagen,
      slug: '',
      host: '',
      ...config
    };

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@LrlucasSuarez' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Angular SEO' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://${config.host}/angularseo${config.slug}` });
  }
}
