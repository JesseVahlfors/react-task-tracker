function TaskControls({ filter, sortOrder, onFilterChange, onSortChange }) {
  return (
    <div className="task-controls">
      <select
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)}
      >
        <option value="all">All</option>
        <option value="todo">Todo</option>
        <option value="done">Done</option>
      </select>

      <select
        value={sortOrder}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="high-to-low">High to Low</option>
        <option value="low-to-high">Low to High</option>
      </select>
    </div>
  );
}

export default TaskControls;
