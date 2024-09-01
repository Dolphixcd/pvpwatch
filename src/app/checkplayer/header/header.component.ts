import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {

name = input.required<string>();
realm = input.required<string>();
profilePic = input.required<string>();
itemlevel = input.required<number>();
_class = input.required<string>();

}
