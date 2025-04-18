import express from "express";
import sampleData from "./routes/sampleRoute/sampleData";
import userRoutes from "./routes/userRoutes/index"
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(express.json());

app.use("/api", sampleData);
app.use("/api", userRoutes);

app.use(errorHandler);

export default app;