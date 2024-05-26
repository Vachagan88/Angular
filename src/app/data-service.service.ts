import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private  data:any[]=[];

  constructor() { }

  getData(): any[] {
    return this.data;
  }

  addTask(item: string): void{
    this.data.push({id : this.data.length, name : item});
  }

  removeTask(id: number): void {
    this.data = this.data.filter(item=>item.id !== id);
  }
}
