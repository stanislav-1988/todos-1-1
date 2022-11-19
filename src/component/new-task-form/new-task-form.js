/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

export default class InputPanel extends React.Component {
  state = {
    lab: '',
    min: '',
    sec: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { addTaskOfForm } = this.props;
    const { lab, min, sec } = this.state;
    if (min === '' || sec > 60) {
      alert('НЕ КОРРЕКТНО ВВЕДЕННОЕ ВРЕМЯ ВЫПОЛНЕНИЯ ЗАДАЧИ');
    } else if (lab === '') {
      alert('НЕ ВВЕЛИ ЗАДАЧУ!');
    } else if (sec === '') {
      addTaskOfForm(lab, min, 0);
    } else {
      addTaskOfForm(lab, min, sec);
    }
    this.setState({
      lab: '',
      min: '',
      sec: '',
    });
  };

  inputValueTask = (e) => {
    const label = e.target.value;
    this.setState({ lab: label });
  };

  inputMinTask = (e) => {
    const min = e.target.value;
    this.setState({ min });
  };

  inputSecTask = (e) => {
    const second = e.target.value;
    this.setState({ sec: second });
  };

  render() {
    const { lab, min, sec } = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmitCapture={this.onSubmit} className="new-todo-form">
          <input type="submit" className="display-none" />
          <input
            key="text"
            onChange={this.inputValueTask}
            className="new-todo"
            placeholder="Добавить задачу"
            value={lab}
          />
          <input
            type="number"
            key="min"
            onChange={this.inputMinTask}
            className="new-todo-form__timer"
            placeholder="Min"
            value={min}
          />
          <input
            type="number"
            key="sec"
            onChange={this.inputSecTask}
            className="new-todo-form__timer"
            placeholder="Sec"
            value={sec}
          />
        </form>
      </header>
    );
  }
}

InputPanel.defaultProps = {
  addTaskOfForm: () => {},
};

InputPanel.propTypes = {
  addTaskOfForm: PropTypes.func,
};
