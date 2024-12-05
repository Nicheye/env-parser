import { config } from 'dotenv';
config(); // Load .env file before other imports

import { AppConfig } from './AppConfig';
import 'reflect-metadata';

try {
  const config = new AppConfig();
  console.log('Base URL:', config.baseUrl);
  console.log('API Key:', config.apiKey);
  console.log('Example Variable:', config.exampleVariable);
} catch (error) {
  console.error('Error:', (error as Error).message);
}
