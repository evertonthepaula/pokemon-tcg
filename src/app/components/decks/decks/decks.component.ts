import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecksComponent {

}
