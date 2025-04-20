// The address of this server connected to network is : 
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383

const express = require("express");
const app = express();
const PORT = 8383;

console.log("Hello from app");


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`));
