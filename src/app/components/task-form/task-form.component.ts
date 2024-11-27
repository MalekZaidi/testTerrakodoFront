import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({standalone: true,
  imports: [
    FormsModule, 
    CommonModule, 
  ],
  providers: [
    TaskService,
  ],  // Importer FormsModule ici
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  taskData = { title: '', description: '', priority: 1, due_date: '' };

  constructor(private taskService: TaskService, private router: Router) {}

  saveTask() {
    this.taskService.addTask(this.taskData).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}
