import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  mostrarMenu = false

  toggle() {
    this.mostrarMenu = !this.mostrarMenu;
  }
  darkMode(){

  }
}
