import React from 'react';

const Search = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '40px',
      }}
    >
      <h2>Search Blog by Subject:</h2>
      <form className="ui form">
        <div className="field">
          <input
            type="text"
            placeholder="Search"
            value={props.searchTerm}
            onChange={props.onChange}
          />
        </div>
      </form>
    </div>
  );
};
export default Search;
