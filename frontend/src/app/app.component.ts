import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TetiereComponent } from '../tetiere/tetiere.component';
import { FooterComponent } from '../footer/footer.component';
import { FormulaireComponent } from '../formulaire/formulaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TetiereComponent, FormulaireComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp02_ay_derya';
}
