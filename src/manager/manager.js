// тут должен быть менеджер задач на классе

const taskModel = {
  id: 'uniq string',
  created: 'Date',
  title: 'string',
  description: 'string',
  expiresAt: 'Date',
};

export class Manager {
  _opened = []; // массив тасок
  _inProcess = []; // массив тасок
  _tasks = []; // массив тасок

  constructor() {}

  create() {}

  upadate(taskId, payload) {}

  delete(taskId) {}

  get tasks() {
    return this._opened;
  }
}
