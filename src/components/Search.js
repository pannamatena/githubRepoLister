/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import colors from '../resources/colors';

const Search = (props) => {
  const style = {
    searchContainer: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 20px;
      
      input {
        padding: 10px;
        border: 1px solid ${colors.border};
        font-size: 14px;
        max-width: 500px;
        flex: 1;
        
        &:focus {
          border: 1px solid ${colors.action_1};
        }
      }
      
      button {
        background: ${colors.action_1};
        padding: 12px;
        color: ${colors.action_text};
        font-weight: bold;
        text-transform: uppercase;
        min-width: 100px;
        text-align: center;
        
        &:hover,
        &:active {
          cursor: pointer;
          background: ${colors.action_1_h};
        }
        
        &:disabled {
          cursor: default;
          background: ${colors.action_1_d};
        }
      }
    `,
  };
  return (
      <div css={style.searchContainer}>
        <input type="search" name="repo_search" aria-label="Search for repos" value={props.value} onChange={event => props.onInputChange(event.target.value)}/>
        <button onClick={() => props.onSearch(props.value)} disabled={props.disabled}>Search</button>
      </div>
  );
};

export default Search;
