import express from "express";
import { addToPlaylist, getPlaylists } from "../controllers/playlists.js";
const router = express.Router();

router.put("/addToPlaylist", addToPlaylist);
router.get("/getPlaylists", getPlaylists);

export default router;

