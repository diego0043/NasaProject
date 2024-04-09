import { useState } from "react";

export const GetData = () => {
  const [data, setData] = useState([]);
  const API_KEY = "nrvbaThb5ro5VIqRud7Axn0PCirbDXTVorCuWe9Y";
  const errorImage =
    "https://www.mdzol.com/u/fotografias/m/2020/8/6/f850x638-944869_1022358_5050.png";

  async function getData() {
    const position = document.querySelector("input").value;
    const value = position.split(",");
    const lat = value[0].trim();
    const long = value[1].trim();
    const data_consultas = [];

    console.log(lat, long);

    for (let i = 0; i < 9; i++) {
      try {
        const data = await fetch(
          `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=${
            2013 + i
          }-02-01&api_key=${API_KEY}`
        );
        const dataFormated = await data.json();
        if (dataFormated.id) {
          data_consultas.push(dataFormated);
        }
      } catch (e) {
        data_consultas.push({
          date: "No imagery for specified date.",
          errorImage: errorImage,
        });
      }
    }

    setData(data_consultas);
  }

  return {
    data,
    getData,
  };
};
