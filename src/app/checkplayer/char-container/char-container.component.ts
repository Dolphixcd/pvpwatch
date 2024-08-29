import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PlayerDataService } from '../../player-data.service';
import { PlayerDataModel } from '../playerData.model';
import { CharGeneralComponent } from "../char-general/char-general.component";


@Component({
  selector: 'app-char-container',
  standalone: true,
  imports: [HeaderComponent, CharGeneralComponent],
  templateUrl: './char-container.component.html',
  styleUrl: './char-container.component.css'
})
export class CharContainerComponent implements OnInit {
  playerData: any;
  playerRenders: any;

  constructor(private playerDataService: PlayerDataService) {}

  ngOnInit() {
    this.playerDataService.playerData$.subscribe(data => {
      this.playerData = data;
    });
    this.playerDataService.playerRenders$.subscribe(data => {
      this.playerRenders = data;
    });
  }
}
