import { Component } from '@angular/core';
import { PokeCardComponent } from '../../components/poke-card/poke-card.component';
import { PokeCardEspecialComponent } from '../../components/poke-card-especial/poke-card-especial.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PokeCardComponent,
    PokeCardEspecialComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
