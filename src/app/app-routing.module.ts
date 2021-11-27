import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizCreateComponent } from './components/quiz-create/quiz-create.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  // Route'as atvaizduoti visus quizus
  { path: '', component: QuizListComponent },
  { path: 'quiz/create', component: QuizCreateComponent },
  // Route'as atvaizduoti konkretu quiz
  { path: 'quiz/:id', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
