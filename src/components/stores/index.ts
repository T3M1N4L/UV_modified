/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import {  persist } from "zustand/middleware";
// import {createStore} from "idb-keyval"
// const customStore = createStore('Emerald_DB', 'Emerald_Store');


interface SettingsState {
    proxy: "uv";
    search: string;
    cloak: "none" | "aboutBlank";
    title: string;
    transport: {
      path: string;
      name: string;
    };
    icon: string;
    panicLink: string;
    panicKey: string;
    setCloak: (str: "none" | "aboutBlank") => void;
    setTransport: (path: string, name: string) => void;
    setTitle: (str: string) => void;
    setIcon: (str: string) => void;
    setPLink: (str: string) => void;
    setPKey: (str: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, _get) => ({
        proxy: "uv",
        search: "https://duckduckgo.com/?q=",
        cloak: "none",
        title: "UV_modified",
        transport: {
          path: "/libcurl/index.mjs",
          name: "libcurl",
        },
        icon: "",
        panicLink: "https://classroom.google.com",
        panicKey: "|",
        setTitle: (str) => set(() => ({ title: str })),
        setTransport: (path, name) => set(() => ({ transport: {name, path} })),
        setIcon: (str) => set(() => ({ icon: str })),
        setCloak: (str) => set(() => ({ cloak: str })),
        setPLink: (str) => set(() => ({ panicLink: str})),
        setPKey: (str) => set(() => ({ panicKey: str })),
    }),
    {
      name: "settings", // name of item in the storage (must be unique)
    }
  )
);

export const useProxiedStore = create<{
  isProxied: boolean;
  setIsProxied: (bool: boolean) => void;
  proxyString: string;
  setProxyString: (str: string) => void;
}>((set) => ({
  isProxied: false,
  setIsProxied: (bool) => set(() => ({ isProxied: bool })),
  proxyString: "",
  setProxyString: (str) => set(() => ({ proxyString: str })),
}));

type App = {
  title: string,
  description: string,
  url: string,
  id: string
}



export const useAppStore = create<{
  apps: App[],
  addApp: (app: App) => void,
  removeApp: (id: string) => void,
}>()(
  persist(
    (set, get) => ({
      apps: [],
      addApp: (app) => set(() => ({ apps: [...get().apps, app] })),
      removeApp: (id) => set(() => ({ apps: get().apps.filter((app) => app.id !== id) })),
    }),
    {
      name: "appStore", 
    }
  )
);




// type IDBStore = {
//   bare: string,
//   setBare: (str: string) => void;
// }

// export const useIDBStore = create<IDBStore>()(
//   persist(
//     (set, get) => ({
//       bare: "",
//       setBare: (str) => set(() => ({ bare: str })),
//     }),
//     {
//       name: 'Emerald_Storage_01', // unique name
//       storage: createJSONStorage(() => storage),
//     },
//   ),
// )

// export const useBoundStore = create<{
//   bears: number;
//   addABear: () => void;
// }>()(
//   persist(
//     (set, get) => ({
//       bears: 0,
//       addABear: () => set({ bears: get().bears + 1 }),
//     }),
//     {
//       name: 'food-storage', // unique name
//       storage: createJSONStorage(() => storage),
//     },
//   ),
// )




// const storage: StateStorage = {
//   getItem: async (name: string): Promise<string | null> => {
//     console.log(name, "has been retrieved");
//     const value = await get(name, customStore);
//     return value ?? null;
//   },
//   setItem: async (name: string, value: string): Promise<void> => {
//     console.log(name, "with value", value, "has been saved");
//     await set(name, value, customStore);
//   },
//   removeItem: async (name: string): Promise<void> => {
//     console.log(name, "has been deleted");
//     await del(name, customStore);
//   },
// }
