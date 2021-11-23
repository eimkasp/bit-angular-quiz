import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'quiz';

  public answers: Array<any> = [
    "Atsakymas 1",
    "Atsakymas 2",
    "Atsakymas 3",
    "Atsakymas 4",
  ];

  // Sukuriamas datos objekas
  public today: any = new Date();
  public currentQuestion : number = 0;

  // Kintamasis saugoti kiek % klausimu yra atsakyta
  public progress : number = 0;

  constructor() {
    console.log("Siandienos data: ");
    console.log(this.today);
  }


  nextQuestion() {
    this.currentQuestion++;
    this.progress = this.currentQuestion / this.answers.length  * 100;
    console.log("Progress: " + this.progress);
  }
}
