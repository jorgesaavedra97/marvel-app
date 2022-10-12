import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

// Routes
import heroesRoutes from './routes/heroes.routes';

const app = express();

// Settings
app.set('port', 4000);

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(express.json());

// Routes
app.use('/api/heroes', heroesRoutes);
app.all('*', (req, res) => {
    res.status(404)
      .json({ error: 'Request not found.' });
})

export default app;
