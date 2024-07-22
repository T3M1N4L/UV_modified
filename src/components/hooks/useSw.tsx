import { useEffect } from "react";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { BareMuxConnection } from "@mercuryworkshop/bare-mux"
import express from "express"; 
const app = express(); 

const useSw = (path: string) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(() => {
         
            app.use("/libcurl/", express.static(libcurlPath));
            app.use("/baremux/", express.static(baremuxPath));

            let connection = new BareMuxConnection("/baremux/worker.js")
            await connection.setTransport("/libcurl/index.mjs", [{ wisp: "wss://wisp.mercurywork.shop/" }]);

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