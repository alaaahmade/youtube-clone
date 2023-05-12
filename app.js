const express = require('express');
const path = require('path');
const app = express();

app.set('PORT', 9000)
app.use(express.static(path.join(__dirname, 'src', 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src', 'build', 'index.html'));
});

app.listen(app.get('PORT'), () => {
  console.log(`server is running on http://localhost:${app.get('PORT')}`);
});