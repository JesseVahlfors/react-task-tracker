function Task ({id, title, priority}) {
    return (
        <div>
            <input type="checkbox"
            id={id}
            name={id}
            value={id}
            />

            <label htmlFor={id}>{title}</label>

            <br/>

            <p>
                Priority: {priority}
            </p>

            <br />
        </div>
    )
}

export default Task