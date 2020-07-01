import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portfolio';
  mostrarMenu = false;

  constructor(private router: Router) {
    this.router.navigate(['profile']);
  }

  toggle() {
    this.mostrarMenu = !this.mostrarMenu;
  }
  // navigate(rota){
  //   this.router.navigate([rota]);
  // }
}
