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

  mudarValendo1() {
    this.valendo = 1;
  }

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
    if(this.pontuacaoTime1 <= 11) {
    this.pontuacaoTime1 = this.valendo + this.pontuacaoTime1;
    }else(this.pontuacaoTime1 = 0)
  }

  mudarPontuacaoTime1Menos() {
    if(this.pontuacaoTime1 = 0) {
    this.pontuacaoTime1 = this.pontuacaoTime1 - this.valendo;
    }
  }

  mudarPontuacaoTime2Mais() {
    if(this.pontuacaoTime2 <= 11) {
    this.pontuacaoTime2 = this.valendo + this.pontuacaoTime2;
    }else(this.pontuacaoTime2 = 0)
  }

  mudarPontuacaoTime2Menos() {
    if(this.pontuacaoTime2 = 0) {
    this.pontuacaoTime2 = this.pontuacaoTime2 - this.valendo;
    }
  }

  mudarPartidasTime1() {
    if(this.pontuacaoTime1 > 12) {
      this.partidasTime1 = this.partidasTime1 + 1;
    }
  }

  mudarPartidasTime2() {
    if(this.pontuacaoTime2 > 12) {
      this.partidasTime2 = this.partidasTime2 + 1;
    }
  }

  limpar() {
    this.valendo;
    this.pontuacaoTime1;
    this.pontuacaoTime2;
    this.partidasTime1;
    this.partidasTime2;
  }
}
