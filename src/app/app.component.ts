import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaincontentComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MainPortfolio';
}
