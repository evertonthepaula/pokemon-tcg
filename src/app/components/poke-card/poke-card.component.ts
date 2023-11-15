import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokeCardComponent {
  @Input({ required: true }) bgColor!: string;
}
