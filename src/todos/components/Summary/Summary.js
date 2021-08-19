export function Summary({ total, completed }) {
	return (
		<div className="todos-summary">
			<span>Total of items: {total}</span>
			{' | '}
			<span>Completed: {completed}</span>
		</div>
	);
}