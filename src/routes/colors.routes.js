import { Router } from "express";
import {
  createColor,
  deleteColor,
  listColors,
} from "../controllers/colors.controllers.js";

const router = Router();

router.route("/colors").get(listColors).post(createColor);
router.route("/colors/:id").delete(deleteColor);

export default router;
