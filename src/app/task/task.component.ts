import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  
  closeResult: string;
  taskList = [];
  task: string;
  constructor(private modalService: NgbModal, private todoService: TodoService) {
    
  }

  ngOnInit() {
    this.taskList = this.todoService.getTodoList();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onAddTask(value) {
    this.taskList = this.todoService.addTask(value);
  }

  removeTask() {   
    this.taskList = this.todoService.removeTask();
  }

  deleteAllTask() {
    this.taskList = this.todoService.deleteTask();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    }
  }

}
