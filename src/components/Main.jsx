import React from "react";
import { GetData } from "../Helpers/GetData";
import { useState } from "react";
import { Loader } from "./Loader";
import { Error } from "./Error";
const Main = () => {
  const { getData, data } = GetData();
  const [loading, setLoading] = useState(false);

  const loadingAnimationData = () => {
    setLoading(true);

    setTimeout(() => {
      getData();
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <main>
        <h1>EARTH EXPLORER </h1>
        <div className="main-search_section">
          <input
            id="consult"
            type="text"
            placeholder="Where do you want to go?"
          />
          <button type="" onClick={() => loadingAnimationData()}>
            <i className="animation"></i>GO<i className="animation"></i>
          </button>
        </div>
      </main>
      {loading && <Loader />}
      {!loading &&
        data.length >
        (
          <div className="search-result">
            <h2 className="title-images">Your Place</h2>
            <div className="search-result_grid">
              {data.map((item, index) => (
                <div key={index} className="search-result_data card">
                  <p className="title-card">{item.date}</p>
                  {item.msg === "No imagery for specified date." ? (
                    <img src={item.errorImage} alt="Imagen de Mapa" />
                  ) : (
                    <img src={item.url} alt="Imagen de Mapa" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
    </>
  );
};

export default Main;
