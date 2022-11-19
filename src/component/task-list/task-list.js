import EditingActiveTask from '../editingActiveTask/editingActiveTask';
import OneTask from '../task';
import React from 'react';

import './task-list.css';

function TaskList({ todos, completedTask, delEl, editingTaskBut, newTextTask }) {
  const item = todos.map((el) => {
    const { editingTask, timeСreation, lab, id, important, done, time } = el;

    const classAssignment = `${important ? 'completed' : ''}
       ${done ? 'display-none' : ''}
       ${editingTask ? 'editing' : ''}`;

    return (
      <li key={id} className={classAssignment}>
        <OneTask
          time={time}
          timeСreation={timeСreation}
          lab={lab}
          completedTask={() => {
            completedTask(id);
          }}
          delEl={() => {
            delEl(id);
          }}
          editingTaskBut={() => {
            editingTaskBut(id);
          }}
        />
        <EditingActiveTask lab={lab} id={id} newTextTask={newTextTask} />
      </li>
    );
  });
  return (
    <section className="main">
      <ul className="todo-list">{item}</ul>
    </section>
  );
}

export default TaskList;
