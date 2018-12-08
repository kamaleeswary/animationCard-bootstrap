import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-truncated-text',
  templateUrl: './truncated-text.component.html',
  styleUrls: ['./truncated-text.component.css']
})
export class TruncatedTextComponent implements OnInit {
  @Input() text: string;
  // tslint:disable-next-line:no-inferrable-types
  @Input() limit: number = 40;
  truncating = true;
  constructor() { }

  ngOnInit() {
  }

}
