import { Router } from 'express';

import { NotificationService } from '../../shared';

import { NotificationController } from './controller';

export class NotificationRoutes {
  static get routes(): Router {
    const router = Router();
    const notificationService = new NotificationService();

    const controller = new NotificationController(notificationService);

    router.post('/notifications', controller.createNotification);
    router.get('/notifications/user/:userId', controller.getUserNotifications);
    router.put('/notifications/:notificationId/read', controller.markNotificationAsRead);

    return router;
  }
}
