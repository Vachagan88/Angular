import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do-List';

  list:any[]=[];

  addTask(item: string): void{
    this.list.push({id : this.list.length, name : item});
    console.warn(this.list);
  }

  removeTask(id: number): void{
    console.warn(id);
    this.list= this.list.filter(item=>item.id !== id);
  }
}

