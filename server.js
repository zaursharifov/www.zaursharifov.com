const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  // res.sendFile(__dirname, "..", "/public", "index.html");
});
app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "brutalstest@gmail.com",
      pass: "meeoyiecuradainy",
    },
  });

  const mailOptions = {
    from: "brutalstest@gmail.com",
    to: req.body.email,
    subject: `Message from ${req.body.name}`,
    text: req.body.text,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
});
