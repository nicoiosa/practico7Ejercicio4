import { check } from "express-validator";
import resultValidations from "./resultValidations.js";

const validationsColors = [
  check("color")
    .notEmpty()
    .withMessage("The color name is obligatory")
    .isLength({ max: 25 })
    .withMessage("The recipe name must have at most 25 characters"),
  (req, res, next) => resultValidations(req, res, next),
];
export default validationsColors;
