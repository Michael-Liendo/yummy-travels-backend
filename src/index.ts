import express from "express";

const app: express.Application = express();
const port = process.env.PORT || 8888;


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});


export default app;