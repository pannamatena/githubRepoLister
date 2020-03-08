/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { Link } from "react-router-dom";
import colors from '../resources/colors';

const RepoItem = (props) => {
  const style = {
    repoItem: css`
      display: flex;
      flex-direction: row;
      align-items: felx-start;
      justify-content: stretch;
      margin: 20px;
      padding: 20px;
      background: ${colors.bg_2};
      bprder: 1px solid ${colors.border};
      
     h3 {
      margin-bottom: 20px;
     }
      
      a {
        display: inline-block;
        background: ${colors.action_2};
        padding: 10px;
        color: ${colors.action_text};
        font-weight: bold;
        text-transform: uppercase;
        
        &:hover,
        &:active {
          cursor: pointer;
          background: ${colors.action_2_h};
        }
      }
    `,
    itemImg: css`
      max-width: 100px;
      margin-right: 20px;
      
      img {
        width: 100%;
      }
    `,
    itemInfo: css`
      flex: 1;
    `,
  };

  return (
      <div css={style.repoItem}>
        <div css={style.itemImg}>
          <img alt={props.itemData.owner.login} src={props.itemData.owner.avatar_url} />
        </div>
        <div css={style.itemInfo}>
          <h3>{props.itemData.name}</h3>
          <Link to={`/contributors/${props.itemData.owner.login}/${props.itemData.name}`}>Contributors</Link>
        </div>

      </div>
  );
};

export default RepoItem;
