import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.post("/gh-webhook", async function (req, res) {
    //console.log(req.body);

    const payload = req.body;

    let webhook_info = {
      repo: payload.repository.name,
      author: payload.sender.login,
      time: payload.head_commit.timestamp,
    };

    const save_webhook = await req.db
      .collection("webhooks")
      .insertOne(webhook_info);

    res.status(201).send({
      message: "Webhook Event successfully logged",
    });
  });

  app.listen(3000);
};

start();
