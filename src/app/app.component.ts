import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'quiz';

  public answers: Array<any> = [];
  // Sukuriamas datos objekas
  public today: any = new Date();
  public currentQuestion : number = 0;
  // Kintamasis saugoti kiek % klausimu yra atsakyta
  public progress : number = 0;

  // public answersFromDatabase : Observable<any[]>;


  constructor(db: AngularFireDatabase) {
    console.log("Siandienos data: ");
    console.log(this.today);

    // Jei naudojame toki buda, tuomet, ngFor dalyje turime naudoti | async pipe
    // https://angular.io/guide/observables-in-angular#async-pipe
    // this.answersFromDatabase = db.list('answers').valueChanges();

    db.list('answers').valueChanges().subscribe((data : any ) => {
      this.answers = data;
      console.log(this.answers);
    });

  }

  nextQuestion() {
    this.currentQuestion++;
    this.progress = this.currentQuestion / this.answers.length  * 100;
    console.log("Progress: " + this.progress);
  }
}
