import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PvPEntry } from './players.model';
import { input } from '@angular/core';
import { wow } from 'blizzard.js'

@Component({
  selector: 'app-ladder-container',
  standalone: true,
  imports: [],
  templateUrl: './ladder-container.component.html',
  styleUrl: './ladder-container.component.css'
})
export class LadderContainerComponent {
  private httpClient = inject(HttpClient);
  players: PvPEntry[] = [];
  isFetching = signal(false);
  wowClient: any; // Declare the 'wowClient' property

  ladderpage = input.required<string>();

  async initializeWowClient() {
    this.wowClient = await wow.createInstance({
      key: "020fcd3907a3449dbe86e8bdae328f17",
      secret: "62tni4Z5xhRvVTk3u4RCtgubGvNbqqxq",
      origin: 'eu', // optional
      locale: 'en_US', // optional
      token: '', // optional
    });
  }
  

  ngOnInit() {
    //Variable für das Loader Symbol
    this.isFetching.set(true);
    this.initializeWowClient();
    //API Call für die PvP Ladder
    this.httpClient.get<PvPEntry>("https://eu.api.blizzard.com/data/wow/pvp-season/37/pvp-leaderboard/3v3?namespace=dynamic-eu&locale=en_US&access_token=" + this.wowClient).subscribe((data: any) => {
    this.players = data.entries.slice((parseInt(this.ladderpage()) * 100) - 100, parseInt(this.ladderpage()) * 100);
    this.isFetching.set(false);
  });
}

getLastLadderPage(): string {
  if (parseInt(this.ladderpage()) === 1) {
    return '1';
  }
  const nextPage = parseInt(this.ladderpage()) - 1;
  return nextPage.toString();
}

getNextLadderPage(): string {
  if (parseInt(this.ladderpage()) === 50) {
    return '50';
  }
  const nextPage = parseInt(this.ladderpage()) + 1;
  return nextPage.toString();
}

}



