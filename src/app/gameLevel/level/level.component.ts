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
      console.log('das ist richtig');
    } else {
      console.log('das ist falsch');
    }
  }
}
