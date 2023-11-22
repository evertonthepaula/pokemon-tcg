import { Component, effect } from '@angular/core';
import { AsyncPipe, CommonModule, NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PokeCardEspecialComponent } from '../../../../components/poke-card-especial/poke-card-especial.component';
import { PokeCardComponent } from '../../../../components/poke-card/poke-card.component';
import { SidebarComponent } from '../../../../components/sidebar/sidebar.component';
import { SpinnerComponent } from '../../../../components/spinner/spinner.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { PokemonCardResponse } from '../../../../models/response/cards.response';
import { DecksfacadeService } from '../../../../services/facade/decks/decksfacade.service';
import { PokemonCardsHttpService } from '../../../../services/http/PokemonCards/pokemon-cards-http.service';
import { Observable } from 'rxjs';
import { CardsRequest } from '../../../../models/request/cards.request.model';
import { CommonResponse } from '../../../../models/response/common.response';
import { PageNavComponent } from '../../../../components/page-nav/page-nav.component';
import { DeckModel } from '../../../../models/decks.model';
import { DecksSignalService } from '../../../../services/signals/decks/decks-signal.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-decks',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    AsyncPipe,
    NgTemplateOutlet,
    PageNavComponent,
    SpinnerComponent,
    SidebarComponent,
    PokeCardComponent,
    ReactiveFormsModule,
    PokeCardEspecialComponent,
    RouterLink
  ],
  templateUrl: './manage-decks.component.html',
  styleUrl: './manage-decks.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ManageDecksComponent {
  cardsList$!: Observable<CommonResponse<PokemonCardResponse>>;
  selected!: string;
  decks!: string[];
  isLoading: boolean = false;

  constructor(
    private decksfacadeService: DecksfacadeService,
    private decksSignalService: DecksSignalService,
    private pokemonCardsHttpService: PokemonCardsHttpService
  ) {
    effect(() => {
      const snapshot = this.decksSignalService.snapshot;
      this.selected = snapshot.current?.name || '';
      this.decks = snapshot.decksNames;
    });
  }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons(page: number = 1) {
    const payload: CardsRequest = {
      page,
      pageSize: 10,
    }
    this.cardsList$ = this.pokemonCardsHttpService.get(payload);
  }

  addCard(card: PokemonCardResponse) {
    this.decksfacadeService.addCard(card);
  }

  removeCard(card: PokemonCardResponse) {
    this.decksfacadeService.removeCard(card);
  }
}
