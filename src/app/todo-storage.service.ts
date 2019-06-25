import { Injectable } from '@angular/core';

const storageName = "todo_list";

const defaultList = [
  { task: 'install NodeJS' },
];

@Injectable({
  providedIn: 'root'
})

export class TodoStorageService {
  private todoList;
  
  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }
 
  get() {
    return [...this.todoList];
  }

  post(value) {
    this.todoList.push(value);     
    return this.update();
  }

  findOneAndRemove() {
    for(let i = 0 ;i <= this.todoList.length; i++) {    
      if (i == 0) {
        this.todoList.pop();    
      }
    }  
    return this.update();
  }

  findAllAndRemove() {
    this.todoList.splice(0); 
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }
}
