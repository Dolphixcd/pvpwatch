import { Component, input } from '@angular/core';

@Component({
  selector: 'app-char-general',
  standalone: true,
  imports: [],
  templateUrl: './char-general.component.html',
  styleUrl: './char-general.component.css'
})
export class CharGeneralComponent {
  race = input.required<string>();
  gender = input.required<string>();
  _class = input.required<string>();
  faction = input.required<string>();
  spec = input.required<string>();
  spec2: string = '';
}
