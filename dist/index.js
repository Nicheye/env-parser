"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // Load .env file before other imports
const AppConfig_1 = require("./AppConfig");
require("reflect-metadata");
try {
    const config = new AppConfig_1.AppConfig();
    console.log('Base URL:', config.baseUrl);
    console.log('API Key:', config.apiKey);
    console.log('Example Variable:', config.exampleVariable);
}
catch (error) {
    console.error('Error:', error.message);
}
