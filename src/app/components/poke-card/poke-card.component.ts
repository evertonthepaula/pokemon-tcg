import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { PokemonColorsEnum } from '../../enums/pokemon-colors.enum';
import { PokemonCardResponse } from '../../models/response/cards.response';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [NgClass, NgIf, NgOptimizedImage],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokeCardComponent {
  @Input({ required: true }) data!: PokemonCardResponse;
  @Input({ required: false }) hasActions!: boolean;

  @Output()
  add: EventEmitter<PokemonCardResponse> = new EventEmitter<PokemonCardResponse>();

  @Output()
  remove: EventEmitter<PokemonCardResponse> = new EventEmitter<PokemonCardResponse>();

  /**
   * The app routes enum.
   */
  pokemonColorsEnum: typeof PokemonColorsEnum = PokemonColorsEnum;

  public get bgColor(): string {
    const type: keyof typeof PokemonColorsEnum = this.data.types[0];
    return this.pokemonColorsEnum[type];
  }

  addCard(card: PokemonCardResponse): void {
    this.add.emit(card);
  }

  removeCard(card: PokemonCardResponse): void {
    this.remove.emit(card);
  }
}
