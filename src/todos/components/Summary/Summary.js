import { useStore } from 'nanostores/react';
import { todos as todosStore } from '../../stores/todos';
import { completed as completedStore } from '../../stores/completed';
export function Summary() {
  const todos = useStore(todosStore);
  const completed = useStore(completedStore);

	return (
		<div className="todos-summary">
			<span>Total of items: {todos.length}</span>
			{' | '}
			<span>Completed: {completed}</span>
		</div>
	);
}