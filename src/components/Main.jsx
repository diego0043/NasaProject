import React, { useEffect } from "react";

const Main = () => {
  const [Datos, setDatos] = React.useState([]);
  const [Datos2, setDatos2] = React.useState([]);
  const [Datos3, setDatos3] = React.useState([]);
  const [Datos4, setDatos4] = React.useState([]);
  const [Datos5, setDatos5] = React.useState([]);
  const [Datos6, setDatos6] = React.useState([]);
  const [Datos7, setDatos7] = React.useState([]);
  const [Datos8, setDatos8] = React.useState([]);
  const [Datos9, setDatos9] = React.useState([]);

  let API_KEY = "nrvbaThb5ro5VIqRud7Axn0PCirbDXTVorCuWe9Y";
  let errorImage =
    "https://www.mdzol.com/u/fotografias/m/2020/8/6/f850x638-944869_1022358_5050.png";

  async function getData() {
    /* Refactorice esta parte del codigo ya que me que costaba controlar el ingreso de la longitud y la latitud*/
    let latLongInput = document.querySelector("input").value;
    /* Destructurizacion de los valores obtenidos desde el input */
    let [lat, long] = latLongInput.split(", ").map(parseFloat);

    // Verificar si se ingresaron valores válidos
    if (isNaN(lat) || isNaN(long)) {
      console.error(
        "Por favor ingrese valores numéricos válidos para latitud y longitud."
      );
      return;
    }

    let data2 = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2018-01-01&api_key=${API_KEY}`
    );
    let dataFormated2 = await data2.json();

    let data3 = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2015-02-01&api_key=${API_KEY}`
    );
    let dataFormated3 = await data3.json();

    let data4 = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2016-02-01&api_key=${API_KEY}`
    );
    let dataFormated4 = await data4.json();

    let data5 = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2017-02-01&api_key=${API_KEY}`
    );
    let dataFormated5 = await data5.json();

    let data = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2021-02-01&api_key=${API_KEY}`
    );
    let dataFormated = await data.json();

    let data6 = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2018-02-01&api_key=${API_KEY}`
    );
    let dataFormated6 = await data6.json();

    let data7 = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2019-02-01&api_key=${API_KEY}`
    );
    let dataFormated7 = await data7.json();

    let data8 = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2020-02-01&api_key=${API_KEY}`
    );
    let dataFormated8 = await data8.json();

    let data9 = await fetch(
      `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2013-02-01&api_key=${API_KEY}`
    );
    let dataFormated9 = await data9.json();

    console.log(dataFormated2);
    setDatos(dataFormated);
    setDatos2(dataFormated2);
    setDatos3(dataFormated3);
    setDatos4(dataFormated4);
    setDatos5(dataFormated5);
    setDatos6(dataFormated6);
    setDatos7(dataFormated7);
    setDatos8(dataFormated8);
    setDatos9(dataFormated9);

    console.log(data2.url);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <main>
        <h1>EARTH EXPLORER</h1>
        <div className="main-search_section">
          <input
            id="consult"
            type="text"
            placeholder="Where do you want to go?"
          />
          <button type="" onClick={() => getData()}>
            GO!
          </button>
        </div>
      </main>
      <div className="search-result">
        <h2>Your Place</h2>
        <div className="search-result_grid">
          <div className="search-result_data">
            <p>{Datos2.date}</p>

            {/* Condicional de una sola etiqueta img para salvar recurso en memoria y refactorizacion de codigo */}
            <img
              src={Datos2.url ? Datos2.url : errorImage}
              alt="Imagen de Mapa"
            />
          </div>
          <div className="search-result_data">
            <p>{Datos3.date}</p>
            <img
              src={Datos3.url ? Datos3.url : errorImage}
              alt="Imagen de Mapa"
            />
          </div>
          <div className="search-result_data">
            <p>{Datos4.date}</p>
            <img
              src={Datos4.url ? Datos3.url : errorImage}
              alt="Imagen de Mapa"
            />
          </div>
          <div className="search-result_data">
            <p>{Datos5.date}</p>
            <img
              src={Datos5.url ? Datos5.url : errorImage}
              alt="Imagen de Mapa"
            />
          </div>
          <div id="myAnswer" className="search-result_data">
            <h4>Actual View</h4>
            <p>{Datos.date}</p>
            <img
              src={Datos.url ? Datos.url : errorImage}
              alt="Imagen de Mapa"
            />
          </div>
          <div className="search-result_data">
            <p>{Datos6.date}</p>
            <img
              src={Datos6.url ? Datos6.url : errorImage}
              alt="Imagen de Mapa"
            />
          </div>
          <div className="search-result_data">
            <p>{Datos7.date}</p>
            <img
              src={Datos7.url ? Datos7.url : errorImage}
              alt="Imagen de Mapa"
            />
          </div>
          <div className="search-result_data">
            <p>{Datos8.date}</p>
            <img
              src={Datos8.url ? Datos8.url : errorImage}
              alt="Imagen de Mapa"
            />
          </div>
          <div className="search-result_data">
            <p>{Datos9.date}</p>
            <img
              src={Datos9.url ? Datos9.url : errorImage}
              alt="Imagen de Mapa"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
