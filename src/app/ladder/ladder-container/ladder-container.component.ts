import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PvPEntry } from './players.model';
import { input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PlayerEdited } from './playeredited.model';

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
  playersedited: PlayerEdited[] = [];
  isFetching = signal(false);

  ladderpage = input.required<string>();

  sortPlayersByRank(): void {
    this.playersedited.sort((a, b) => a.rank - b.rank);
  }

  async getBlizzardAccessToken(): Promise<string> {
    try {
      const response: any = await firstValueFrom(this.httpClient.post('https://eu.battle.net/oauth/token', new URLSearchParams({
        grant_type: 'client_credentials'
      }), {
        headers: {
          'Authorization': `Basic ${btoa('020fcd3907a3449dbe86e8bdae328f17:62tni4Z5xhRvVTk3u4RCtgubGvNbqqxq')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }));
  
      return response?.access_token || '';
    } catch (error) {
      console.error('Error fetching Blizzard access token:', error);
      return '';
    }
  }
  

  ngOnInit() {
    // Variable für das Loader Symbol
    this.isFetching.set(true);
    // API Call für die PvP Ladder
    this.getBlizzardAccessToken().then(accessToken => {
      this.httpClient.get<PvPEntry>(`https://eu.api.blizzard.com/data/wow/pvp-season/37/pvp-leaderboard/3v3?namespace=dynamic-eu&locale=en_US&access_token=${accessToken}`).subscribe((data: any) => {
        this.players = data.entries.slice((parseInt(this.ladderpage()) * 100) - 100, parseInt(this.ladderpage()) * 100);
        this.players.forEach(element => {
          this.httpClient.get<PlayerEdited>(`https://eu.api.blizzard.com/profile/wow/character/${element.character.realm.slug}/${element.character.name.toLowerCase()}?namespace=profile-eu&locale=en_US&access_token=EUEqpUrq2oh9Je7iT3153ykNLO1qeCGMHj`).subscribe((data: any) => {
          this.playersedited.push(
            {
              name: element.character.name,
              realm: element.character.realm.slug,
              faction: data.faction.type,
              rank: element.rank,
              rating: element.rating,
              wins: element.season_match_statistics.won, 
              losses: element.season_match_statistics.lost, 
              spec: data.active_spec.name, 
              _class: data.character_class.name, 
              race: data.race.name,
            }
          );
          this.sortPlayersByRank();
          });
        });
        this.isFetching.set(false);
      });
    }).catch(error => {
      console.error('Fehler beim Abrufen des Zugriffstokens:', error);
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



