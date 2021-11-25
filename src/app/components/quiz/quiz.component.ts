import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public title = 'quiz';
  public answers: Array<any> = [];

  public quiz: any = {};
  public quizQuestions: Array<any> = [];

  // Sukuriamas datos objekas
  public today: any = new Date();
  public currentQuestion : number = 0;

  // Kintamasis saugoti kiek % klausimu yra atsakyta
  public progress : number = 0;

  constructor(db: AngularFireDatabase) {
    console.log("Siandienos data: ");
    console.log(this.today);

    // Jei naudojame toki buda, tuomet, ngFor dalyje turime naudoti | async pipe
    // https://angular.io/guide/observables-in-angular#async-pipe
    // this.answersFromDatabase = db.list('answers').valueChanges();

    db.object('quizes/abc').valueChanges().subscribe((data : any ) => {
      console.warn("Quiz data:");
      this.quiz = data;
      this.quizQuestions = data.questions;

      console.warn(this.quizQuestions);
    });
  }

  nextQuestion() {
    this.currentQuestion++;
    this.countProgress();
  }

  previousQuestion() {
    this.currentQuestion--;
    this.countProgress();
  }

  countProgress() {
    let questionsCount = Object.keys(this.quizQuestions).length;
    this.progress = (this.currentQuestion) / questionsCount  * 100;
    console.log("Progress: " + this.progress);
  }

  ngOnInit(): void {
  }

}
