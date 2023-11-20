import express from 'express';
import morgan from 'morgan';
import languageRoutes from './routes/language.routes'; // Routes

const app = express();

// Settings
app.set('PORT', 4000);

// Middlewares
app.use(morgan('dev'))

// Routes
app.use("/api/languages", languageRoutes);

export default app;