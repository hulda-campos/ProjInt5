import { Component } from '@angular/core';

// 1) Importa dependĂȘncias
import { AngularFireAuth } from '@angular/fire/auth'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(

    // 2) Injetar depedĂȘncias
    public auth: AngularFireAuth
  ) {}

}
