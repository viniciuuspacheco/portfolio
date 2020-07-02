import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  efeito = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  rotacionar() {
    this.efeito = !this.efeito;
  }
}
