import express from "express"

const router = express.Router()

router.get("/login", (req, res) => res.send({
    message: "router working"
}))

export default router