/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import RepoItem from './RepoItem';

const RepoList = (props) => {
  const style = {
    repoList: css`
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    `,
  };

  const renderRepoItems = () => {
    return props.repoItems.length > 0 && props.repoItems.map(item => (
        <RepoItem itemData={item} key={item.id} />
    ));
  };

  return (
      <div css={style.repoList}>
        {renderRepoItems()}
      </div>
  );
};

export default RepoList;
