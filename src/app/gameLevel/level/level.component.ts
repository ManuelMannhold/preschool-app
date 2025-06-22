import { Component, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CountGameService } from '../../count-game.service';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss',
})
export class LevelComponent{
  appleImage: string = '/assets/img/apple_';
  apples: string[] = [];
  score:number = 0;
  private router = inject(Router);
  readonly currentUrl = signal(this.router.url);
  setScore = inject(CountGameService);
  highestScore = this.loadScoreFromLocalStorage()
  scoreIncreased = false;
  questionIncreased = false;
  correctAudio = new Audio('/assets/sounds/correct-sound.mp3');
  wrongAudio = new Audio('/assets/sounds/wrong-sound.mp3');

  public ngOnInit(): void {
    this.constructApples();
    this.highestScore = this.loadScoreFromLocalStorage();
  }

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        this.currentUrl.set(event.urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    this.saveScore();
  }

  constructApples() {
    const appleCount = Math.floor(Math.random() * 6) + 1;
    this.apples = [];

    for (let i = 0; i < appleCount; i++) {
      const randomAppleNumber = Math.floor(Math.random() * 6);
      this.apples.push(`${this.appleImage}${randomAppleNumber}.png`);
    }
    setTimeout(() => {
      this.questionIncreased = false;
    }, 1000);
  }

  checkApplesRightOrWrong(element: number) {
    let buttonsId = document.getElementById(`${element}`);
    if (this.apples.length == element) {
      buttonsId?.classList.add('right');
      this.correctAudio.play();
      setTimeout(() => {
        this.nextQuestion(element);
      }, 1000);
      this.scorePlus();
    } else {
      document.getElementById(`${element}`)?.classList.add('wrong');
      this.wrongAudio.play();
      setTimeout(() => {
        document.getElementById(`${element}`)?.classList.remove('wrong');
      }, 1000);
    }
  }

  scorePlus() {
    if (!this.scoreIncreased) {
      this.score += 1;
      this.scoreIncreased = true;
    }

    if(this.score === this.highestScore +1) {
      this.highestScore += 1;
    }
  }

  nextQuestion(element: number) {
    if (!this.questionIncreased) {
      this.questionIncreased = true;
      this.scoreIncreased = false;
      this.constructApples();
      document.getElementById(`${element}`)?.classList.remove('right');
    }
  }

  saveScore() {
    this.setScore.addScore(this.score);
    this.saveScoreToLocalStorage();
  }

  saveScoreToLocalStorage(): void {
    localStorage.setItem('score', this.score.toString());
  }

  loadScoreFromLocalStorage(): number {
    const stored = localStorage.getItem('score');
    return stored ? parseInt(stored, 10) : 0;
  } 
}
