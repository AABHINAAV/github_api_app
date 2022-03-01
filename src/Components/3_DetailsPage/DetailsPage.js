import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setFFLink } from "../../redux/userAction";

function DetailsPage({ wholeData, setFFLinkFun }) {
  const navigate = useNavigate();
  let data = wholeData.user;

  function setLinkAndNavigate(link, url) {
    setFFLinkFun(link);
    navigate(url);
  }

  return (
    <div className="details_main">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img
              src={data.avatar_url}
              className="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col-1"></div>
          <div className="col-7">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">Log-In Name</th>
                  <td>{data.login}</td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <th scope="row">Company</th>
                  <td>{data.company === null ? "NA" : data.company}</td>
                </tr>
                <tr>
                  <th scope="row">Location</th>
                  <td>{data.location === null ? "NA" : data.location}</td>
                </tr>
                <tr>
                  <th scope="row">Bio</th>
                  <td>{data.bio === null ? "NA" : data.bio}</td>
                </tr>
                <tr>
                  <th scope="row">Repositories</th>
                  <td>{data.public_repos}</td>
                </tr>
                <tr>
                  <th scope="row">Followers</th>
                  <td>{data.followers}</td>
                </tr>
                <tr>
                  <th scope="row">Followings</th>
                  <td>{data.following}</td>
                </tr>
                <tr>
                  <th scope="row">Created At</th>
                  <td>{data.created_at}</td>
                </tr>
                <tr>
                  <th scope="row">Last Updated</th>
                  <td>{data.updated_at}</td>
                </tr>
              </tbody>
            </table>

            {/* followers and following and github id link buttons*/}
            <div className="row">
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    setLinkAndNavigate(
                      data.followers_url,
                      `/DetailsPage/${data.name}/followers`
                    )
                  }
                >
                  Check Followers
                </button>
              </div>

              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    setLinkAndNavigate(
                      `https://api.github.com/users/${data.login}/following`,
                      `/DetailsPage/${data.name}/followings`
                    )
                  }
                >
                  Check Followings
                </button>
              </div>

              <div className="col">
                <a
                  className="btn btn-primary"
                  href={data.html_url}
                  rel="noreferrer"
                  target="_blank"
                >
                  Go To GitHub Id
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* back to home page button */}
      <div
        className="button_wrapper col-5 text-center"
        onClick={() => {
          navigate(-1);
        }}
      >
        <button type="button" className="btn btn-primary">
          Back To Home Page
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wholeData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFFLinkFun: (link) => dispatch(setFFLink(link)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
