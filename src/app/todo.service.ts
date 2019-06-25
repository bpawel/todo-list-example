import { Injectable } from '@angular/core';
import { TodoStorageService } from './todo-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: TodoStorageService) { }

  getTodoList() {
    return this.storage.get();
  }

  addTask(value) {
    return this.storage.post(value);
  }

  removeTask() {
    return this.storage.findOneAndRemove();
  }

  deleteTask() {
    return this.storage.findAllAndRemove();
  }
}
