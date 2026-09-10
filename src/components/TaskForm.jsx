import { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("normal");

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      title,
      priority,
      completed: false,
    };

    onAdd(newTask);

    setTitle("");
    setPriority("normal");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task name:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label>
        Priority:
        <select
          name="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="high">High</option>
          <option value="normal">Normal</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </label>
    </form>
  );
}

export default TaskForm;
