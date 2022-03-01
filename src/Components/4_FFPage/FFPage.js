import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { fetchFFList } from "../../redux/userAction";

function Card({ user }) {
  return (
    <div className="card singleCard">
      <img src={user.avatar_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <a
          className="btn btn-primary"
          href={user.html_url}
          rel="noreferrer"
          target="_blank"
        >
          Go To GitHub Id
        </a>
      </div>
    </div>
  );
}

function FFPage({ wholeData, fetchFFListFun }) {
  const navigate = useNavigate();

  let data = wholeData.fflist;

  let link = wholeData.fflink;

  useEffect(() => {
    fetchFFListFun(link);
  }, []);

  return (
    <>
      <div className="ff_main">
        {/* back to details page button */}
        <div
          className="button_wrapper col text-center"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <button type="button" className="btn btn-primary">
            Back To User Details Page
          </button>
        </div>

        {/* cards */}
        <div className="cards_list">
          {data.map((user) => {
            return <Card key={user.id} user={user} />;
          })}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    wholeData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFFListFun: (link) => dispatch(fetchFFList(link)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FFPage);
