import express from "express";
import dotenv from 'dotenv'
import taskRoute from "./routes/taskRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger.js";

const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", taskRoute);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});