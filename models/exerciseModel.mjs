// models/exerciseModel.js
import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  unit: { type: String, required: true, enum: ['kgs', 'lbs'] },
  date: { type: String, required: true, match: /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{2}$/ }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
