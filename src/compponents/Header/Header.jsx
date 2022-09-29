import React, { useState } from "react";
import styles from "./header.module.css";
import todoLogo from "../../assets/Logo.svg";
import { AiOutlinePlusCircle } from 'react-icons/ai'

const Header = ({ onAddTask }) => {

  const [title, setTitle] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onAddTask(title)
    setTitle('')
  }

  function onChangeTitle(event) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="this is a logo of todoLogo" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm} >
        <input placeholder="add a new task" type="text" value={title} onChange={onChangeTitle} />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
