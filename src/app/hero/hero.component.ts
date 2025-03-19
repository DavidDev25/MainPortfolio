import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initSlider();
  }

  initSlider(): void {
    const slider = document.querySelector('.slider') as HTMLDivElement;

    if (!slider) {
      console.error('Slider nicht gefunden');
      return;
    }

    const slides = slider.children;
    const originalLength = slides.length;

    for (let i = 0; i < originalLength; i++) {
      const clone = slides[i].cloneNode(true) as Node;
      slider.appendChild(clone);
    }
  }
}
