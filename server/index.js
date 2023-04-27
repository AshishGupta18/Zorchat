const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
const r = await axios.put(
    'https://api.chatengine.io/users/',
    {username:username , secret: username , first_name : username},
    {"headers": {"private-key": "17e6e416-7263-4ee8-80b9-e3644417e49f"}}
)
return res.status(r.status).json(r.data)
  }
  catch{
    return res.status(e.response.status).json(e.response.data)
  }
  return res.json({ username: username, secret: "ashish18" });
});

app.listen(3001);