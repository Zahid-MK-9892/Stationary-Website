import express from 'express';
import { getProjects, getProjectById, createProject, updateProjectStatus, deleteProject } from '../controllers/projectController.js';

const router = express.Router();

router.route('/')
  .get(getProjects)
  .post(createProject);

router.route('/:id')
  .get(getProjectById)
  .put(updateProjectStatus)
  .delete(deleteProject);

export default router;
