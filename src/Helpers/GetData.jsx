import { useState } from "react";

export const GetData = () => {
  const [data, setData] = useState([]);
  const API_KEY = "nrvbaThb5ro5VIqRud7Axn0PCirbDXTVorCuWe9Y";
  const errorImage =
    "https://www.mdzol.com/u/fotografias/m/2020/8/6/f850x638-944869_1022358_5050.png";

  const getData = async () => {
    const position = document.querySelector("input").value;
    const value = position.split(",");
    const lat = value[0].trim();
    const long = value[1].trim();
    const data_consultas = [];

    for (let i = 0; i < 9; i++) {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=${
            2014 + i
          }-02-01&api_key=${API_KEY}`
        );
        const dataFormated = await response.json();
        if (dataFormated.id) {
          data_consultas.push(dataFormated);
        } else {
          // Si la respuesta no tiene un 'id', entonces asumimos que no hay imagen disponible para esa fecha.
          data_consultas.push({
            date: `No imagery for specified date.`,
            errorImage: errorImage,
          });
        }
      } catch (error) {
        // En caso de un error en la solicitud, agregamos un objeto de error.
        data_consultas.push({
          date: `Error fetching data for date: ${2013 + i}-02-01`,
          errorImage: errorImage,
        });
      }
    }
    setData(data_consultas);
    
  };

  return {
    data,
    getData,
  };
};
