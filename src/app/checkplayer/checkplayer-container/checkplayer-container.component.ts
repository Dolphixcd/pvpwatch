import { Component } from '@angular/core';
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { CharContainerComponent } from "../char-container/char-container.component";

@Component({
  selector: 'app-checkplayer-container',
  standalone: true,
  imports: [SearchbarComponent, CharContainerComponent],
  templateUrl: './checkplayer-container.component.html',
  styleUrl: './checkplayer-container.component.css'
})
export class CheckplayerContainerComponent {

}
