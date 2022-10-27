// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import { Greetings } from "./components/greetings";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Routes>
      <Route index element={<Greetings />} />
    </Routes>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
