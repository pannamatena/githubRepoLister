/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import colors from '../resources/colors';

const ContributorsItem = (props) => {
  const style = {
    repoItem: css`
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: stretch;
      margin: 20px;
      padding: 20px;
      background: ${colors.bg_2};
      bprder: 1px solid ${colors.border};
      
     h3 {
      margin-bottom: 20px;
     }
      
      a {
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
          <img alt={props.itemData.login} src={props.itemData.avatar_url} />
        </div>
        <div css={style.itemInfo}>
          <h3>{props.itemData.login}</h3>
        </div>

      </div>
  );
};

export default ContributorsItem;
