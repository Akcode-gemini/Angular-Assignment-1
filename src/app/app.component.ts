import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Assignment 1';
  display = false;
  count = 0;
  name = '';
  nameList: { text: string }[] = [];
  onClick() {
    this.display = !this.display;
    this.count++;
    //log the click
    console.log('Button is clicked', this.count, 'times');
  }
  Add() {
    if (this.name) {
      this.nameList.push({ text: this.name });
      this.name = '';
    }
  }
}
