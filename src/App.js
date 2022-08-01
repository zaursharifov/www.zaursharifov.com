import { useState } from "react";

function App() {
  const [data, set_data] = useState(null);

  fetch("./data.json")
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
    <div className="App">
      <div>
        {data
          ? data.map((data, idx) => {
              return (
                <div>
                  <img key={idx} src={data.home_photo} alt="a"></img>
                  <p>{data.linkedin}</p>
                  <p>{data.last_companies}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default App;
