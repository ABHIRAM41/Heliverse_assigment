import express from 'express';
import { getTeam, postTeam, allTeams } from "../Controllers/teamController.js";
const router= express.Router();

router.route('/').get(allTeams).post(postTeam);
router.route("/:id").get(getTeam);


export default router;