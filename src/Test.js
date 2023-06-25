import React, { useEffect, useInsertionEffect, useState } from "react";
import io from "socket.io-client";
const MyComponent = () => {
  let socket = null;
  const [image, setImage] = useState("");
  const [videourl, setvideourl] = useState(
    "https://www.youtube.com/watch?v=5A66c8sBDrI"
  );
  useEffect(() => {
    if (socket == undefined) {
      socket = io("http://localhost:420", { transports: ["websocket"] });
    }
    return () => {};
  }, []);
  function doConection() {
    socket.on("connect", () => {
      console.log("Conexión de socket establecida");
    });
    socket.on("image", (event) => {
      setImage(`data:image/png;base64,${event}`);
    });
    socket.on("disconnect", () => {
      console.log("Conexión de socket cerrada");
    });
  }
  function imagenhandler() {
    socket.emit("ver", { data: "info" });
  }
  function desconect() {
    socket.disconnect();
  }
  function changehandlerurl(ev) {
    let valor = ev.target.value;
    setvideourl(valor);
    console.log(valor);
  }
  function cargar() {
    socket.emit("v1", { video: videourl });
  }
  function full() {
    socket.emit("full", { action: "full" });
  }
  function play() {
    socket.emit("play", { action: "play" });
  }
  function next() {
    socket.emit("next", { action: "next" });
  }
  function cinnema() {
    socket.emit("cinema", { action: "cinema" });
  }

  return (
    <div>
      {/* Contenido de tu componente */}
      <p>modulos1</p>
      <div>
        <input type={"button"} value="link" onClick={doConection} />
        <input type={"button"} value="unlink" onClick={desconect} />
        <input type={"button"} value="cargar imagen" onClick={imagenhandler} />
      </div>
      <div>
        <p>Controles</p>
        <input type={"button"} value="play" onClick={play} />
        <input type={"button"} value="full" onClick={full} />
        <input type={"button"} value="cinnema" onClick={cinnema} />
        <input type={"button"} value="next" onClick={next} />
        <input
          type={"text"}
          value={videourl}
          placeholder="url"
          onChange={changehandlerurl}
        />
        <input type={"button"} value="cargar" onClick={cargar} />
      </div>
      <div>{image && <img src={image} alt="Imagen recibida por socket" />}</div>
    </div>
  );
};
export default MyComponent;
