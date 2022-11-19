import FooterButtons from '../tasks-filter';
import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';

function FooterInformation({
  restOfTasks,
  deletingAllCompleted,
  allTasksFilter,
  activeTasksFilter,
  completedTasksFilter,
  styleButFilter,
}) {
  return (
    <footer className="footer">
      <span className="todo-count">{restOfTasks} осталось</span>
      <FooterButtons
        allTasksFilter={() => {
          allTasksFilter();
        }}
        activeTasksFilter={() => {
          activeTasksFilter();
        }}
        completedTasksFilter={() => {
          completedTasksFilter();
        }}
        styleButFilter={styleButFilter}
      />
      <button type="button" onClick={deletingAllCompleted} className="clear-completed">
        Очистить завершенные
      </button>
    </footer>
  );
}

FooterInformation.propTypes = {
  restOfTasks: PropTypes.number,
  deletingAllCompleted: PropTypes.func,
  allTasksFilter: PropTypes.func,
  activeTasksFilter: PropTypes.func,
  completedTasksFilter: PropTypes.func,
};

FooterInformation.defaultProps = {
  restOfTasks: 0,
  deletingAllCompleted: () => {},
  allTasksFilter: () => {},
  activeTasksFilter: () => {},
  completedTasksFilter: () => {},
};

export default FooterInformation;
