const express = require("express");
const app = express();
const PORT = 8383;

app.listen(PORT, () => {
  console.log(`S  erver has started on: ${PORT}`);
});
