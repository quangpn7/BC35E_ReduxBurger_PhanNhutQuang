import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./components/redux/configStore";
import "./burger.css";
import Burger from "./components/Burger/Burger";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div className="bg-dark text-white display-5 px-5 mb-5">
      Burger Store With Redux
    </div>
    <Burger />
    <div className="bg-dark text-white px-5 mt-5">
      <span className="fst-italic">
        Checkout{" "}
        <a
          href="https://github.com/quangpn7/BC35E_ReduxBurger_PhanNhutQuang#readme"
          target={"_blank"}
        >
          README.md
        </a>
      </span>
    </div>
  </Provider>
);
