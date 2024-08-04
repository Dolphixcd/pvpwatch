import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PvPEntry } from './players.model';
import { input } from '@angular/core';

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

  ladderpage = input.required<string>();

  ngOnInit() {
    this.isFetching.set(true);
    this.httpClient.get<PvPEntry>('https://eu.api.blizzard.com/data/wow/pvp-season/37/pvp-leaderboard/3v3?namespace=dynamic-eu&locale=en_US&access_token=EUbORj7AFgFTb9x2KSeowasEuNb4Qt3r6E').subscribe((data: any) => {
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
