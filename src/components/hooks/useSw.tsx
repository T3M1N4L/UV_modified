import { useEffect } from "react";
import { SetTransport } from "@mercuryworkshop/bare-mux";

const useSw = (path: string) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(() => {
        SetTransport("EpxMod.EpoxyClient", { wisp: "wss://nebulaproxy.io/wisp/" });
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
