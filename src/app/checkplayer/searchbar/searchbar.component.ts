import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlizzardAuthService } from '../../blizzard-auth.service';
import { HttpClient } from '@angular/common/http';
import { PlayerDataService } from '../../player-data.service';


@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  private httpClient = inject(HttpClient);
  searchName: string = '';
  searchRealm: string = '';
  accesstoken: string = '';

  constructor(private playerDataService: PlayerDataService, private blizzardAuthService: BlizzardAuthService) {}

  async searchPlayer() {
    if(this.accesstoken === '') {
      this.accesstoken = await this.blizzardAuthService.getBlizzardAccessToken();
      }
    this.httpClient.get(`https://eu.api.blizzard.com/profile/wow/character/${this.searchRealm}/${this.searchName.toLowerCase()}?namespace=profile-eu&locale=en_US&access_token=${this.accesstoken}`).subscribe((data: any) => {
      this.playerDataService.setPlayerData(data);
      console.log(data);
      this.httpClient.get(`https://eu.api.blizzard.com/data/wow/playable-class/${data.character_class.id}?namespace=static-eu&locale=en_US&access_token=${this.accesstoken}`).subscribe((data2: any) => {
        let playableSpecs: any[] = data2.specializations;
        this.httpClient.get(`https://eu.api.blizzard.com/profile/wow/character/${this.searchRealm}/${this.searchName.toLowerCase()}/pvp-bracket/shuffle-shaman-elemental?namespace=profile-eu&locale=en_US&access_token=${this.accesstoken}`).subscribe((data3: any) => {
          this.playerDataService.setPlayerPvPDatasSolo(data3);
          console.log(data3);
        });
      });
    });
    this.httpClient.get(`https://eu.api.blizzard.com/profile/wow/character/${this.searchRealm}/${this.searchName.toLowerCase()}/character-media?namespace=profile-eu&locale=en_US&access_token=${this.accesstoken}`).subscribe((data: any) => {
      this.playerDataService.setPlayerRenders(data);
      console.log(data);
    });
    this.httpClient.get(`https://eu.api.blizzard.com/profile/wow/character/${this.searchRealm}/${this.searchName.toLowerCase()}/pvp-bracket/3v3?namespace=profile-eu&locale=en_US&access_token=${this.accesstoken}`).subscribe((data: any) => {
      this.playerDataService.setPlayerPvPDatas3s(data);
      console.log(data);
    });
    this.httpClient.get(`https://eu.api.blizzard.com/profile/wow/character/${this.searchRealm}/${this.searchName.toLowerCase()}/pvp-bracket/2v2?namespace=profile-eu&locale=en_US&access_token=${this.accesstoken}`).subscribe((data: any) => {
      this.playerDataService.setPlayerPvPDatas2s(data);
      console.log(data);
    });
    this.httpClient.get(`https://eu.api.blizzard.com/profile/wow/character/${this.searchRealm}/${this.searchName.toLowerCase()}/pvp-bracket/rbg?namespace=profile-eu&locale=en_US&access_token=${this.accesstoken}`).subscribe((data: any) => {
      this.playerDataService.setPlayerPvPDatasRBG(data);
      console.log(data);
    });
    
    this.searchName = '';
    this.searchRealm = '';
  }

  

}
