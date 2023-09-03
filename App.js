import React, { useState } from 'react';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
;

function tasksManager(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useState(
    tasksManager,
    to_dos
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }
  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>To-Do List</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const to_dos = [ {} ];