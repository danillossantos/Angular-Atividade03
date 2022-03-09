import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'atividade03';
  numero:number = 0
  

    diminuir() {
      this.numero--
    }

    aumentar() {
      this.numero++
    }
}
