import { Component, OnInit } from '@angular/core';
import { PokeCardComponent } from '../../components/poke-card/poke-card.component';
import { PokeCardEspecialComponent } from '../../components/poke-card-especial/poke-card-especial.component';
import { CardsHttpService } from '../../services/http/cards-http.service';
import { CardsRequest } from '../../services/models/request/cards.request.model';

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
export class DashboardComponent implements OnInit {

  constructor(
    private cardsHttpService: CardsHttpService,
  ) { }

  ngOnInit() {
    const payload: CardsRequest = {
      page: 1,
      pageSize: 10,
    }
    this.cardsHttpService.get(payload).subscribe(resultado => {
      console.log('resultado :>:: ', resultado);

    });
  }
}
