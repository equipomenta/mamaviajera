import { Component } from '@angular/core';
import { LandingComponent } from "./components/landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mamá Viajera';
}
