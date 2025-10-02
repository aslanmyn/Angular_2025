import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  title = 'Angular homework';
  mission = 'About Us page with Angular data bindings';
  author = 'Aslan Mustafaev';


  photoUrl =
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop';
  isButtonDisabled = false;


  likes = 0;
  showExtra = false;

  like(): void { this.likes++; }
  toggleExtra(): void { this.showExtra = !this.showExtra; }
  toggleDisable(): void { this.isButtonDisabled = !this.isButtonDisabled; }


  name = '';
  email = '';
  showThanks = false;

  get emailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  subscribe(): void {
    if (this.emailValid) this.showThanks = true;
  }

  reset(): void {
    this.name = '';
    this.email = '';
    this.showThanks = false;
  }


  get emailLink(): string {
    return 'mustafaev.aslan55@gmail.com';
  }
}
