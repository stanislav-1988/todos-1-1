import React from 'react';
import PropTypes from 'prop-types';

import './editingActiveTask.css';

export default class EditingActiveTask extends React.Component {
  state = {
    label: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    let { label } = this.state;
    const { newTextTask, id } = this.props;
    if (label === '') {
      this.setState(() => {
        label = 'Пустая задача';
        newTextTask({ label, id });
      });
    } else {
      newTextTask({ label, id });
    }
  };

  inputValue = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    const { lab } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input onChange={this.inputValue} type="text" className="edit" defaultValue={lab} />
      </form>
    );
  }
}

EditingActiveTask.defaultProps = {
  newTextTask: () => {},
};

EditingActiveTask.propTypes = {
  newTextTask: PropTypes.func,
};
