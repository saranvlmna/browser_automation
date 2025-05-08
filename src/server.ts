import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 4578;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("hey server");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
