import { Router } from "express";
import { methods as languageController } from "../controllers/language.controller"

const router = Router();

router.get('/', languageController.getLanguages);

export default router;