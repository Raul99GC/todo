import React from 'react'
import { Task } from '../Task/Task'
import styles from './tasks.module.css'

const Tasks = ({ tasks, onComplete, onDelete }) => {

  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter(task=> task.isCompleted).length


  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div className="">
          <p>Create tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div className="">
          <p className={styles.textPurple}>Completed</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {
          tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />

          ))
        }
      </div>
    </section>
  )
}

export default Tasks