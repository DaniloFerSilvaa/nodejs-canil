import {Router} from 'express';
import * as PagesControllers from '../controllers/pagesControllers';
import * as SearchControllers from '../controllers/searchController';

const router = Router();

router.get('/', PagesControllers.home);
router.get('/dogs', PagesControllers.dogs);
router.get('/cats', PagesControllers.cats);
router.get('/fishes', PagesControllers.fishes);

router.get('/search', SearchControllers.search);

export default router;