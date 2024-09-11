import { Component, inject, signal, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PvPEntry } from '../models/players.model';
import { PlayerEdited } from '../models/playersedited.model';
import { BlizzardAuthService } from '../../blizzard-auth.service';

/**
 * Component for displaying the ladder container.
 */
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
  accesstoken: string = '';
  ghhloddshhgpunkt: string = '';

  constructor(private blizzardAuthService: BlizzardAuthService) {}

  /**
   * Lifecycle hook that is called after the component is initialized.
   */
  async ngOnInit() {
    this.isFetching.set(true);
    await this.getAccessToken();
    await this.getPlayerEntries(this.accesstoken);
    this.sortPlayersByRank();
    this.isFetching.set(false);
  }

  /**
   * Retrieves the access token from the BlizzardAuthService.
   */
  async getAccessToken() {
    this.accesstoken = await this.blizzardAuthService.getBlizzardAccessToken();
  }

  /**
   * Retrieves the player entries from the API.
   * @param accesstoken The access token for authentication.
   */
  getPlayerEntries(accesstoken: string) {
    this.httpClient.get<PvPEntry>(`https://eu.api.blizzard.com/data/wow/pvp-season/37/pvp-leaderboard/3v3?namespace=dynamic-eu&locale=en_US&access_token=${accesstoken}`).subscribe((data: any) => {
      this.players = data.entries.slice((parseInt(this.ladderpage()) * 100) - 100, parseInt(this.ladderpage()) * 100);    
      this.getPlayerDetails(accesstoken);
    });
  }

  /**
   * Retrieves the player details from the API.
   * @param accesstoken The access token for authentication.
   */
  getPlayerDetails(accesstoken: string) {
    this.players.forEach(element => {
      this.httpClient.get<PlayerEdited>(`https://eu.api.blizzard.com/profile/wow/character/${element.character.realm.slug}/${element.character.name.toLowerCase()}?namespace=profile-eu&locale=en_US&access_token=${accesstoken}`).subscribe((data: any) => {
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
  }

  /**
   * Sorts the players by rank.
   */
  sortPlayersByRank(): void {
    this.playersedited.sort((a, b) => a.rank - b.rank);
  }

  /**
   * Gets the previous ladder page number.
   * @returns The previous ladder page number as a string.
   */
  getLastLadderPage(): string {
    if (parseInt(this.ladderpage()) === 1) {
      return '1';
    }
    const nextPage = parseInt(this.ladderpage()) - 1;
    return nextPage.toString();
  }

  /**
   * Gets the next ladder page number.
   * @returns The next ladder page number as a string.
   */
  getNextLadderPage(): string {
    if (parseInt(this.ladderpage()) === 50) {
      return '50';
    }
    const nextPage = parseInt(this.ladderpage()) + 1;
    return nextPage.toString();
  }
}