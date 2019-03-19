import React, { PureComponent } from "react";

class SearchInput extends PureComponent {
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <form>
        <div className="form-group">
        <label>Enter Company Name:</label>
          <input type='text' onChange={this.handleChange} />
        </div>
        </form>
    );
  }
}

export default SearchInput;
