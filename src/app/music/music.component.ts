import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  @ViewChild('raul') raul!: ElementRef;
  @ViewChild('police') police!: ElementRef;
  @ViewChild('mars') mars!: ElementRef;

  scrollToSection(event: Event, section: string) {
    event.preventDefault();
    const target = this[section as keyof this] as ElementRef;
    target?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}