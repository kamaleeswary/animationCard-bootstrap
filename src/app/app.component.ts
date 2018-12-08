 import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseName = 'Angular';
  viewsCount = 48 ;
  courseCreatorName = 'Alice';
  nameOfOrg = 'NIIT';
  description = 'The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.';
  // tslint:disable-next-line:no-inferrable-types
  content: boolean = false;
  contentDisable() {
    this.content = false ;
  }
  contentEnable() {
    this.content = true;
  }
}
