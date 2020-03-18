import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    contactName: '',
    tel: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });
    this.setState({ contactName: '', tel: '' });
  };

  render() {
    const { contactName, tel } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="contactName"
            value={contactName}
            onChange={this.handleChange}
            placeholder="Please enter name"
          />
        </label>

        <label>
          Number:
          <input
            type="tel"
            name="tel"
            value={tel}
            onChange={this.handleChange}
            placeholder="Please enter phone nr"
          />
        </label>

        <button type="submit">Add contact </button>
      </form>
    );
  }
}
