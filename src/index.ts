import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import router from './routes';

dotenv.config();

if (!process.env.PORT) {
  console.error('PORT not defined.');
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.use(router);

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
