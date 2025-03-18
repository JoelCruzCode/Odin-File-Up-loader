
import dotenv from "dotenv"
import express from "express"
import { Request, Response, NextFunction } from "express"
import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "url";

dotenv.config();
const { PORT } = process.env
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();

// parse json in requests
app.use(express.json())
// parse form data in requests
app.use(express.urlencoded({ extended: true }))




app.listen(PORT, () => {
	console.log("Listening on port: ", PORT)
})

