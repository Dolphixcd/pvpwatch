import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PlayerDataService } from '../../player-data.service';
import { CharGeneralComponent } from "../char-general/char-general.component";
import { RatingComponent } from "../rating/rating.component";


@Component({
  selector: 'app-char-container',
  standalone: true,
  imports: [HeaderComponent, CharGeneralComponent, RatingComponent],
  templateUrl: './char-container.component.html',
  styleUrl: './char-container.component.css'
})
export class CharContainerComponent implements OnInit {
  playerData: any;
  playerRenders: any;
  playerPvPData3s: any;
  playerPvPData2s: any;
  playerPvPDataRBG: any;

  constructor(private playerDataService: PlayerDataService) {}

  ngOnInit() {
    this.playerDataService.playerData$.subscribe(data => {
      this.playerData = data;
    });
    this.playerDataService.playerRenders$.subscribe(data => {
      this.playerRenders = data;
    });
    this.playerDataService.playerPvPData3s$.subscribe(data => {
      this.playerPvPData3s = data;
    });
    this.playerDataService.playerPvPData2s$.subscribe(data => {
      this.playerPvPData2s = data;
    });
    this.playerDataService.playerPvPDataRBG$.subscribe(data => {
      this.playerPvPDataRBG = data;
    });
  }
}
