import { Router } from "express";
import {
  createColor,
  deleteColor,
  listColors,
} from "../controllers/colors.controllers.js";
import validationsColor from "../helpers/validationsColors.js";

const router = Router();

router.route("/colors").get(listColors).post([validationsColor], createColor);
router.route("/colors/:id").delete(deleteColor);

export default router;
