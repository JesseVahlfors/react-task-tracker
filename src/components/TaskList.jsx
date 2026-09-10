import Task from './Task'
function TaskList (){

    const tasks = [
           {
            id: 'task1',
            title: 'Learn props',
            priority: 'High'
            },
            {
            id: 'task2',
            title: 'Learn data flow',
            priority: 'High'
            },
            {
            id: 'task3',
            title: 'Learn react',
            priority: 'High',
            }
    ]

    return (
        <div>
            <h2>Task Tracker</h2>

            <p>--------------------------</p>

            {tasks.map(task => (
                    <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    priority={task.priority}
                    />
            ))}

        </div>
    )
}

export default TaskList