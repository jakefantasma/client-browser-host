import React, { useState } from "react";
import { TreeContext } from "./Api";

const Controller = () => {
  const { fetchData } = TreeContext();
  const [videoUrl, setVideoUrl] = useState("");
  const handlerCargar = async () => {
    if (videoUrl) {
      const respuesta = await fetchData("youtube\\v1", { url: videoUrl });
      console.log(respuesta);
    }
  };
  const estado = async () => {
    const respuesta = await fetchData("status");
    console.log(respuesta);
  };
  const play = async () => {
    const respuesta = await fetchData("youtube\\play");
    console.log(respuesta);
  };
  const cinema = async () => {
    const respuesta = await fetchData("youtube\\cinema");
    console.log(respuesta);
  };
  const fullScreen = async () => {
    const respuesta = await fetchData("youtube\\full");
    console.log(respuesta);
  };
  return (
    <div id="Panel">
      <div>
        <input
          id="videurl"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="url"
        />
        <button onClick={handlerCargar}>Cargar video</button>
      </div>
      <div id="" className="bntList">
        <button onClick={estado}>Status</button>
        <button onClick={play}>Play</button>
        <button onClick={play}>Stop</button>
        <button onClick={fullScreen}>FullScreen</button>
        <button onClick={cinema}>Cinema</button>
      </div>
    </div>
  );
};

export default Controller;
