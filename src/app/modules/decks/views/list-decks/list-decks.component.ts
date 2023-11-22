import { trigger, transition, style, animate } from '@angular/animations';
import { NgIf, NgClass, AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, effect } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PokeCardEspecialComponent } from '../../../../components/poke-card-especial/poke-card-especial.component';
import { PokeCardComponent } from '../../../../components/poke-card/poke-card.component';
import { SidebarComponent } from '../../../../components/sidebar/sidebar.component';
import { SpinnerComponent } from '../../../../components/spinner/spinner.component';
import { PokemonCardResponse } from '../../../../models/response/cards.response';
import { DecksfacadeService } from '../../../../services/facade/decks/decksfacade.service';
import { DecksSignalService } from '../../../../services/signals/decks/decks-signal.service';
import { DecksSignalModel } from '../../../../services/signals/decks/decks.signal.model';

@Component({
  selector: 'app-card-deck',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    AsyncPipe,
    RouterLink,
    SpinnerComponent,
    SidebarComponent,
    PokeCardComponent,
    ReactiveFormsModule,
    PokeCardEspecialComponent,
    NgTemplateOutlet,
  ],
  templateUrl: './list-decks.component.html',
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
export class CardDeckComponent implements OnInit {
  cardsList!: PokemonCardResponse[] | null;
  selected!: string;
  decks!: string[];
  isLoading: boolean = false;
  qtdCards: number = 0;
  qtdPokemons: number = 0;
  qtdCoach: number = 0;

  constructor(
    private decksfacadeService: DecksfacadeService,
    private decksSignalService: DecksSignalService,
  ) {
    effect(() => {
      const snapshot = this.decksSignalService.snapshot;
      this.cardsList = snapshot.current?.cards || null;
      this.selected = snapshot.current?.name || '';
      this.decks = snapshot.decksNames;
      this.getDeckInfo(snapshot);
    });
  }

  ngOnInit() {
  }

  getDeckInfo(snapshot: DecksSignalModel) {
    this.qtdCards = snapshot.current?.cards.length || 0;
    const cochList = snapshot.current?.cards.filter(ele => ele.supertype !== 'Pokémon');
    const pkmCoach = snapshot.current?.cards.filter(ele => ele.supertype === 'Pokémon');

    this.qtdCoach = cochList?.length || 0;
    this.qtdPokemons = pkmCoach?.length || 0;
  }

}
