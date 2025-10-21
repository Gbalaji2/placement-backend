import Student from '../models/Student.js';

export const getStudents = async (req, res) => {
  const students = await Student.find().populate('user');
  res.json(students);
};

export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
