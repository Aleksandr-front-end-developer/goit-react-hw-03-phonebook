import { Component } from 'react';

export class Filter extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
    this.handleFilter(e.target.value);
  };

  handleFilter = value => {
    this.props.onFilter(value);
  };
  render() {
    return (
      <label>
        Finds contacts by name
        <input
          onChange={this.handleChange}
          className="form__input"
          type="text"
          name="search"
          value={this.state.value}
        />
      </label>
    );
  }
}
