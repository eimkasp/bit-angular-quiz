import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import { Quiz } from 'src/app/quiz.model';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.scss']
})
export class QuizCreateComponent implements OnInit {

  public quiz: Quiz = new Quiz();

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit(): void {
    console.log(this.quiz);
  }

  createQuiz(form : NgForm) {
    console.log(this.quiz);
    // Validacija

    /* Pridėjimui naudojame list funkcija is firebase
    nes tik ji turi push galimybe prideti duomenims prie jau esamu duomenu
    https://github.com/angular/angularfire/blob/master/docs/rtdb/lists.md#adding-new-items

    */
    const itemsRef = this.db.list('quizes');
    itemsRef.push(this.quiz).then(function() {
      alert("Quiz Sekmingai Sukurtas");
      form.reset();
    });


  }

}
