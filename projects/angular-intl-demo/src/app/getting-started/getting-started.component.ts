import { Component } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  imports: [MarkdownComponent],
})
export class GettingStartedComponent {}
