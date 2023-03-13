import { getStorage } from 'shared/lib/local-storage'
import Base = Res_Todo.Base

export const initialState: TodoModel = {
	todos: [],
	// todos: getStorage<Base[]>('todos', []),
}

// TODO
