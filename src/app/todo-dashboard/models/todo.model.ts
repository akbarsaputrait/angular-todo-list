export interface ITodo {
  id: string;
  title: string;
  finished: boolean;
}

export class Todo implements ITodo {
  id: string;
  title: string;
  finished: boolean;

  constructor(id: string, title: string, finished: boolean) {
    this.id = id;
    this.title = title;
    this.finished = finished;
  }
}
