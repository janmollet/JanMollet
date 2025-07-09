import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AboutMe } from './about-me/about-me';
import { Resume } from './resume/resume';
import { ProjectsStudies } from './projects-studies/projects-studies';
import { Music } from './music/music';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Collaborate } from './collaborate/collaborate';




@Component({
  selector: 'app-root',
  template: `
    <header>
      <section id="header"><app-header></app-header></section>
    </header>

    <main>
      <section id="about"><app-about-me></app-about-me></section>
      <section id="resume"><app-resume></app-resume></section>
      <section id="projects"><app-projects-studies></app-projects-studies></section>
      <section id="music"><app-music></app-music></section>
      <section id="collaborate"><app-collaborate></app-collaborate></section>
    </main>
    <button class="back-to-top" (click)="scrollTo('header')" aria-label="Back to top">
      ↑
    </button>
    <footer>
  <section id="footer"><app-footer></app-footer></section>
</footer>
  `,
  standalone: true,
  imports: [
    AboutMe,
    Resume,
    ProjectsStudies,
    Music,
    Header,
    Footer,
    Collaborate
  ],
  styleUrls: ['./app.css']
})

export class App {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollTo(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
