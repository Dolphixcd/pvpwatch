import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlizzardAuthService {

  constructor(private httpClient: HttpClient) { }

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
      console.log('Blizzard access token response:', response);
      return response?.access_token || '';
    } catch (error) {
      console.error('Error fetching Blizzard access token:', error);
      return '';
    }
    
  }
}
