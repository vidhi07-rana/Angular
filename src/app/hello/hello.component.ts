import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  // hello = output<string>()
  @Output() hello = new EventEmitter<string>()

  sayhello(){
    this.hello.emit( " Hiii " ); 
  }

}
