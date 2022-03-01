import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function UserCard({ data }) {
  return (
    <>
      <div className="cards_list">
        {data.loading ? (
          <h1>Loading...</h1>
        ) : data.error !== "" ? (
          <h2>{data.error}</h2>
        ) : (
          Object.keys(data.user).length > 0 && (
            <>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={data.user.avatar_url}
                  className="card-img-top"
                  alt={`Avatar Image of ${data.user.name}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{data.user.name}</h5>
                  <p className="card-text">{data.user.bio}</p>
                  <NavLink to={`/detailspage/${data.user.name}`}>
                    <a className="btn btn-primary">Explore</a>
                  </NavLink>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.user,
  };
};

export default connect(mapStateToProps)(UserCard);
