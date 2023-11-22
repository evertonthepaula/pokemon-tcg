import { Routes } from '@angular/router';
import { CardDeckComponent } from './list-decks/list-decks.component';
import { ManageDecksComponent } from './manage-decks/manage-decks.component';

export const DecksRoutes: Routes = [
  {
    path: 'adicionar', component: ManageDecksComponent,
  },
  {
    path: 'gerenciar', component: CardDeckComponent,
  },
];

