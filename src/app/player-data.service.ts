import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  private playerData = new BehaviorSubject<any>(null);
  playerData$ = this.playerData.asObservable();

  private playerRenders = new BehaviorSubject<any>(null);
  playerRenders$ = this.playerRenders.asObservable();

  setPlayerData(data: any) {
    this.playerData.next(data);
  }

  setPlayerRenders(data: any) {
    this.playerRenders.next(data);
  }
}