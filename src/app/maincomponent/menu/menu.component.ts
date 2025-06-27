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

  public ngOnInit(): void {
    this.score = this.getScore.loadScoreFromLocalStorage();
  }

  getScore = inject(CountGameService);
  score = this.getScore.loadScoreFromLocalStorage();
  scoreLocalStorage = this.getScore.loadScoreFromLocalStorage();

 

  startNewGame() {
    if(this.score !== 0) {
      document.getElementById('overlay')?.classList.remove('d-none');
    }
  }

  newGameStart() {
    this.getScore.newGameStart();
  }

  continueGame() {
    this.getScore.continueGame();
  }
}
