import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  password= 'Tuna'
  showSecret = false
  logs = []

  onButtonClick() {
    this.logs.push(new Date())
    this.showSecret = !this.showSecret
  }
}
