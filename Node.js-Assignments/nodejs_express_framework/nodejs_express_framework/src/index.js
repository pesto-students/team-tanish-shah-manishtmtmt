const express = require("express");
const path = require("path");

// Swagger configuration
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const logger = require("./middleware/logger");
const tasksRouter = require("./routes/tasks");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, './routes', '*.js')],
};

const app = express();

const swaggerSpec = swaggerJsdoc(options);

//Allows public folder to be unblocked
app.use(express.static("public"));
app.use(express.json());
app.use(logger);


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "notes.html"));
});

app.use("/tasks", tasksRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
