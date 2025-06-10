import { Routes } from '@angular/router';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { LevelComponent } from './gameLevel/level/level.component';

export const routes: Routes = [
  { path: '', component: MaincomponentComponent },
  { path: 'count-game', component: LevelComponent },
];
