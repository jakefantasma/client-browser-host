import { createContext, useContext, useState } from "react";
const ctx = createContext();
export function TreeContext() {
  return useContext(ctx);
}
export function UseData({ children }) {
  const [estado, setestado] = useState({
    data: [],
  });
  //all petition all post

  const fetchData = async (subRoute, data = {}) => {
    let host = "http://localhost:420";
    try {
      const response = await fetch(`${host}/${subRoute}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error(error);
    }
  };

  const value = { fetchData };
  return <ctx.Provider value={value}>{children}</ctx.Provider>;
}
export default ctx;
