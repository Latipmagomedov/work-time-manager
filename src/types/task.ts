interface ITask {
  id: number,
  createdAt: string,
  updatedAt: string,
  isFavorites: boolean,
  title: string,
  description: string,
  completed: boolean,
  deadline: string,
  userId: string,
  subtasks: ISubtasks[]
}

interface ISubtasks {
  id: number,
  title: string,
  completed: boolean
}

export default ITask;
