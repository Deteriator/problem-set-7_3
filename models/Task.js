const db = require('../db');

class Task {
  static createTask(taskName, taskDescription, dueDate, isComplete = false) {
    return db.query(`INSERT INTO task(task_name, task_description, due_date,is_complete)
    VALUES($1,$2,$3,$4);`, [taskName, taskDescription, dueDate, isComplete]);
  }

  static getLastTask() {
    return db.query('SELECT * FROM task ORDER BY id DESC LIMIT 1 ;');
  }

  static getAll() {
    return db.query('SELECT * FROM task ;');
  }

  static getTask(id) {
    return db.query('SELECT * FROM task WHERE id = $1', [id]);
  }

  static updateTask(id, taskName, taskDescription, dueDate, isComplete = false) {
    return db.query('UPDATE task SET task_name = $2, task_description = $3, due_date = $4,is_complete = $5 WHERE id = $1', [id, taskName, taskDescription, dueDate, isComplete]);
  }

  static deleteTask(id) {
    return db.query('DELETE FROM task WHERE id = $1 ;', [id]);
  }

  static markComplete(id, isComplete) {
    return db.query('UPDATE task SET is_complete = false WHERE id = $1', [id, isComplete]);
  }
}

module.exports = Task;
