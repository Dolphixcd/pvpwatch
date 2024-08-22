import { Component } from '@angular/core';
import { SearchbarComponent } from "../searchbar/searchbar.component";

@Component({
  selector: 'app-checkplayer-container',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './checkplayer-container.component.html',
  styleUrl: './checkplayer-container.component.css'
})
export class CheckplayerContainerComponent {

}
