/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './task.css';

export default class OneTask extends React.Component {
  state = {
    date: 'less than 5 seconds ago',
  };

  componentDidMount() {
    const { time } = this.props;
    this.setState({ timer: time });
    this.hendelStart();
  }

  taskCreationTimeUpdate = () => {
    const { timeСreation } = this.props;
    this.setState(() => {
      const createdTaim = `${formatDistanceToNow(timeСreation, {
        includeSeconds: true,
      })}`;
      return { date: createdTaim };
    });
  };

  hendelStart = () => {
    const { setin, timer } = this.state;
    const { time } = this.props;

    clearInterval(setin);
    if (setin === null) return;

    const timeIsNow = Math.floor(Date.now() / 1000);
    let stopTime;
    if (timer) {
      stopTime = timeIsNow + timer;
    } else {
      stopTime = timeIsNow + time;
    }
    this.setState({ timeIsStop: stopTime });

    const timerInterval = setInterval(() => {
      const { timeIsStop } = this.state;
      const currentTime = Math.floor(Date.now() / 1000);
      const num = timeIsStop - currentTime;
      if (num <= 0) {
        this.hendelStop();
        this.setState({ setin: null });
      }
      this.setState({ timer: num });
    }, 1000);

    this.setState({ setin: timerInterval });
  };

  hendelStop = () => {
    const { setin } = this.state;
    clearInterval(setin);
  };

  render() {
    const { lab, delEl, completedTask, editingTaskBut } = this.props;
    const { date, timer } = this.state;

    const minut = Math.floor(timer / 60);
    const min = minut.toString().padStart(2, '0');
    const second = timer - minut * 60;
    const sec = second.toString().padStart(2, '0');

    setInterval(this.taskCreationTimeUpdate, 5000);

    return (
      <div className="view">
        <input onChange={completedTask} className="toggle" type="checkbox" />
        <label>
          <span className="title">{lab}</span>
          <span className="description description-timer">
            <button onClick={this.hendelStart} type="button" className="icon icon-play" />
            <button onClick={this.hendelStop} type="button" className="icon icon-pause" />
            <div className="timeOfimer">{`${min}:${sec}`}</div>
          </span>

          <div className="taim-created">
            <span className="description">{`Created ${date}`}</span>
          </div>
        </label>
        <button type="button" onClick={editingTaskBut} className="icon icon-edit" />
        <button type="button" onClick={delEl} className="icon icon-destroy" />
      </div>
    );
  }
}

OneTask.defaultProps = {
  delEl: () => {},
  completedTask: () => {},
  editingTaskBut: () => {},
};

OneTask.propTypes = {
  delEl: PropTypes.func,
  completedTask: PropTypes.func,
  editingTaskBut: PropTypes.func,
};
