import React from "react";
import {data} from "./aboutData";

function AboutPage() {
  return (
    <>
      <div style={{ marginTop: "5rem", width: "50vw", position: "relative", top:"50%", left:"50%", transform:"translateX(-50%)" }}>
        <table className="table table-striped">
          <tbody>
            {data.map((pair) => {
              return (
                <tr>
                  <th scope="row">{pair.key}</th>
                  <td>{pair.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AboutPage;
