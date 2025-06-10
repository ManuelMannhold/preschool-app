import { Component } from '@angular/core';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss'
})
export class LevelComponent {
  appleImage: string = '/assets/img/apple_';
  apples: string[] = [];

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
  }

  checkApplesRightOrWrong(element: number) {
    if(this.apples.length == element) {
      document.getElementById(`${element}`)?.classList.add('right');
      setTimeout(() => {
      this.nextQuestion(element)
  }, 1000);
    } else {
      document.getElementById(`${element}`)?.classList.add('wrong');
      setTimeout(() => {
        document.getElementById(`${element}`)?.classList.remove('wrong');
      }, 1000);
    };
  }

  nextQuestion(element: number) {
    this.constructApples();
    document.getElementById(`${element}`)?.classList.remove('right');
    document.getElementById(`${element}`)?.classList.remove('right');
  }
}
