import { Component, input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  _2v2Rating = input.required<string>();
  _3v3Rating = input.required<string>();
  rbgRating = input.required<string>();

}
