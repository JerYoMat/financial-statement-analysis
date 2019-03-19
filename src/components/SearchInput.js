import React, { PureComponent } from "react";

class SearchInput extends PureComponent {
  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default SearchInput;
