import { Component, input, OnChanges, SimpleChange, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {

private httpClient = inject(HttpClient);
name = input.required<string>();
realm = input.required<string>();
profilePic = input.required<string>();
itemlevel = input.required<number>();
_class = input.required<string>();

}
