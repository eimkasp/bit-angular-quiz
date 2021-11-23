import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'quiz';

  public answers : Array<any> = [
    "Atsakymas 1",
    "Atsakymas 2",
    "Atsakymas 3",
    "Atsakymas 4",
  ];

  constructor(private db: AngularFirestore) {
    const things = db.collection('quizes').doc('I4sClmfgnkkThp84dTAv').collection('answers').valueChanges();
    things.subscribe(console.log);
  }
}
