import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ProjektsComponent } from '../projekts/projekts.component';

@Component({
  selector: 'app-maincontent',
  imports: [HeroComponent, ProjektsComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss',
})
export class MaincontentComponent {}
