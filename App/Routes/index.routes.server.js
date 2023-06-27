import {displayHomePage, displayWomenPage, displayMenPage, displayKidsPage} from '../Controllers/index.controllers.server.js'
import { Router } from "express";


const router = Router(); // I am initializing the router function.

// app.use('/')
router.get('/', displayHomePage);
router.get('/women', displayWomenPage);
router.get('/men', displayMenPage);
router.get('/kids', displayKidsPage);



export default router;