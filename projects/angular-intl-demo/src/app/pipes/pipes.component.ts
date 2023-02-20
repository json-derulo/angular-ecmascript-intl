import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  constructor(readonly route: ActivatedRoute) {
  }
}
