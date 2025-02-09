import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import AppSuspense from "@/components/widgets/AppSuspense";

import router from "@/routes";
import { store } from "@/store";
import "@/styles/style.scss";
import Header from "@/components/Header/Header";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from "lucide-react";

const persistor = persistStore(store);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <AppSuspense>
        <RouterProvider router={router} />
      </AppSuspense>
    </Provider>
  );
}

export default App;
