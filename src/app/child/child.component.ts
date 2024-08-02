import { Component, EventEmitter, Input, Output, output } from '@angular/core';


//type alias 
// type Users = {
//   id : string,
//   name : string,
//   avatar : string
// }

//interface 

interface Users {
  id : string,
  name : string,
  avatar : string
}


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // @Input() id!: string;
  // @Input() avatar!: string;
  // @Input() name!: string;
@Input() users! : Users
  // @Input() users !: {
  //   id : string,
  //   name: string ,
  //   avatar : string
  // }
  // @Output() select = new EventEmitter<string>();
  //output()
  select = output<string>()

  imagePath(): string {
    // return 'assets/users/' + this.avatar;
    return 'assets/users/' + this.users.avatar;

  }

  onSelectUser() {
    console.log('Button clicked in ChildComponent. Emitting ID:', this.users.id);
    // this.select.emit(this.id);
    this.select.emit(this.users.id);

  }
  
}
