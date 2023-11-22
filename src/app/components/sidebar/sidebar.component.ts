import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { DecksfacadeService } from '../../services/facade/decks/decksfacade.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgIf, ReactiveFormsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  show!: boolean;
  newItenInput: FormControl<string> = new FormControl();

  @Input({ required: true }) type!: 'creation' | 'visualization'
  @Input({ required: false }) selected!: string;
  @Input({ required: false }) decks!: Array<string>;
  @Input({ required: false }) hasActions!: boolean;

  constructor(
    private decksfacadeService: DecksfacadeService
  ) { }

  toogle(): void {
    this.show = !this.show;
  }

  newItem(): void {
    const newItem: string = this.newItenInput.value;

    if (newItem) {
      this.decksfacadeService.newDeck(newItem);
      this.decksfacadeService.setDeck(newItem);
    }

  }

  select(name: string): void {
    this.decksfacadeService.setDeck(name);
  }

  deleteDeck(name: string) {
    this.decksfacadeService.deleteDeck(name);
  }
}
