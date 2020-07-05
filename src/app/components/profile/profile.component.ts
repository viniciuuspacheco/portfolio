import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data = new Date();
  idade = 0;



  constructor() {

  }

  ngOnInit(): void {
    let dia = this.data.getDate();
    let mes = this.data.getMonth() + 1;
    let ano = this.data.getFullYear();

    if (mes > 7) {
      this.idade = ano - 1992;
    }
    if (mes === 7 && dia >= 9) {
      this.idade = ano - 1992;
    }
    else {
      this.idade = (ano - 1992) - 1;
    }
  }
}
