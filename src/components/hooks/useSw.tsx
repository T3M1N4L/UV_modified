import { useEffect } from "react";
import SetTransport from "@mercuryworkshop/bare-mux";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";

app.use("/libcurl/", express.static(libcurlPath));
app.use("/baremux/", express.static(baremuxPath));
import { BareMuxConnection } from "@mercuryworkshop/bare-mux"
let connection = new BareMuxConnection("/baremux/worker.js")

const useSw = (path: string) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(() => {
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
