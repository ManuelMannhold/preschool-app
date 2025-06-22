import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LevelComponent } from '../../gameLevel/level/level.component';
import { CountGameService } from '../../count-game.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  getScore = inject(CountGameService);
  score = this.getScore.score;
}
