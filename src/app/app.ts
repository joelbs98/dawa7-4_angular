import {Component} from '@angular/core';
import {Header} from './components/header/header';
import {TaskList} from './components/task-list/task-list';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, TaskList,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App{

}