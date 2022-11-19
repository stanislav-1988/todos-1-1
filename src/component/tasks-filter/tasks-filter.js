import React from 'react';
import PropTypes from 'prop-types';

import './tasks-filter.css';

function FooterButtons({ allTasksFilter, activeTasksFilter, completedTasksFilter, styleButFilter }) {
  const butAll = styleButFilter === 1 ? 'selected' : '';
  const butActiv = styleButFilter === 2 ? 'selected' : '';
  const butComplet = styleButFilter === 3 ? 'selected' : '';

  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={allTasksFilter} className={butAll}>
          Все
        </button>
      </li>
      <li>
        <button type="button" onClick={activeTasksFilter} className={butActiv}>
          Активные
        </button>
      </li>
      <li>
        <button type="button" onClick={completedTasksFilter} className={butComplet}>
          Завершенные
        </button>
      </li>
    </ul>
  );
}

FooterButtons.propTypes = {
  allTasksFilter: PropTypes.func,
  activeTasksFilter: PropTypes.func,
  completedTasksFilter: PropTypes.func,
  styleButFilter: PropTypes.number,
};

FooterButtons.defaultProps = {
  allTasksFilter: () => {},
  activeTasksFilter: () => {},
  completedTasksFilter: () => {},
  styleButFilter: 1,
};

export default FooterButtons;
