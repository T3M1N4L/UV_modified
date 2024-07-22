import { useEffect } from "react";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import express from "express"; 
const app = express(); 

app.use("/libcurl/", express.static(libcurlPath));
app.use("/baremux/", express.static(baremuxPath));
import { BareMuxConnection } from "@mercuryworkshop/bare-mux"
let connection = new BareMuxConnection("/baremux/worker.js")
await connection.setTransport("/libcurl/index.mjs", [{ wisp: "wss://wisp.mercurywork.shop/" }]);

const useSw = (path: string) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(() => {
        
      })
      navigator.serviceWorker
     .register(path)
       .then(
          function (registration) {
            console.log(
              `[sw] ${path} successfuly registered with a scope of ${registration.scope}`
            );
          },
          function (err) {
            console.log(
              `%c[sw] ${path} failed to register, error: `,
              "color:red;",
              err
            );
          }
        );
    }
  }, [path]);
};

export default useSw;