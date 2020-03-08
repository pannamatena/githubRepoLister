/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import { useResource } from 'react-request-hook';
import {Link, useParams} from "react-router-dom";
import colors from '../resources/colors';
import ContributorsItem from './ContributorsItem';
import Search from "./Search";
import RepoList from "./RepoList";

const ContributorsList = () => {
  const { ownerName, repoName } = useParams();

  const [contListResponse, getContListResponse] = useResource((ownerName, repoName) => ({
    method: 'GET',
    url: `/repos/${ownerName}/${repoName}/contributors`,
  }));

  useEffect(() => getContListResponse(ownerName, repoName), []);

  const style = {
    contributorsList: css`
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
    `,
    topSection: css`
      padding: 20px;
    `,
    backBtn: css`
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
    `,
    emptyMsg: css`
      font-size: 18px;
      text-align: center;
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

  const renderRepoItems = () => {
    if(contListResponse.isLoading) return (
        <div css={style.loadingMsg}>
          Fetching contributors...
        </div>
    );

    if(contListResponse.error) return (
        <div css={style.errorMsg}>
          Something went wrong!
        </div>
    );

    return contListResponse.data && contListResponse.data.length > 0 ?
        contListResponse.data.map(item => (
            <ContributorsItem itemData={item} key={item.id} />
        ))
        : (
            <div css={style.emptyMsg}>
              There are no contributors to list.
            </div>
        );

  };

  return (
      <>
        <div css={style.topSection}>
          <Link css={style.backBtn} to="/">Back</Link>
        </div>
        <div css={style.contributorsList}>
          {renderRepoItems()}
        </div>
      </>
  );
};

export default ContributorsList;
