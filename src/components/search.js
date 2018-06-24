import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form>
        <div className="input-field">
          <input id="search" type="search" required placeholder="search" />
          <label className="" for="search"><i className="material-icons">search</i></label>
        </div>
      </form>
    );
  }
}

export default Search;