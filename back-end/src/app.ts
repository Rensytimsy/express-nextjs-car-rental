import express from "express";
import sampleData from "./routes/sampleRoute/sampleData";
import userRoutes from "./routes/userRoutes/index"
import { errorHandler } from "./middlewares/errorHandler";
import {resolver} from "../graphql/resolver"
import { graphqlHTTP } from "express-graphql";
import { testSchema } from "../graphql/types";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api", sampleData);
app.use("/api", userRoutes);
//Graphql endpoint app testing
app.use("/api/graphql", graphqlHTTP({
    schema: testSchema,
    rootValue: resolver,
    graphiql: true
}));

app.use(errorHandler);

export default app;