function Task () {
    return (
        <div>
            <input type="checkbox" id='task1' name="name1" value='task1' />
            <label htmlFor="task1"> Task</label>
            <br/>
            <select id="priority1">
                <option value="high">High</option>
                <option value="normal">Normal</option>
                <option value="low">Low</option>
            </select>
            <br />
        </div>
    )
}

export default Task