import React, { useContext, useEffect, Fragment } from "react";
import { GithubContext } from "../context/github/githubContext";
import { Link } from "react-router-dom";
import { Repos } from "../components/Repos";

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists
  } = user;

  return (
    <Fragment>
      <Link to={"/"} className="btn btn-link">
        To main
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{ width: 150 }} />
              <h2>{name}</h2>
              {location && <p>location: {location}</p>}
            </div>
            <div className="col">
              {login && (
                <span style={{ display: "flex" }}>
                  <strong>Username:&nbsp;</strong>
                  {login}
                </span>
              )}
              <div
                style={{
                  border: "1px solid #000",
                  borderRadius: 10,
                  padding: " 0 5px 0 5px",
                  margin: "10px 0"
                }}
              >
                {bio && (
                  <Fragment>
                    <strong
                      style={{
                        fontSize: 20
                      }}
                    >
                      Biography:
                    </strong>
                    <p>{bio}</p>
                  </Fragment>
                )}
              </div>
              <a
                href={html_url}
                target={"_blank"}
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Open profile
              </a>
              <ul>
                {company && (
                  <li>
                    <strong>Company: {company}</strong>
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>
                      Website:{" "}
                      <a
                        href={blog}
                        target={"_blank"}
                        rel="noopener noreferrer"
                      >
                        {blog}
                      </a>
                    </strong>
                  </li>
                )}
              </ul>
              <div className="badge badge-primary mr-2">Followers: {followers}</div>
              <div className="badge badge-success mr-2">Subscribe: {following}</div>
              <div className="badge badge-info mr-2">
                Repositories: {public_repos}
              </div>
              <div className="badge badge-dark mr-2">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};
