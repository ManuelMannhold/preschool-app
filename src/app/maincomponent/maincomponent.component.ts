import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-maincomponent',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.scss'
})
export class MaincomponentComponent {

}
