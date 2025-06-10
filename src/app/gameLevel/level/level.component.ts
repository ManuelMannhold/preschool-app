import { Component } from '@angular/core';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss',
})
export class LevelComponent {
  appleImage: string = '/assets/img/apple_';
  apples: string[] = [];
  score = 0;
  scoreIncreased = false;
  questionIncreased = false;

  public ngOnInit(): void {
    this.constructApples();
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
      setTimeout(() => {
        this.nextQuestion(element);
      }, 1000);
      this.scorePlus();
    } else {
      document.getElementById(`${element}`)?.classList.add('wrong');
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
  }

  nextQuestion(element: number) {
    if (!this.questionIncreased) {
      this.questionIncreased = true;
      this.scoreIncreased = false;
      this.constructApples();
      document.getElementById(`${element}`)?.classList.remove('right');
    }
  }
}
