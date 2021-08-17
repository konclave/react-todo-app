export function Summary({ todos }) {
	const total = todos.length;
	const completed = todos.reduce((acc, todo) => acc += Number(todo.completed), 0);

	return (
		<>
			<span>Total of items: {total}</span>
			{' | '}
			<span>Completed: {completed}</span>
		</>
	);
}