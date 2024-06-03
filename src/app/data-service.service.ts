import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data:any[]=[];

  constructor() { }

  getData(): any[] {
    return this.data;
  }

  addTask(item: string): void{
    this.data.push({id : this.data.length, name : item});
    console.log(this.data);
  }

  removeTask(id: number): void {
    let currentData = [];
    for(let i = 0; i < this.data.length; i++){
      if(i < id){
        currentData.push({id : i, name : this.data[i].name});
      }
      if(i > id){
        currentData.push({id : i - 1, name : this.data[i].name});
      }

      this.data = currentData;
    }
  }

  updateTask(id: number, item: any): void{
    this.data[item.id].name = item;
  }
}
