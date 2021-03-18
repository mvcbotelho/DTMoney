import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { createServer } from "miragejs";

import { GlobalStyle } from "./styles/global";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Supermercado",
          amount: 400,
          type: "withdraw",
          category: "Food",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Freelancer app",
          amount: 5400,
          type: "deposit",
          category: "Job",
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
