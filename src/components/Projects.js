import React, { useState } from "react";

export default function Projects() {
  const [data, set_data] = useState(null);

  fetch("./projects.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      set_data(data);
    })
    .catch(function (err) {
      console.log(err, "fetch data error");
    });

  return (
    <div>
      <div>
        {data
          ? data.map((data, idx) => {
              return <p>{data.project_about}</p>
            })
          : null}
      </div>
    </div>
  );
}
