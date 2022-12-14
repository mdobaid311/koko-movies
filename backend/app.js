import express from 'express'
import cors from "cors"
import authRouter from "./router/authRouter.js"


const app = express()

app.use(cors())
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send({
    message: "working"
}))

app.use("/api/v1/auth", authRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})