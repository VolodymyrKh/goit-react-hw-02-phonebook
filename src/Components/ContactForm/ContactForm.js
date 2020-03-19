import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Please enter name"
          />
        </label>

        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Please enter phone nr"
          />
        </label>

        <button type="submit">Add contact </button>
      </form>
    );
  }
}
