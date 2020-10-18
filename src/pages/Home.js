import React, { useContext, Fragment } from "react";
import { Search } from "../components/Search/Search";
import { Card } from "../components/Card/Card";
import { GithubContext } from "../context/github/githubContext";

export const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <Fragment>
      <Search />
      <div className="row">
        {loading ? (
          <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
          </div>
        ) : (
          users.map(user => (
            <div key={user.id} className="col-sm-3 mb-4">
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};
