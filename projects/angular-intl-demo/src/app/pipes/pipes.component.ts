import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
  standalone: true,
  imports: [MatTabsModule, RouterLink, RouterLinkActive, RouterOutlet],
})
export default class PipesComponent {}
