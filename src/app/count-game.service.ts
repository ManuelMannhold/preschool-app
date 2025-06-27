import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountGameService {
  score = signal(0);

  constructor() {}

  addScore(points: number) {
    this.score.update(prev => prev + points);
  }

  newGameStart() {
    this.score;
  }

  continueGame() {
    this.loadScoreFromLocalStorage();
    
  }

   loadScoreFromLocalStorage(): number {
    const stored = localStorage.getItem('score');
    return stored ? parseInt(stored, 10) : 0;
  } 
}
