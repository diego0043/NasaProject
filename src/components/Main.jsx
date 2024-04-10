import React from "react";
import { GetData } from "../Helpers/GetData";
import { useState } from "react";
import { Loader } from "./Loader";
import { Error } from "./Error";
import Swal from "sweetalert2";

const Main = () => {
  const { getData, data } = GetData();
  const [loading, setLoading] = useState(false);

  const loadingAnimationData = () => {
    const position = document.querySelector("input").value;
    if (position === "") {
      Swal.fire({
        title: "Type a location to search!",
        text: "Please enter a location to search for images.",
        icon: "error",
      });
    } else if (position.split(",").length !== 2 || position.split(",")[0] === "" || position.split(",")[1] === "" ) {
      
        Swal.fire({
          title: "Invalid location!",
          text: "Please enter a valid location to search for images.",
          icon: "error",
        });      
    } else {
      setLoading(true);
      setTimeout(() => {
        getData();
        setLoading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "info",
          title: "Wait a moment, your images are being loaded!",
        });
      }, 1000);
    }
  };

  // forzaremos a actualizar más rapido cada vez que data cambia
  // para que se muestre el resultado de la búsqueda
  React.useEffect(() => {}, [data]);

  return (
    <>
      <main className="container-search">
        <h1 className="btn-shine">EARTH EXPLORER </h1>
        <div className="main-search_section">
          <input
            id="consult"
            type="text"
            required
            placeholder="Where do you want to go?"
          />
          <button type="" onClick={() => loadingAnimationData()}>
            <i className="animation"></i>GO<i className="animation"></i>
          </button>
        </div>
      </main>
      {loading && <Loader />}
      {!loading && data.length > 0 && (
        <div className="search-result">
          <h2 className="title-images">Your Place</h2>
          <div className="search-result_grid">
            {data.map((item, index) => (
              <div key={index} className="search-result_data card">
                <p className="title-card">{item.date}</p>
                {item.date === "No imagery for specified date." ? (
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
