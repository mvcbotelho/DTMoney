import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { createServer, Model } from "miragejs";

import { GlobalStyle } from "./styles/global";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer",
          type: "deposit",
          category: "Job",
          amount: 7000,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Mercado",
          type: "withdraw",
          category: "Alimentação",
          amount: 500,
          createdAt: new Date(),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
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
