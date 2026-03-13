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
        url: "https://nigerian-proverbs-api.onrender.com"
      }
    ],
    components: {
      schemas: {
        Proverb: {
          type: "object",
          properties: {
            proverb: {
              type: "string",
              example: "A child who washes his hands eats with kings"
            },
            meaning: {
              type: "string",
              example: "Hard work brings success"
            },
            tribe: {
              type: "string",
              example: "Igbo"
            },
            provider: {
              type: "string",
              example: "Morris Oliha"
            },
            date: {
              type: "string",
              example: "2026"
            },
            language: {
              type: "string",
              example: "Igbo"
            },
            category: {
              type: "string",
              example: "Wisdom"
            }
          }
        },
        Tribe: {
          type: "object",
          properties: {
            tribe: {
              type: "string",
              example: "Yoruba"
            },
            region: {
              type: "string",
              example: "South West Nigeria"
            },
            language: {
              type: "string",
              example: "Yoruba"
            },
            population: {
              type: "string",
              example: "40 million"
            },
            famousProverb: {
              type: "string",
              example: "The child who asks questions never gets lost"
            },
            provider: {
              type: "string",
              example: "Morris Oliha"
            },
            date: {
              type: "string",
              example: "2026"
            }
          }
        }
      }
    }
  },
  apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;