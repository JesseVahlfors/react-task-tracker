function Task({ id, title, priority, completed, onToggle, onDelete }) {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={completed}
        onChange={() => onToggle(id)}
      />

      <label htmlFor={id}>{title}</label>

      <p>Priority: {priority}</p>

      <p>Status: {completed ? "Done" : "Todo"}</p>

      <button onClick={() => onDelete(id)}>Delete Task</button>
    </div>
  );
}

export default Task;
