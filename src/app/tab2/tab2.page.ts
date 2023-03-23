import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valendo = 1;
  pontuacaoTime1 = 0;
  pontuacaoTime2 = 0;
  partidasTime1 = 0;
  partidasTime2 = 0;

  constructor() {}

  mudarValendo3() {
    this.valendo = 3;
  }

  mudarValendo6() {
    this.valendo = 6;
  }

  mudarValendo9() {
    this.valendo = 9;
  }

  mudarValendo12() {
    this.valendo = 12;
  }

  mudarPontuacaoTime1Mais() {
    
  }

}
