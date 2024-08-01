import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() id!: string;
  @Input() avatar!: string;
  @Input() name!: string;
  @Output() select = new EventEmitter<string>();

  imagePath(): string {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    console.log('Button clicked in ChildComponent. Emitting ID:', this.id);
    this.select.emit(this.id);
  }
  
}
