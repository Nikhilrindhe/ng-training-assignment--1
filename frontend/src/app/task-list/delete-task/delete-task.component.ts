import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/task.model';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../tasklist/task.service';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css'],
})
export class DeleteTaskComponent {
  @Input() task: Task = {};

  @Output() delete = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter();

  constructor(private taskService: TaskService) {}

  onNo() {
    this.cancel.emit();
  }

  onYes() {
    console.log(`onYesh ${this.task._id}`)
    this.taskService.deleteTask(this.task._id);
    this.delete.emit();
  }
}
