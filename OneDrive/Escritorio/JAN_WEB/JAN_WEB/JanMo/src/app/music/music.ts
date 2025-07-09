import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [], // add modules you use here if needed
  templateUrl: './music.html',
  styleUrls: ['./music.css']
})
export class Music {

    @ViewChild('raul') raul!: ElementRef;
  @ViewChild('police') police!: ElementRef;
  @ViewChild('mars') mars!: ElementRef;

  scrollToSection(event: Event, section: string) {
    event.preventDefault();
    const target = this[section as keyof this] as ElementRef;
    target?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
