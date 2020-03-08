/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useResource } from 'react-request-hook';
import colors from '../resources/colors';
import Search from './Search';
import RepoList from './RepoList';
import ContributorsList from './ContributorsList';

const App = () => {
  const [searchKey, setSearchKey] = useState('');
  const [repoListResponse, getRepoListResponse] = useResource(searchKey => ({
    method: 'GET',
    url: `/search/repositories?q=${searchKey}`,
  }));

  const style = {
    gitRepoListContainer: css`
      max-width: 1200px;
      margin: 0 auto;
    `,
    loadingMsg: css`
      font-size: 18px;
      text-align: center;
    `,
    errorMsg: css`
      color: ${colors.error};
      font-weight: bold;
      font-size: 18px;
      text-align: center;
    `,
  };

  const renderAppContent = () => {
    if(repoListResponse.isLoading) return (
        <>
          <Search value={searchKey} onInputChange={setSearchKey} onSearch={getRepoListResponse} disabled />
          <div css={style.loadingMsg}>
            Fetching repos...
          </div>
        </>
    );

    if(repoListResponse.error) return (
        <>
          <Search value={searchKey} onInputChange={setSearchKey} onSearch={getRepoListResponse} />
          <div css={style.errorMsg}>
            Something went wrong!
          </div>
        </>
    );

    return (
        <>
          <Search value={searchKey} onInputChange={setSearchKey} onSearch={getRepoListResponse} disabled={searchKey === ''} />
          <RepoList repoItems={repoListResponse.data ? repoListResponse.data.items : []} />
        </>
    )
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div css={style.gitRepoListContainer}>
            {renderAppContent()}
          </div>
        </Route>
        <Route path="/contributors/:ownerName/:repoName">
          <ContributorsList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
