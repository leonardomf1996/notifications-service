/* eslint-disable prettier/prettier */
import { Content } from '@application/entities/content';
import { Notification, NotificationProps } from '@application/entities/notification';

// Transforma todos os campos de NotificationProps como opcionais
type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('This is a notification'),
    category: 'social',
     recipientId: 'example-recipient-id',
    ...override
  });
}
