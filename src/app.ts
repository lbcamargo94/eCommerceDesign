// express;
import "express-async-errors";
import express from "express";
// Cors
import cors from "cors";
// Helmet
import helmet from "helmet";
// Routes
import Routes from "./routes";
// Middleware
import HandleError from "./middleware/errors";

const { handleError } = new HandleError();

const app: express.Express = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(Routes);

app.use(handleError);

export { app };
