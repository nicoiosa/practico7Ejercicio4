import { Router } from "express";

const router = Router();

router.route("/colors").get().post();
router.route("/colors/:id").delete();

export default router;
