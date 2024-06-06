import { Router } from 'express';
import * as controller from "../controllers/product.controllers.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const productos = await controller.getProducts();
        res.render("home", {productos:productos});
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor"})
    }
})

router.get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts");
})

router.get("/messages", (req, res) => {
    res.render("messages")
});

export default router;