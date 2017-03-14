import { Component, Input } from '@angular/core';

import { Player } from './player';


@Component({
  selector: 'my-player-detail',
  template: `
  <div *ngIf="player">
    <h2>{{player.name}}</h2>
    <div><label>Player Number: </label>{{player.number}}</div>
    <div>
      <label>Player Name: </label>
      <input [(ngModel)]="player.name" placeholder="name"/>
    </div>
  </div>
`

})
export class PlayerDetailComponent {
  @Input()
  player: Player;

}
