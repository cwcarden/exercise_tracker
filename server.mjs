// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { createExercise, getAllExercises, getExerciseById, updateExercise, deleteExercise } from './controllers/exerciseController.mjs';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

app.post('/exercises', createExercise);
app.get('/exercises', getAllExercises);
app.get('/exercises/:id', getExerciseById);
app.put('/exercises/:id', updateExercise);
app.delete('/exercises/:id', deleteExercise);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
