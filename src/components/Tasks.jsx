import Task from "./Task"
// import PropTypes from 'prop-types'

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {tasks.map((task) => (
                // <h3 key={task.id}>{task.text}</h3>
                <Task task={task} key={task.id} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}


// Tasks.propTypes = {
//     tasks: PropTypes.array,
// }
export default Tasks