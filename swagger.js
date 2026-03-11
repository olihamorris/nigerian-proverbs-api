const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Nigerian Proverbs API",
      version: "1.0.0",
      description: "API documentation for Nigerian Proverbs and Tribes"
    },
    servers: [
      {
        url: "http://localhost:8080"
      }
    ]
  },
  apis: ["./routes/*.js"] // this tells swagger where to read the docs
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;