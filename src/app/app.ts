import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lint-test');

  private readonly x: string[] = ['teste', 'find', 'outro'];

  private fun() {
    const y = this.x.map((z) => {
      if (z == 'find'){
        return z;
      }
      return 'not find';
    });
    return y;
  }
}