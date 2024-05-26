import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DataServiceService} from "./data-service.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'To-Do-List';
  task:any ='';
  updateTaskText:any ='';

  constructor(protected dataService: DataServiceService) {
  }

  addTask(item: string): void{
    this.dataService.addTask(item);
  }

  removeTask(id: number): void{
    this.dataService.removeTask(id);
  }

  updateTask(id: number): void{
    this.dataService.updateTask(id, this.updateTaskText);
  }
}

