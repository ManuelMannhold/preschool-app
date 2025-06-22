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
}
