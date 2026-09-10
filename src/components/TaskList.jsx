import Task from "./Task";
import TaskForm from "./TaskForm";
import TaskControls from "./TaskControls";
import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "todo") {
      return !task.completed;
    }

    if (filter === "done") {
      return task.completed;
    }

    return true;
  });

  const priorityValue = {
    high: 3,
    normal: 2,
    low: 1,
  };

  const visibleTasks = [...filteredTasks];

  if (sortOrder === "high-to-low") {
    visibleTasks.sort(
      (a, b) => priorityValue[b.priority] - priorityValue[a.priority],
    );
  }

  if (sortOrder === "low-to-high") {
    visibleTasks.sort(
      (a, b) => priorityValue[a.priority] - priorityValue[b.priority],
    );
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((data) => {
        const fetchedTasks = data.map((task) => ({
          id: task.id,
          title: task.title,
          priority: "normal",
          completed: task.completed,
        }));

        setTasks(fetchedTasks);
      });
  }, []);

  return (
    <div className="task-list">
      <h2>Task Tracker</h2>

      <p>--------------------------</p>

      <TaskControls
        filter={filter}
        sortOrder={sortOrder}
        onFilterChange={setFilter}
        onSortChange={setSortOrder}
      />

      {visibleTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          priority={task.priority}
          completed={task.completed}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
      <TaskForm onAdd={addTask} />
    </div>
  );
}

export default TaskList;
