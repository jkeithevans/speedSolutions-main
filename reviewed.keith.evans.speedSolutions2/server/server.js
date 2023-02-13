const express = require('express');
// morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');
require('./connection');

const app = express();

const PORT = process.env.port || 3006;
// Log incoming requests
// app.use(logger(":method :url"))
// app.use(logger)
// app.use(morgan('tiny'))
// app.use(morgan(`|** :method **|  |* :url *| => :response-time |* status: :status *|`))
app.use(cors());
// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from build folder
// app.use(express.static(__dirname + "/build"))

// Route anything prefixed with api to router
// app.use(dataRouter)

// app.use("/user",routes)
// app.use("/parts",routes)
// app.use("/email",routes)
app.use(routes);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server running on PORT: ${PORT}`);
  // (err) ? console.log(err) : console.log(`Server running on PORT: ${PORT}`);
});
