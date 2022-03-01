import React, { useState } from "react";
import { connect } from "react-redux";

import { fetchUserData } from "../../redux/userAction";

function HomePage({ fetchUserData }) {
  const [id, setId] = useState("");

  function searchFun() {
    fetchUserData(id);
  }

  return (
    <>
      <div className="home_screen">
        {/* search field and search button */}
        <div className="search_section">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            {/* search button */}
            <span
              className="input-group-text"
              id="basic-addon2"
              style={{ cursor: "pointer" }}
              onClick={searchFun}
            >
              Search
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (id) => dispatch(fetchUserData(id)),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
