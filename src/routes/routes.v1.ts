import Express from 'express';
import TripController from '../controllers/trips.controller';

const router = Express.Router();


const tripController = new TripController();

router.post('/trip/book', async (req: Express.Request, res: Express.Response) => {
    await tripController.BookTrip(req, res);
});

router.post('/trip/transaction', async (req: Express.Request, res: Express.Response) => {
    await tripController.Transaction(req, res);
});

router.get('/trip/available', async (req: Express.Request, res: Express.Response) => {
    await tripController.AvailableTrips(req, res);
});

export default router;