import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PlayerDataService } from '../../player-data.service';
import { PlayerDataModel } from '../playerData.model';


@Component({
  selector: 'app-char-container',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './char-container.component.html',
  styleUrl: './char-container.component.css'
})
export class CharContainerComponent implements OnInit {
  playerData: any;

  constructor(private playerDataService: PlayerDataService) {}

  ngOnInit() {
    this.playerDataService.playerData$.subscribe(data => {
      this.playerData = data;
    });
  }
}
