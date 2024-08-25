import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  private playerData = new BehaviorSubject<any>(null);
  playerData$ = this.playerData.asObservable();

  setPlayerData(data: any) {
    this.playerData.next(data);
  }
}