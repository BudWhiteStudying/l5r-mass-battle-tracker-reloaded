import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle : String;

  setPageTitle(title : String): void {
    this.pageTitle = title;
  }

  componentAdded(event): void {
    this.setPageTitle(event.pageTitle ? event.pageTitle : '');
  }

  returnToRoot() {
    this.router.navigateByUrl('/');
  }
  constructor(private router : Router) {}
}
