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

  private playerPvPData3s = new BehaviorSubject<any>(null);
  playerPvPData3s$ = this.playerPvPData3s.asObservable();

  private playerPvPData2s = new BehaviorSubject<any>(null);
  playerPvPData2s$ = this.playerPvPData2s.asObservable();

  private playerPvPDataSolo = new BehaviorSubject<any>(null);
  playerPvPDataSolo$ = this.playerPvPDataSolo.asObservable();

  private playerPvPDataRBG = new BehaviorSubject<any>(null);
  playerPvPDataRBG$ = this.playerPvPDataRBG.asObservable();

  private playerPvPDataBlitz = new BehaviorSubject<any>(null);
  playerPvPDataBlitz$ = this.playerPvPDataBlitz.asObservable();

  setPlayerData(data: any) {
    this.playerData.next(data);
  }

  setPlayerRenders(data: any) {
    this.playerRenders.next(data);
  }

  setPlayerPvPDatas3s(data: any) {
    this.playerPvPData3s.next(data);
  }

  setPlayerPvPDatas2s(data: any) {
    this.playerPvPData2s.next(data);
  }

  setPlayerPvPDatasSolo(data: any) {
    this.playerPvPDataSolo.next(data);
  }

  setPlayerPvPDatasRBG(data: any) {
    this.playerPvPDataRBG.next(data);
  }

  setPlayerPvPDatasBlitz(data: any) {
    this.playerPvPDataBlitz.next(data);
  }

}