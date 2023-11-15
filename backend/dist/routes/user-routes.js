import { Router } from 'express';
import { getAllUsers } from '../controllers/userController.js';
const userRoutes = Router();
userRoutes.get('/', getAllUsers);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map