import Task from "./Task";
import TaskForm from "./TaskForm";
import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: "task1",
      title: "Learn props",
      priority: "high",
      completed: false,
    },
    {
      id: "task2",
      title: "Learn data flow",
      priority: "high",
      completed: false,
    },
    {
      id: "task3",
      title: "Learn react",
      priority: "high",
      completed: false,
    },
  ]);
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

  return (
    <div>
      <h2>Task Tracker</h2>

      <p>--------------------------</p>
      <select
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="all">All</option>
        <option value="todo">Todo</option>
        <option value="done">Done</option>
      </select>

      <select
        value={sortOrder}
        onChange={(event) => setSortOrder(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="high-to-low">High to Low</option>
        <option value="low-to-high">Low to High</option>
      </select>

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
